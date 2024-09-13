import React from 'react'
import { Card } from './ui/card'

function CompanyCards() {
  return (
    <div>
      <h1 className='text-xl text-center font-bold '>What are you looking for</h1>
      <div className='flex flex-wrap gap-5 mt-5  justify-center'>
        {
         Array.from({ length: 6 }).map((_, index) => (
          
            <Card className='h-28 w-32 shadow-md' ></Card>
          
         ))
        }
      </div>
    </div>
  )
}

export default CompanyCards