import { Moon, Shield, Clock, Heart, Superscript } from 'lucide-react'

export function ApplicationGallery() {
    return (
        <section id="features" className="w-full">
            <div className="container px-4 md:px-6">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                    <Heart className="h-5 w-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-medium">
                                        HtTP: Hyper Though Transfer Protocol
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Enable precise emotional communication
                                        beyond the limitations of language
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                    <Superscript className="h-5 w-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-medium">
                                        Playbook: Generate American Football
                                        Plays
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Guided breathing exercises and
                                        meditations to reduce anxiety and
                                        stress.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                    <Clock className="h-5 w-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-medium">
                                        Daily Mindfulness
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Short, effective meditations that fit
                                        into your busy schedule.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                    <Heart className="h-5 w-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-medium">
                                        Mood Tracking
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Track your emotional wellbeing and see
                                        your progress over time.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                    <Moon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-medium">
                                        Sleep Stories
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Fall asleep faster with calming stories
                                        narrated by soothing voices.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                    <Shield className="h-5 w-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-medium">
                                        Stress Relief
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Guided breathing exercises and
                                        meditations to reduce anxiety and
                                        stress.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                    <Clock className="h-5 w-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-medium">
                                        Daily Mindfulness
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Short, effective meditations that fit
                                        into your busy schedule.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                    <Heart className="h-5 w-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-medium">
                                        Mood Tracking
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Track your emotional wellbeing and see
                                        your progress over time.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
