"use client"
import { GrSort } from "react-icons/gr"
import Navbar from '@/components/Navbar'
import SearchBar from '@/components/SearchBar'
import   Caraousal  from '@/components/Carousel'
import React from 'react'
import CompanyCards from '@/components/CompanyCards'
import Sort from "@/components/Sort"

const page = () => {
  return (
    <div  className='flex flex-col px-5 py-3 gap-5'>
      <Navbar/>
      <SearchBar/>
      <Caraousal/>
      <CompanyCards/>
      <Sort/>
      {/* <section className="border w-24 flex justify-center py-2 ">
        <button onClick={()=>alert('Sorting tabs')} className="flex items-center gap-2">
        <GrSort  />
          <p className="text-sm">Sort by</p>
        </button>
      </section> */}
    </div>
  )
}

export default page