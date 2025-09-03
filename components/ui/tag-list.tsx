'use client'

import * as React from 'react'
import { Badge } from './badge'

interface TagListProps {
    tags: string[]
}

export function TagList({ tags }: TagListProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
                <Badge key={idx} variant="secondary">
                    {tag}
                </Badge>
            ))}
        </div>
    )
}
