"use client"

import { OrganizationSwitcher } from '@clerk/nextjs'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
        <Link href="/">Dashboard</Link>
        <OrganizationSwitcher />
    </div>
  )
}