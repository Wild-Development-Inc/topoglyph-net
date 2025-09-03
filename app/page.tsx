import { Header } from '@/components/Header'
import { module1 } from '@/components/topoglyph/modules'
import { Markdown } from '@/components/ui/markdown'

export default function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <div className="relative flex flex-col items-center border-t bg-background">
                    <div className="flex flex-col m-8"></div>
                </div>
            </main>
        </div>
    )
}
