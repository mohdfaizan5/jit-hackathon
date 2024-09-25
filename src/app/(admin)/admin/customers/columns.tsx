"use client"

import { Job, User } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TableUser = Omit<User, "password" | "isAdmin">



export const columns: ColumnDef<TableUser>[] = [
  {
    accessorKey: "email",
    header: "Title",
  },
  {
    accessorKey: "isPremium",
    header: "Premium User",
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-right">Signup Date</div>,
    cell: ({ row }) => {
      console.log("row", row)
      const date = new Date(row.getValue("createdAt")).toLocaleDateString()
      return <div className="text-right font-medium">{date}</div>
    },
  },
]
