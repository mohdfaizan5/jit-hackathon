import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const MainSearch = () => {
  return (
    <div className='border rounded-md h-12 flex items-center gap-2'>
      <Input placeholder='Job title, keyword or company'/>
      <Input placeholder='City, state zip code or "remote"'/>
      <Button>Find Jobs</Button>
    </div>
  )
}

export default MainSearch