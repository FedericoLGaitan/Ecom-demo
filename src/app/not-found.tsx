import Link from 'next/link'
import React from 'react'

function notFound() {
  return (
    <div>404 not fount | go back <Link href="/">Home</Link></div>
  )
}

export default notFound