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

type DemoApplication = {
    icon: React.ReactNode
    name: string
    desc: string
    content: string
}

const demoModels = [{}]

export default function ChatModelCarousel() {
    const [model, setModel] = React.useState<Model | null>(null)

    // onca a model is selected, then you can start a conversation with it
    // once a conversation is opened, then you can select an application to run
    // or you can begin typing a message to the model as is
    // additionally, you can press a button to scroll up and view the system prompt

    return (
        <div className="mx-auto">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <Carousel className="relative">
                        <CarouselContent>
                            {models.map((m, i) => (
                                <CarouselItem key={i}>
                                    <ModelCard key={i} {...m} showBtn={true} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    {/* <Chat /> */}
                    <ApplicationGallery />
                </div>
            </div>
        </div>
    )
}
