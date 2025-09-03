'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BorderBeam } from '@/components/ui/border-beam'
import { LineShadowText } from './line-shadow-text'
import { OrigamiPreview } from './origami-preview'
import { InteractiveHoverButton } from './interactive-hover-button'
import Link from 'next/link'

export type Application = {
    icon: React.ReactNode
    name: string
    description: string
}

export default function ApplicationCard({
    icon,
    name,
    description,
}: Application) {
    return (
        <Card className="relative overflow-hidden m-4 w-[400px]">
            <CardHeader>
                <CardTitle>
                    <h1 className="text-balance text-2xl font-semibold leading-none tracking-tighter">
                        {name}
                    </h1>
                </CardTitle>
            </CardHeader>
            <CardContent className="mx-auto">{description}</CardContent>
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
