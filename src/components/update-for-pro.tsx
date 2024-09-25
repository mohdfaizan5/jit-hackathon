import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'

const UpdateForPro = () => {
  return (

    <Card className='p-4 max-w-96'>
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle>Upgrade to Pro</CardTitle>
        <CardDescription>
          Unlock all features and get unlimited access to our support
          team.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
        <Link href={"/subscribe"}>
          <Button size="sm" className="w-full">
            Upgrade
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default UpdateForPro