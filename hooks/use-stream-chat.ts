// hooks/useStreamChat.js
import { useState, useCallback, useEffect } from 'react'

const OPENROUTER_API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY

interface Message {
    role: string
    content: string
}

export const useStreamChat = (initialMessages: Message[] = []) => {
    const [messages, setMessages] = useState<Message[]>(initialMessages)
    const [isLoading, setIsLoading] = useState(false)

    const sendMessage = useCallback(
        async (newMessage: string, model = 'openai/gpt-4o', apiKey: string) => {
            if (!newMessage) return

            setIsLoading(true)

            // Optimistically add the user's message
            const userMessage = { role: 'user', content: newMessage }
            setMessages((prevMessages) => [...prevMessages, userMessage])

            // Construct the payload for the OpenRouter API
            const payload = {
                model,
                messages: [...messages, userMessage], // Send the full conversation history
                stream: true, // Enable streaming
            }

            try {
                const response = await fetch(
                    'https://openrouter.ai/api/v1/chat/completions',
                    {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${apiKey}`,
                            'Content-Type': 'application/json',
                            'HTTP-Referer': window.location.href, // Recommended for OpenRouter
                        },
                        body: JSON.stringify(payload),
                    }
                )

                if (!response.ok) {
                    throw new Error(
                        `OpenRouter API error: ${response.statusText}`
                    )
                }

                if (response.body == null) {
                    throw new Error(
                        `OpenRouter API error: response body is null.`
                    )
                }

                // Read the streamed response
                const reader = response.body.getReader()
                const decoder = new TextDecoder('utf-8')
                let assistantMessage = ''

                setMessages((prevMessages) => [
                    ...prevMessages,
                    { role: 'assistant', content: '' },
                ])

                // Process each chunk of the stream
                while (true) {
                    const { value, done } = await reader.read()
                    if (done) break

                    const chunk = decoder.decode(value)
                    const lines = chunk.split('\n')

                    for (const line of lines) {
                        if (line.startsWith('data: ')) {
                            const data = line.substring(6)
                            if (data === '[DONE]') continue

                            try {
                                const json = JSON.parse(data)
                                const content =
                                    json.choices?.[0]?.delta?.content || ''
                                if (content) {
                                    assistantMessage += content
                                    setMessages((prevMessages) => {
                                        const newMessages = [...prevMessages]
                                        newMessages[
                                            newMessages.length - 1
                                        ].content = assistantMessage
                                        return newMessages
                                    })
                                }
                            } catch (e) {
                                console.error('Error parsing JSON chunk:', e)
                            }
                        }
                    }
                }
            } catch (error) {
                console.error('Streaming error:', error)
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { role: 'assistant', content: 'An error occurred.' },
                ])
            } finally {
                setIsLoading(false)
            }
        },
        [messages]
    )

    return { messages, sendMessage, isLoading, setMessages }
}
