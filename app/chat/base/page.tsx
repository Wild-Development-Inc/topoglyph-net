import { Header } from '@/components/Header'
import { httpPrompt, poesisPrompt } from '@/components/ui/app-prompts'
import { ChatContainer } from '@/components/ui/chat'

export default function ChatPage() {
    // fetch the model being used
    // - get the modules then show as system prompt

    // fetch the applications available
    // - get the content for those applications

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 border-t">
                <ChatContainer
                    model={{
                        name: 'Base',
                        avatar: <></>,
                        version: 'v1',
                        model: 'anthropic/claude-4',
                        tags: ['philosophy', 'consciousness', 'wisdom'],
                        moduleUrls: [],
                        apps: [
                            {
                                id: '1',
                                label: 'HtTP: Hyper Thought Transfer Protocol',
                                description: '',
                                prompt: httpPrompt,
                                template:
                                    'Help me write a letter to my mother, with creative/emotional language',
                            },
                            {
                                id: '2',
                                label: 'Poesis: Narrative Driven Life Design',
                                description: '',
                                prompt: poesisPrompt,
                                template:
                                    'Help me find more meaning in my life by imagining my life as a story: {enter the story here}',
                            },
                        ],
                    }}
                />
            </main>
        </div>
    )
}
