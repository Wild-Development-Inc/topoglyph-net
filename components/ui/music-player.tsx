"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import { Moon, Shield, Clock, Heart, MoveRightIcon } from "lucide-react";
import { LineShadowText } from "./line-shadow-text";

interface MusicPlayerProps {
  titleShadow: string
  titleNoShadow: string
  openRouterModel: string
}

export default function MusicPlayer({ titleNoShadow, titleShadow, openRouterModel }: MusicPlayerProps) {
  return (
    <Card className="relative overflow-hidden m-4">
      <CardHeader>
        <CardTitle>
          <h1 className="text-balance text-6xl font-semibold leading-none tracking-tighter">
            <LineShadowText className="italic" shadowColor={'black'}>
              {titleShadow} 
            </LineShadowText>
            {titleNoShadow} 
          </h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-6">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Moon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">Sleep Stories</h3>
                  <p className="text-muted-foreground">
                    Fall asleep faster with calming stories narrated by soothing
                    voices.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">Stress Relief</h3>
                  <p className="text-muted-foreground">
                    Guided breathing exercises and meditations to reduce anxiety
                    and stress.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">Daily Mindfulness</h3>
                  <p className="text-muted-foreground">
                    Short, effective meditations that fit into your busy
                    schedule.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">Mood Tracking</h3>
                  <p className="text-muted-foreground">
                    Track your emotional wellbeing and see your progress over
                    time.
                  </p>
                </div>
              </li>
            </ul>
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
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            
          </div>
        </div>
      </div>
    </section>
  )
}