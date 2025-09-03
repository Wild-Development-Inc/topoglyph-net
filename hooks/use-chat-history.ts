import { useState } from 'react'
import { Message, useChatStream } from './use-chat-stream'

export function useChatHistory(model: string, apiKey?: string) {
    const [messages, setMessages] = useState<Message[]>([])
    const { response, loading, error, streamChat } = useChatStream()

    const sendMessage = async (content: string) => {
        const newMessages: Message[] = [...messages, { role: 'user', content }]
        setMessages(newMessages)

        await streamChat({ model, messages: newMessages, apiKey })

        // When response finishes, append assistant message
        setMessages((prev) => [
            ...prev,
            { role: 'assistant', content: response },
        ])
    }

    return { messages, sendMessage, loading, error, response }
}
