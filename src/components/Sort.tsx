import React from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
function Sort() {
  return (
    <div className='mb-[10px] text-center'>
       <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='' variant="outline">Sort By</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[400px] h-80 ml-16">
        
      <DropdownMenuLabel>Filters</DropdownMenuLabel>
      <DropdownMenuSeparator/>
        
      <div className='flex items-center'>
      <div className='mt-5 flex flex-col w-28 border-r pr-5'>
        <DropdownMenuItem>Industry</DropdownMenuItem>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>Industry</DropdownMenuItem>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>Industry</DropdownMenuItem>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>Industry</DropdownMenuItem>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>Industry</DropdownMenuItem>
        <DropdownMenuSeparator/>
      </div> 
      <div className='-mt-3 flex flex-col items-center ml-5  '>
        <div className='flex'>
        <input type="checkbox" name="" id="" /> <DropdownMenuItem>Location</DropdownMenuItem></div>
        <div className='flex'>
        <input type="checkbox" name="" id="" /> <DropdownMenuItem>Location</DropdownMenuItem></div>
        <div className='flex'>
        <input type="checkbox" name="" id="" /> <DropdownMenuItem>Location</DropdownMenuItem></div>
        <div className='flex'>
        <input type="checkbox" name="" id="" /> <DropdownMenuItem>Location</DropdownMenuItem></div>
        <div className='flex'>
        <input type="checkbox" name="" id="" /> <DropdownMenuItem>Location</DropdownMenuItem></div>
       
        
      </div>
      </div>
        
        
          
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default Sort