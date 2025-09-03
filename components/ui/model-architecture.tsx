'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BorderBeam } from '@/components/ui/border-beam'
import { LineShadowText } from './line-shadow-text'
import { OrigamiPreview } from './origami-preview'
import { InteractiveHoverButton } from './interactive-hover-button'
import Link from 'next/link'

export type Model = {
    name: string
    version: string
    model: string
    modules: {
        name: string
        description: string
    }[]
}

export default function ModelCard({
    name,
    version,
    model,
    modules,
    showBtn,
}: Model & {
    showBtn: boolean
}) {
    return (
        <Card className="relative overflow-hidden m-4 w-[400px]">
            <CardHeader>
                <CardTitle>
                    <h1 className="text-balance text-8xl font-semibold leading-none tracking-tighter">
                        <LineShadowText
                            className="italic"
                            shadowColor={'black'}
                        >
                            {name}
                        </LineShadowText>
                        {' ' + version}
                    </h1>
                </CardTitle>
            </CardHeader>
            <CardContent className="mx-auto">
                <OrigamiPreview />
                {showBtn && (
                    <div className="mt-4">
                        <Link href="/chat">
                            <InteractiveHoverButton>
                                Select Model
                            </InteractiveHoverButton>
                        </Link>
                    </div>
                )}
            </CardContent>
            <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-red-500 to-transparent"
            />
            <BorderBeam
                duration={6}
                delay={3}
                size={400}
                borderWidth={2}
                className="from-transparent via-blue-500 to-transparent"
            />
        </Card>
    )
}

export function FeaturesSection() {
    return (
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4"></div>
                </div>
            </div>
        </section>
    )
}
