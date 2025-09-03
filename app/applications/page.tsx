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

const features = [
    {
        Icon: FileTextIcon,
        name: 'Save your files',
        description: 'We automatically save your files as you type.',
        href: '/',
        cta: 'Learn more',
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
        Icon: HeartIcon,
        name: 'Full text search',
        description: 'Search through all your files in one place.',
        href: '/',
        cta: 'Learn more',
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
        Icon: GlobeIcon,
        name: 'Multilingual',
        description: 'Supports 100+ languages and counting.',
        href: '/',
        cta: 'Learn more',
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
        Icon: CalendarIcon,
        name: 'Calendar',
        description: 'Use the calendar to filter your files by date.',
        href: '/',
        cta: 'Learn more',
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    },
    {
        Icon: BellIcon,
        name: 'Notifications',
        description:
            'Get notified when someone shares a file or mentions you in a comment.',
        href: '/',
        cta: 'Learn more',
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
    },
    {
        Icon: BellIcon,
        name: 'Notifications',
        description:
            'Get notified when someone shares a file or mentions you in a comment.',
        href: '/',
        cta: 'Learn more',
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: 'lg:col-start-1 lg:col-end-3 lg:row-start-4 lg:row-end-5',
    },
    {
        Icon: BellIcon,
        name: 'Notifications',
        description:
            'Get notified when someone shares a file or mentions you in a comment.',
        href: '/',
        cta: 'Learn more',
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: 'lg:col-start-3 lg:col-end-3 lg:row-start-4 lg:row-end-5',
    },
]

export default function ApplicationsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 mx-24">
                <div>
                    Lets make this display all of the applications for a
                    particular category
                </div>
                <BentoGrid className="lg:grid-rows-4">
                    {features.map((feature, i) => (
                        <BentoCard key={feature.name + i} {...feature} />
                    ))}
                </BentoGrid>
            </main>
        </div>
    )
}
