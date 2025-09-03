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
import { InteractiveHoverButton } from './interactive-hover-button'
import ModelCard, { Model } from './model-card'
import { MessageList } from './message-list'
import { ApplicationGallery } from '../application-gallery'
import { Chat } from './chat'
import { models } from './models'
import { useRouter } from 'next/router'

export default function ModelCarousel() {
    const [model, setModel] = React.useState<Model | null>(null)

    // onca a model is selected, then you can start a conversation with it
    // once a conversation is opened, then you can select an application to run
    // or you can begin typing a message to the model as is
    // additionally, you can press a button to scroll up and view the system prompt

    return (
        <div className="mx-auto">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                    {models.map((m, i) => (
                        <ModelCard key={i} {...m} showBtn={true} />
                    ))}
                </div>
            </div>
        </div>
    )
}
