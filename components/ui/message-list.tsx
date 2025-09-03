'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import React, {
    ComponentPropsWithoutRef,
    useEffect,
    useMemo,
    useState,
} from 'react'

export interface AnimatedListProps extends ComponentPropsWithoutRef<'div'> {
    children: React.ReactNode
    delay?: number
}

export const MessageList = React.memo(
    ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
        const [index, setIndex] = useState(0)
        const childrenArray = useMemo(
            () => React.Children.toArray(children),
            [children]
        )

        return (
            <div
                className={cn(`flex flex-col items-center gap-4`, className)}
                {...props}
            >
                {children}
            </div>
        )
    }
)

MessageList.displayName = 'MessageList'
