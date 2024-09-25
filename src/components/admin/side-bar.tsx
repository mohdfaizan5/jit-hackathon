"use client"
import React, { ReactNode } from 'react'
import Link from "next/link"
import {
  Home,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react"
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const SideBarAdmin = () => {
  const path = usePathname()
  console.log(path)
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Quanlearn</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/admin"
              className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", {
                "bg-muted text-primary": path === "/admin"
              })}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/admin/companies"
              className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", {
                "bg-muted text-primary": path === "/admin/companies"
              })}
            >
              <ShoppingCart className="h-4 w-4" />
              Companies
              {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge> */}
            </Link>
            <Link
              href="/admin/jobs"
              className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", {
                "bg-muted text-primary": path === "/admin/jobs"
              })}
            >
              <Package className="h-4 w-4" />
              Jobs
            </Link>
            <Link
              href="/admin/customers"
              className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", {
                "bg-muted text-primary": path === "/admin/customers"
              })}
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
            {/* <Link
                href="#"
                className="line-through flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics <Badge className="ml-auto flex h-6  shrink-0 items-center justify-center rounded-full">
                  Beta
                </Badge>
              </Link> */}
          </nav>
        </div>

      </div>
    </div>
  )
}

export default SideBarAdmin