"use server"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { isAuthenticated } from '@/lib/action/auth.action'
import { redirect } from 'next/navigation'

const RootLayout = async({children}: {children: React.ReactNode}) => {
  const user = await isAuthenticated()
  
  if(!user){
    redirect('/sign-in')
  } 
  return (
    <div className='root-layout text-white'>
        <nav className='m-4'>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-white text-lg font-semibold">PrepMate</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout
