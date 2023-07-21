"use client"

import { OrganizationSwitcher, useUser } from '@clerk/nextjs'
import Link from 'next/link'

export default function HomePage() {
  const { user } = useUser()
  return (
    <div>
        <Link href="/">Dashboard for {user?.fullName}</Link>
        <OrganizationSwitcher />
    </div>
  )
}