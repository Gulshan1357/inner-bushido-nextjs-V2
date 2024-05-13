import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs/server'

import Link from 'next/link'

export default async function Home() {
    const { userId } = await auth()
    let href = userId ? '/analytics' : '/new-user'

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div>
                <h2 className="text-6xl mb-4">Inner-Bushido</h2>

                <blockquote className="mt-6 mb-4 border-l-2 pl-6 italic">
                    A Virtual Reality Simulator
                </blockquote>
                <div>
                    <Link href="/analytics">
                        <Button variant="outline" size="lg">
                            get started
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
