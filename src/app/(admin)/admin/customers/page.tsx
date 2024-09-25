import { Job, User } from "@prisma/client"
import { columns, TableUser } from "./columns"
import { DataTable } from "./data-table"
import prisma from "@/lib/db"

async function getData(): Promise<TableUser[]> {
  // Fetch data from your API here.
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      isPremium: true,
    },
  })
  console.log("users", users)
  return users
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
