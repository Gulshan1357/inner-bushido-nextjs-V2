import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between items-center px-4 py-2">
                <div className="w-full"></div>
                <div className="flex items-center"></div>
                <UserButton />
            </nav>
        </>
    )
}

export default Navbar
