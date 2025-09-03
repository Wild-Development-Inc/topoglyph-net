'use client'

import React, { useEffect, useRef, useState, type FC } from 'react'
import DOMPurify from 'dompurify'
import { marked } from 'marked'

/**
 * Custom component for rendering markdown content. This component mostly
 * exists for security purposes, because we cannot 100% trust the response
 * from the model to not include insecure code.
 *
 * `untrustedMarkdownText` is explicity named as such to emphasize security
 * concerns when streaming responses from LLM providers, since we will be
 * writing those responses to the DOM via innerHTML;
 */
export const Markdown: FC<{ text: string | null }> = ({ text }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { html, error } = useSanitizedMarkdownHtmlString(text)

    useEffect(() => {
        const containerElement = containerRef.current as unknown
        if (containerElement == null || html == null || error != null) return
        if (containerElement instanceof HTMLElement)
            containerElement.innerHTML = html
    }, [html, error, containerRef])

    if (error) return <div>{error}</div>
    return <div className="markdown" ref={containerRef} />
}

/**
 * Takes the text as provided, uses the `marked` library to parse the markdown
 * into an html string, and finally uses `DOMPurify` to sanitize that html string.
 * This avoids security concerns related to XSS which may unintentially end up in
 * responses from large language models and so on.
 *
 * Sanitizes the html string, this is to explicity avoid any XSS vulnerabilities
 * that could occur from blindly trusting input from external services.
 *
 * Not hard to imagine that this could unintentionally happen if users are asking
 * questions about cybersecurity, who knows - point is avoid it.
 *
 * For more security options:
 * @see https://www.npmjs.com/package/dompurify
 */
const useSanitizedMarkdownHtmlString = (text: string | null) => {
    const [html, setHtml] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const renderMarkdown = async (input: string) => {
            try {
                const htmlString = await marked.parse(input)
                const cleanedHtmlString = DOMPurify.sanitize(htmlString)
                setHtml(cleanedHtmlString)
                setError(null)
            } catch (err) {
                if (err instanceof Error === false)
                    setError('Unknown error rendering markdown')
                else setError(err.message)
            }
        }

        if (text !== null) renderMarkdown(text)
    }, [text, setHtml, setError])

    return { html, error }
}
