import { useState, useCallback } from 'react'

export type Message = {
    role: 'system' | 'user' | 'assistant'
    content: string
}

type StreamOptions = {
    model: string
    messages: Message[]
    apiKey?: string // Optional if you rely on server proxy
}

export function useChatStream() {
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const streamChat = useCallback(
        async ({ model, messages, apiKey }: StreamOptions) => {
            setLoading(true)
            setError(null)
            setResponse('')

            try {
                const res = await fetch(
                    'https://openrouter.ai/api/v1/chat/completions',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            ...(apiKey
                                ? { Authorization: `Bearer ${apiKey}` }
                                : {}),
                        },
                        body: JSON.stringify({
                            model,
                            messages,
                            stream: true,
                        }),
                    }
                )

                if (!res.body) throw new Error('No response body')

                const reader = res.body.getReader()
                const decoder = new TextDecoder('utf-8')

                while (true) {
                    const { done, value } = await reader.read()
                    if (done) break

                    const chunk = decoder.decode(value, { stream: true })

                    // OpenRouter uses SSE format: "data: {...}\n\n"
                    for (const line of chunk.split('\n')) {
                        if (!line.startsWith('data: ')) continue
                        const json = line.replace('data: ', '').trim()
                        if (json === '[DONE]') continue

                        try {
                            const parsed = JSON.parse(json)
                            const delta = parsed.choices?.[0]?.delta?.content
                            if (delta) {
                                setResponse((prev) => prev + delta)
                            }
                        } catch (err) {
                            console.error('Stream parse error:', err)
                        }
                    }
                }
            } catch (err: any) {
                setError(err.message || 'Streaming error')
            } finally {
                setLoading(false)
            }
        },
        []
    )

    return { response, loading, error, streamChat }
}
