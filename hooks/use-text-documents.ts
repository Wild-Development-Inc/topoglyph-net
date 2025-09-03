import { useEffect, useState } from 'react'

type DocumentState = {
    url: string
    data: string | null
    isLoading: boolean
    error: string | null
}

export function useTextDocuments(urls: string[]) {
    const [docs, setDocs] = useState<DocumentState[]>(
        urls.map((url) => ({
            url,
            data: null,
            isLoading: true,
            error: null,
        }))
    )

    useEffect(() => {
        if (urls.length === 0) return

        setDocs(
            urls.map((url) => ({
                url,
                data: null,
                isLoading: true,
                error: null,
            }))
        )

        urls.forEach((url, index) => {
            fetch(url)
                .then(async (res) => {
                    if (!res.ok)
                        throw new Error(`Failed to fetch: ${res.statusText}`)
                    return res.text()
                })
                .then((text) => {
                    setDocs((prev) => {
                        const updated = [...prev]
                        updated[index] = {
                            url,
                            data: text,
                            isLoading: false,
                            error: null,
                        }
                        return updated
                    })
                })
                .catch((err: Error) => {
                    setDocs((prev) => {
                        const updated = [...prev]
                        updated[index] = {
                            url,
                            data: null,
                            isLoading: false,
                            error: err.message,
                        }
                        return updated
                    })
                })
        })
    }, [urls])

    return docs
}
