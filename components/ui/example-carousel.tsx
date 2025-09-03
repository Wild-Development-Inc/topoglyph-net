"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MusicPlayer from "./music-player"
import { InteractiveHoverButton } from "./interactive-hover-button"

export default function ExampleCarousel() {
  const [model, setModel] = React.useState(null)
  return (
    <div className="w-full max-w-xl mx-auto">
      <Carousel className="relative">
        <div className="flex flex-col items-cetner justify-center">
            <CarouselContent>
            {Array.from({ length: 5 }).map((_, i) => (
                <CarouselItem key={i}>
                    <MusicPlayer titleShadow='Dani' titleNoShadow=" 2.1" openRouterModel="xai-org/grok-4"/>
                </CarouselItem>
            ))}
            </CarouselContent>
        </div>
        <div className="flex items-center justify-center">
            <CarouselPrevious />
            <InteractiveHoverButton>Select Model</InteractiveHoverButton>
            <CarouselNext />
        </div>
      </Carousel>
    </div>
  )
}
