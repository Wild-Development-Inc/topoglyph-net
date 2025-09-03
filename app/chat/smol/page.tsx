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
                        name: 'Smol',
                        avatar: <></>,
                        version: 'v2',
                        model: 'deepseek/deepseek-chat-v3.1',
                        tags: ['science', 'technology', 'intelligence'],
                        apps: [
                            {
                                id: '1',
                                label: 'Scientific Discovery Module',
                                description: '',
                                prompt: '',
                                template: '',
                            },
                            {
                                id: '2',
                                label: 'Artistic Creation Module',
                                description: '',
                                prompt: '',
                                template: '',
                            },
                            {
                                id: '3',
                                label: 'Architectural Design Module',
                                description: '',
                                prompt: '',
                                template: '',
                            },
                        ],
                        moduleUrls: [
                            'https://topoglyph.net/modules/smol/smol-01.md',
                            'https://topoglyph.net/modules/smol/smol-02.md',
                            'https://topoglyph.net/modules/smol/smol-03.md',
                            'https://topoglyph.net/modules/smol/smol-04.md',
                            'https://topoglyph.net/modules/smol/smol-05.md',
                        ],
                    }}
                />
            </main>
        </div>
    )
}
