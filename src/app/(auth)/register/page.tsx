import React from 'react'
import SignUpForm from './signupForm'

const page = () => {
  return (
    <div className='flex flex-col px-5 py-5 gap-5'>

      <h1 className='text-4xl font-bold text-center mb-5'>Registration</h1>
      <SignUpForm />
    </div>
  )
}

export default page