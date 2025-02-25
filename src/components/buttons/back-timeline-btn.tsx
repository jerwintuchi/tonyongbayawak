import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function BackToTimeline() {
    return (
        <Link href="/about">
            <Button variant="outline" className="text-blue-900 border-white hover:bg-white hover:text-blue-500">
                Back to Timeline
            </Button>
        </Link>
    )
}
