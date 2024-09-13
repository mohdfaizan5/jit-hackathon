import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'


function CompanyCards() {



  const data = [
    {img: '/imgs/preview.svg', title: 'Software Engineer', location: 'Bangalore', salary: '75000'},
    {img: '/imgs/preview.svg', title: 'Data Analyst', location: 'Delhi', salary: '65000'},
    
  ] 
  return (
    <div>
      <h1 className='text-xl text-center font-bold '>What are you looking for</h1>
      <div className='flex flex-wrap gap-5 mt-5  justify-center'>
        {
         Array.from({ length: 6 }).map((_, index) => (
          
            <Card className='h-28 w-32 shadow-md flex flex-col items-center justify-center' >
              <Image src={data[0].img} alt='company logo' width={80} height={80}/>
            </Card>
          
         ))
        }
      </div>
    </div>
  )
}

export default CompanyCards