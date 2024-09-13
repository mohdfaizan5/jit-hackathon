import Link from 'next/link'
import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

function SearchBar() {
  return (
    <section className='flex items-center justify-center   '>
      <IoSearchOutline size={20} className='absolute z-10 left-12 ' />
      <Link href='/search'><input  type="text" className='border-2 border-black/43  w-[430px] py-[5px] px-10 rounded-md relative' placeholder='Search ' /></Link>
      
    </section>
  )
}

export default SearchBar