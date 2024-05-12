import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div>
                <h2 className="text-6xl mb-4">Inner-Bushido</h2>

                <blockquote className="mt-6 mb-4 border-l-2 pl-6 italic">
                    A Virtual Reality Simulator
                </blockquote>
                <div>
                    <Button variant="outline" size="lg">
                        get started
                    </Button>
                </div>
            </div>
        </div>
    )
}
