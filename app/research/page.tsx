import { Header } from '@/components/Header'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import { Chat } from '@/components/ui/chat'
import {
    FileTextIcon,
    GlobeIcon,
    CalendarIcon,
    BellIcon,
    HeartIcon,
} from 'lucide-react'
import { models } from '@/components/ui/models'
import { Markdown } from '@/components/ui/markdown'

/**
 *
 */
export default function ResearchPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 mx-24">
                <div>
                    Lets make this display all of the applications for a
                    particular category
                </div>
            </main>
        </div>
    )
}
