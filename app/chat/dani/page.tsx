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
                        avatar: <></>,
                        version: '2.1',
                        model: 'x-ai/grok-4',
                        tags: ['empathy', 'emotion', 'communication'],
                        apps: [
                            {
                                id: '1',
                                label: 'HtTP: Hyper Thought Transfer Protocol',
                                description: '',
                                prompt: httpPrompt,
                                template: `Apply the HtTP "Emotional Intelligence Augmentation" module to analyze the following piece of text: "Friendship marks a life even more deeply than love. Love risks degenerating into obsession, friendship is never anything but sharing."`,
                            },
                            {
                                id: '2',
                                label: 'Poesis: Narrative Driven Life Design',
                                description: '',
                                prompt: poesisPrompt,
                                template: `Let's apply poesis to imagine a personal narrative for humans which transcends 'the tri-axis between narcissus (wastes away, in love with own reflection), sisyphus (condemned to eternal toil), and icarus (flew too close to the sun), then let's extend this to empathize with mothers in modern america`,
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
