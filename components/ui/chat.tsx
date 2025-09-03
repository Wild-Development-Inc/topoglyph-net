'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from './button'
import { Markdown } from './markdown'
import { useStreamChat } from '@/hooks/use-stream-chat'
import { useTextDocuments } from '@/hooks/use-text-documents'
import ModelCard from './model-card'
import { Loader2 } from 'lucide-react'

export type Message = {
    id: string
    role: 'user' | 'system'
    content: string
}

const myOpenRouterKey = ''

type ModelDefinition = {
    name: string
    avatar: React.ReactNode
    version: string
    model: string
    tags: string[]
    moduleUrls: string[]
    apps: {
        id: string
        label: string
        description: string
        prompt: string
        template: string
    }[]
}

type App = {
    id: string
    label: string
    description: string
    prompt: string
    template: string
}

/**
 * Handles fetching data needed to iniitialize a chat session,
 * primarily requires fetching the modules being used for the
 * model selected.
 *
 * Modules are fetched from an R2 bucket, this limits the rate
 * of development for new models, but gives us a lot of stability
 * which means that we don't need to worry about things breaking
 * in the short-term, so we can invest more time in developing
 * applications for the models we already have planned.
 */
export function ChatContainer({ model }: { model: ModelDefinition }) {
    const docs = useTextDocuments(model.moduleUrls)

    const isLoading = docs.some((d) => d.isLoading)
    const error = docs.find((d) => d.error)

    if (error) {
        return <div className="text-red-500">Error: {error.error}</div>
    }

    if (isLoading) {
        return <div>Loading documents...</div>
    }

    return (
        <Chat
            model={model}
            initialMessages={docs.map((doc, i) => ({
                id: `${i}`,
                role: 'system',
                content: doc.data ?? '',
            }))}
        />
    )
}

export function Chat({
    initialMessages,
    model,
}: {
    initialMessages: Message[]
    model: ModelDefinition
}) {
    const [systemPromptIndex, setSystemPromptIndex] = React.useState(
        initialMessages.length - 1
    )

    const { messages, sendMessage, isLoading, setMessages } =
        useStreamChat(initialMessages)
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const [input, setInput] = React.useState('')
    const [openRouterApiKey, setOpenRouterApiKey] =
        React.useState(myOpenRouterKey)
    const [app, setApp] = React.useState<App | null>(null)

    /**
     * Handles sending a message through open router, once
     * the first message is sent there should be a way to
     * stop the user from being able to switch models or
     * fuck things up, this is just to make it easier and
     * less frustrating for people to use.
     */
    const handleSend = () => {
        if (!input.trim()) return
        if (model == null) return
        sendMessage(input, model.model, openRouterApiKey)
        setInput('')
    }

    /**
     * When an application is selected by the user,
     * add the application module to the chat's messages
     * to extend the model's context, then populate the
     * input with a prompt that will guide the user on how
     * they can use this application.
     * @param app
     */
    const handleSelectApp = (app: App) => {
        setApp(app)
        setInput(app.template)
        setMessages([
            ...initialMessages,
            { role: 'system', content: app.prompt },
        ])
        setSystemPromptIndex(initialMessages.length)
    }

    React.useEffect(() => {
        setSystemPromptIndex(initialMessages.length - 1)
    }, [initialMessages])

    return (
        <div className="flex flex-col items-center justify-center mb-16">
            <ModelCard
                name={model.name}
                version={model.version}
                model={model.model}
                tags={model.tags}
                avatar={model.avatar}
                border={true}
                modules={[]}
                showBtn={false}
            />
            {messages.length - 1 <= systemPromptIndex && (
                <AppGrid
                    items={model.apps}
                    columns={2}
                    onSelect={handleSelectApp}
                />
            )}
            <div className="mx-auto">
                {messages.length > 0 && (
                    <CardContent className="flex-1 p-2">
                        <ScrollArea className="h-full pr-4">
                            <div className="flex flex-col space-y-4">
                                {messages.map(
                                    (msg, i) =>
                                        i > systemPromptIndex && (
                                            <ChatMessage key={i} msg={msg} />
                                        )
                                )}
                                {isLoading && (
                                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                )}
                                <div ref={scrollRef} />
                            </div>
                        </ScrollArea>
                    </CardContent>
                )}
            </div>
            <div className="flex items-end gap-2 p-2">
                <textarea
                    className={cn(
                        'ml-[75px] w-[800px] flex-1 rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                    )}
                    placeholder={'Type a message...'}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    // onKeyDown={handleKeyDown}
                    rows={6}
                />
                <Button onClick={handleSend} disabled={!input.trim()}>
                    Send
                </Button>
            </div>
            <div className="mt-2">
                <span className="mr-2">Open Router API Key:</span>
                <input
                    placeholder="Enter an OpenRouter API Key..."
                    className="border py-2 px-3 rounded-xl w-[400px] focus:ring-blue-500 focus:ring-2 text-sm"
                    value={openRouterApiKey}
                    onChange={(e) => setOpenRouterApiKey(e.target.value)}
                />
                <span className="ml-2">plz don't steal {`<3`}</span>
            </div>
        </div>
    )
}

function ChatMessage({ msg }: { msg: Message }) {
    // what affordances do we need for each message
    // [] copy button, copies the text to clipboard
    // [] edit message, edit and send a new message as branch
    return (
        <div className={cn('flex items-start space-x-2')}>
            <div
                className={cn(
                    'px-3 py-2 rounded-2xl max-w-[100%] text-sm',
                    msg.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-900'
                )}
            >
                {msg.role === 'user' && <>{msg.content}</>}
                {msg.role === 'system' ||
                    (msg.role === 'assistant' && (
                        <Markdown text={msg.content} />
                    ))}
            </div>
        </div>
    )
}

export interface GridItem {
    id: string
    label: string
    description: string
    examples: string[]
}

interface SelectableGridProps {
    items: GridItem[]
    columns?: number
    onSelect: (item: GridItem) => void
}

export function AppGrid({ items, columns = 2, onSelect }: SelectableGridProps) {
    return (
        <div
            className={cn(
                'grid gap-4',
                columns === 2 && 'grid-cols-2',
                columns === 3 && 'grid-cols-3',
                columns === 4 && 'grid-cols-4'
            )}
        >
            {items.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onSelect(item)}
                    className="rounded-xl border border-border bg-card p-6 shadow-md transition hover:shadow-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
                >
                    <span className="text-lg font-semibold">{item.label}</span>
                    <span className="text-sm">{item.description}</span>
                    {/* {item.examples.map((example) => (
                        <button className="text-sm">{example}</button>
                    ))} */}
                </button>
            ))}
        </div>
    )
}

export interface GridItem {
    id: string
    label: string
}

interface SelectableGridProps {
    items: GridItem[]
    columns?: number
    onSelect: (item: GridItem) => void
}

export function SelectableGrid({
    items,
    columns = 2,
    onSelect,
}: SelectableGridProps) {
    return (
        <div
            className={cn(
                'grid gap-4',
                columns === 2 && 'grid-cols-2',
                columns === 3 && 'grid-cols-3',
                columns === 4 && 'grid-cols-4'
            )}
        >
            {items.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onSelect(item)}
                    className="rounded-xl border border-border bg-card p-6 shadow-md transition hover:shadow-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
                >
                    <span className="text-lg font-semibold">{item.label}</span>
                </button>
            ))}
        </div>
    )
}
