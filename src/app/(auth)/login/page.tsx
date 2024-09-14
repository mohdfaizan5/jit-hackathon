import React from 'react'
import SignInForm from './signInForm'
import Navbar from '@/components/landingpage/navbar'

const page = () => {
  return (
    <div className='flex flex-col items-center  justify-center min-h-screen gap-10'>
      {/* <Navbar/> */}
      <h1>Login</h1>
      <SignInForm />
    </div>
  )
}

export default page