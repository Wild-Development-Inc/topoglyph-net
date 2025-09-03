'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from '@/components/ui/carousel'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import ModelCard, { Model } from '@/components/ui/model-card'
import { MessageList } from '@/components/ui/message-list'
import {
    useConversation,
    useConversations,
    usePostMessage,
} from '@/hooks/use-conversations'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function ConversationsSection() {
    // onca a model is selected, then you can start a conversation with it
    // once a conversation is opened, then you can select an application to run
    // or you can begin typing a message to the model as is
    // additionally, you can press a button to scroll up and view the system prompt

    return (
        <QueryClientProvider client={queryClient}>
            <ChatApp />
        </QueryClientProvider>
    )
}

interface Item {
    name: string
    description: string
    icon: string
    color: string
    time: string
}

let notifications = [
    {
        name: 'Payment received',
        description: 'Magic UI',
        time: '15m ago',

        icon: '💸',
        color: '#00C9A7',
    },
    {
        name: 'User signed up',
        description: 'Magic UI',
        time: '10m ago',
        icon: '👤',
        color: '#FFB800',
    },
    {
        name: 'New message',
        description: 'Magic UI',
        time: '5m ago',
        icon: '💬',
        color: '#FF3D71',
    },
    {
        name: 'New event',
        description: 'Magic UI',
        time: '2m ago',
        icon: '🗞️',
        color: '#1E86FF',
    },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                'relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4',
                // animation styles
                'transition-all duration-200 ease-in-out hover:scale-[103%]',
                // light styles
                'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
                // dark styles
                'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal dark:text-white/60">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    )
}

export function ChatApp() {
    const { data: conversations } = useConversations()
    const [selectedId, setSelectedId] = React.useState<string | null>(null)

    const { data: conversationData } = useConversation(selectedId || '')
    const postMessage = usePostMessage()

    return (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <div>
                <h3>Conversations</h3>
                <ul>
                    {conversations?.map((c) => (
                        <li key={c._id} onClick={() => setSelectedId(c._id)}>
                            {c.title}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                {conversationData && (
                    <>
                        <h3>{conversationData.conversation.title}</h3>
                        <ul>
                            {conversationData.messages.map((m) => (
                                <li key={m._id}>
                                    <strong>{m.sender}:</strong> {m.content}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() =>
                                postMessage.mutate({
                                    conversationId:
                                        conversationData.conversation._id,
                                    sender: 'You',
                                    content: 'Hello world!',
                                })
                            }
                        >
                            Send Hello
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}
