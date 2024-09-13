import { CarouselDemo } from '@/components/Carousel'
import { Card } from '@/components/ui/card'
import prisma from '@/lib/db'
import React from 'react'

const page = () => {
  return (
    <section className='flex flex-col px-5 py-5 gap-5'>
      <Card className='h-64 w-full border-2' />
      <div className='flex flex-col gap-3'>
        <h2 className='text-[30px] font-semibold'>All jobs</h2>
        {
          Array.from({length:4}).map((_,index)=>(
            <div className='flex border-2 rounded-sm px-4 py-3 justify-between'>
        <div>
            <h3 className='text-[19px] font-bold'>Sr React Developer</h3>
            <h4 className='text-sm'>#html #reactjs #js #figma</h4>
          </div> 
          <div className='h-14 w-20 rounded-md border-2' ></div>
        </div>
          ))
        }
      </div>
    </section>
  )
}


export default page