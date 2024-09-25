import React from 'react'
import SignInForm from './signInForm'
import Navbar from '@/components/landingpage/navbar'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'

const page = async () => {
  const session = await auth()
  if (session?.user) redirect('/app')

  return (
    <div className='flex flex-col items-center  justify-center min-h-[80vh] gap-10'>
      {/* <Navbar/> */}
      <h1>Login</h1>
      <section className="flex md:flex-row-reverse flex-col items-start gap-10">
        <Image
          src={"/imgs/home-from-work.svg"}
          alt="company logo"
          width={350}
          height={350}
          className='-skew-x-6'
        />
        <SignInForm />
      </section>

    </div>
  )
}

export default page