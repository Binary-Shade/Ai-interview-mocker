"use server"
import React from 'react'
import { isAuthenticated } from '@/lib/action/auth.action'
import {redirect} from 'next/navigation'

const AuthLayout = async ({children}: {children: React.ReactNode}) => {
  const user = await isAuthenticated()
  if(!user){
    redirect('/sign-in')
  } 
  return (
    <div className='auth-layout flex items-center justify-center h-screen'>
      {children}
    </div>
  )
}

export default AuthLayout
