
import { Card } from '@/components/ui/card'
import prisma from '@/lib/db'
import React from 'react'
import { data } from '../dummy'
import Image from 'next/image'

const page = () => {
  return (
    <section className='flex flex-col px-5 py-5 gap-5'>
      <Card className='h-64 w-full border-2 grid place-content-center'>
        <Image src='/next.svg' alt='company logo' width={80} height={80}/>
      </Card>
      <div className='flex flex-col gap-3'>
        <h2 className='text-[30px] font-semibold'>All jobs</h2>
        {
          data.map((_,index)=>(
            <div className='flex border-2 rounded-sm px-4 py-3 justify-between'>
        <div>
            <h3 className='text-xl font-semibold  '>{_.jobs}</h3>
            <h4 className='text-sm'>{_.skills}</h4>
          </div> 
          <div className='h-14 w-20 rounded-md border-2 grid place-content-center' >
            <Image src={_.images} alt='company logo' width={80} height={80}/>
          </div>
        </div>
          ))
        }
      </div>
    </section>
  )
}


export default page