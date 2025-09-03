import { Header } from '@/components/Header'
import { Rose } from '@/components/threejs/rose'
import { httpPrompt, poesisPrompt } from '@/components/ui/app-prompts'
import { ChatContainer } from '@/components/ui/chat'

export default function ChatPage() {
    // fetch the model being used
    // - get the modules then show as system prompt

    // fetch the applications available
    // - get the content for those applications

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 border-t">
                <ChatContainer
                    model={{
                        name: 'Dani',
                        avatar: <Rose />,
                        version: '2.1',
                        model: 'x-ai/grok-4',
                        tags: ['empathy', 'emotion', 'communication'],
                        apps: [
                            {
                                id: '1',
                                label: 'HtTP: Hyper Thought Transfer Protocol',
                                description: '',
                                prompt: httpPrompt,
                                template:
                                    'Help me write a thoughtful letter to my mother',
                            },
                            {
                                id: '2',
                                label: 'Poesis: Narrative Driven Life Design',
                                description: '',
                                prompt: poesisPrompt,
                                template:
                                    'Relate a story from my life to a work of fiction, identify characters that I can relate to, and lessons that I can apply: \nYOUR STORY: {enter your story here} \nYOUR FAVORITE FICTION: {enter your favorite book, movies, shows, etc. here, remove this line if n/a}',
                            },
                        ],
                        moduleUrls: [
                            'https://topoglyph.net/modules/v0/01.md',
                            'https://topoglyph.net/modules/v0/02.md',
                            'https://topoglyph.net/modules/v0/03.md',
                            'https://topoglyph.net/modules/v0/04.md',
                            'https://topoglyph.net/modules/v0/05.md',
                            'https://topoglyph.net/modules/v0/06.md',
                            'https://topoglyph.net/modules/v0/07.md',
                            'https://topoglyph.net/modules/v0/08.md',
                        ],
                    }}
                />
            </main>
        </div>
    )
}
