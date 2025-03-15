import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>
        <h1 className="text-3xl">Movies</h1>
        <Link href="/dashboard">Back</Link>
    </div>
  )
}
