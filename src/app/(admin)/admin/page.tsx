import { auth } from '@/lib/auth'
import { checkIsAdmin } from '@/lib/server-utils'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const isAdmin = await checkIsAdmin()
  if (!isAdmin) {
    redirect("/denied")
  }
  return (
    <div>
      
    </div>
  )
}

export default page