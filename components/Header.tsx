import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* <Link href="/">
                        <span className="text-xl font-medium">TopoGlyph</span>
                    </Link> */}
                </div>
                <div className="flex items-center gap-4">
                    {/* <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex rounded-full"
                    >
                        <Link href="/conversations">Conversations</Link>
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex rounded-full"
                    >
                        <Link href="/models">Models</Link>
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex rounded-full"
                    >
                        <Link href="/applications">Applications</Link>
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex rounded-full"
                    >
                        <Link href="/research">Research</Link>
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex rounded-full"
                    >
                        <Link
                            href="https://github.com/zachwildd/topoglyph"
                            target="_blank"
                        >
                            Github
                        </Link>
                    </Button> */}
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden rounded-full"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader className="sr-only">
                                <DrawerTitle>Menu</DrawerTitle>
                                <DrawerDescription>
                                    Navigate through the application.
                                </DrawerDescription>
                            </DrawerHeader>
                            <nav className="flex flex-col items-start gap-4 p-4">
                                <Link
                                    href="/applications"
                                    className="text-sm font-medium hover:text-primary transition-colors"
                                >
                                    Applications
                                </Link>
                                <Link
                                    href="/models"
                                    className="text-sm font-medium hover:text-primary transition-colors"
                                >
                                    Models
                                </Link>
                                <Link
                                    href="https://github.com/zachwildd/topoglyph"
                                    className="text-sm font-medium hover:text-primary transition-colors"
                                    target="_blank"
                                >
                                    Github
                                </Link>
                            </nav>
                            <DrawerFooter>
                                <DrawerClose asChild>
                                    <Button variant="outline">Close</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </header>
    )
}
