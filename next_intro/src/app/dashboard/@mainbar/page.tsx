import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>
        <h1 className="text-3xl">Mainbar</h1>
        <Link href="/dashboard/movies">Movies</Link>
    </div>
  )
}
