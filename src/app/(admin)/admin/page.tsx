import { checkIsAdmin } from '@/lib/server-utils'
import { redirect } from 'next/navigation'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react'
import prisma from '@/lib/db'

const page = async () => {

  const isAdmin = await checkIsAdmin()
  if (!isAdmin) {
    redirect("/denied")
  }

  const companiesCount = await prisma.company.count()
  const usersCount = await prisma.user.count()

  return (
    <div>
      <Card className="sm:col-span-2">
        <CardHeader className="pb-3">
          <CardTitle>Dashboard</CardTitle>
          <CardDescription className="text-balance max-w-lg leading-relaxed">
            Introducing Our Dynamic Dashboard for Seamless Management and
            Insightful Analysis.
          </CardDescription>
        </CardHeader>
        {/* <CardFooter>
          <Button>Create New Order</Button>
        </CardFooter> */}
      </Card>
      <div className="grid gap-4 md:grid-cols-2 mt-4 md:gap-8 lg:grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold line-through">$45,231.89</div>
            <p className="text-xs text-muted-foreground line-through">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold line-through">+12,234</div>
            <p className="text-xs text-muted-foreground line-through">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Customers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{usersCount}</div>
            <p className="text-xs text-muted-foreground line-through">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Companies</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{companiesCount}</div>
            <p className="text-xs  text-muted-foreground line-through">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default page


