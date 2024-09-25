import prisma from "@/lib/db"
import {  columns } from "./columns"
import { DataTable } from "./data-table"
import { Company } from "@prisma/client"

async function getData(): Promise<Company[]> {
  // Fetch data from your API here.
  const response = await prisma.company.findMany()
  return response
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
