'use client'

import { Heart } from 'lucide-react'

export type Application = {
    icon: React.ReactNode
    name: string
    description: string
}

export default function ApplicationList({
    applications,
}: {
    applications: Application[]
}) {
    return (
        <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
                {applications.map((application, i) => (
                    <li key={i} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            {application.icon}
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-medium">
                                {application.name}
                            </h3>
                            <p className="text-muted-foreground">
                                {application.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
