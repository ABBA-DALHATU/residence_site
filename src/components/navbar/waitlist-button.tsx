import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const WaitlistButton = () => {
  return (
    <div>
      <Button asChild>
        <Link href="/waitlist">
            Join Waitlist

        </Link>
      </Button>
    </div>
  )
}

export default WaitlistButton
