import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoLocationOutline } from "react-icons/io5";
function Navbar() {
  return (
    <div className='flex items-center justify-between '>
     <div className='flex items-center '>
      <div>
      <IoLocationOutline size={35} />
      </div>
      <div>
        <h1 className='font-bold '>Home</h1>
        <p className='text-sm leading-3'>Kormangala</p>
      </div>
     </div>
     <div>
     <Avatar>
        <AvatarImage src="" />
        <AvatarFallback className='border-2 border-black'>LN</AvatarFallback>
      </Avatar>
     </div>
    </div>
  )
}

export default Navbar