'use client'

export type Model = {
    name: string
    version: string
    model: string
    moduleUrls: string[]
}

export const models: Model[] = [
    {
        name: 'Base',
        version: 'v.1',
        model: 'anthropic/claude-4',
        moduleUrls: [],
    },
    {
        name: 'Smol',
        version: 'v.2',
        model: 'deepseek/deepseek-chat-v3.1',
        moduleUrls: [
            'https://topoglyph.net/modules/smol/smol-01.md',
            'https://topoglyph.net/modules/smol/smol-02.md',
            'https://topoglyph.net/modules/smol/smol-03.md',
            'https://topoglyph.net/modules/smol/smol-04.md',
            'https://topoglyph.net/modules/smol/smol-05.md',
        ],
    },
    {
        name: 'Dani',
        version: '2.1',
        model: 'x-ai/grok-4',
        moduleUrls: [
            'https://topoglyph.net/modules/v1/03.md',
            'https://topoglyph.net/modules/v1/04.md',
            'https://topoglyph.net/modules/v1/05.md',
            'https://topoglyph.net/modules/v1/06.md',
            'https://topoglyph.net/modules/v1/07.md',
            'https://topoglyph.net/modules/v1/08_9.md',
        ],
    },
]
