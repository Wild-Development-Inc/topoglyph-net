'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const BASE_URL = 'http://localhost:1337'

export async function apiFetch<T>(
    url: string,
    options?: RequestInit
): Promise<T> {
    const res = await fetch(`${BASE_URL}${url}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    })

    if (!res.ok) {
        throw new Error(`API error: ${res.status}`)
    }

    return res.json()
}

export interface Conversation {
    _id: string
    title: string
    createdAt: string
    updatedAt: string
}

export function useConversations() {
    return useQuery<Conversation[]>({
        queryKey: ['conversations'],
        queryFn: () => apiFetch<Conversation[]>('/conversations'),
    })
}

export interface Message {
    _id: string
    conversationId: string
    sender: string
    content: string
    createdAt: string
    updatedAt: string
}

export interface ConversationWithMessages {
    conversation: Conversation
    messages: Message[]
}

export function useConversation(id: string) {
    return useQuery<ConversationWithMessages>({
        queryKey: ['conversation', id],
        queryFn: () =>
            apiFetch<ConversationWithMessages>(`/conversations/${id}`),
        enabled: !!id,
    })
}

interface NewMessage {
    conversationId: string
    sender: string
    content: string
}

export function usePostMessage() {
    const queryClient = useQueryClient()

    return useMutation<Message, Error, NewMessage>({
        mutationFn: ({ conversationId, sender, content }) =>
            apiFetch<Message>(`/conversations/${conversationId}/messages`, {
                method: 'POST',
                body: JSON.stringify({ sender, content }),
            }),

        // Optimistically refresh messages after posting
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({
                queryKey: ['conversation', variables.conversationId],
            })
        },
    })
}
