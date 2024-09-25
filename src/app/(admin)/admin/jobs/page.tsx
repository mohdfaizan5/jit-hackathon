import { Job } from "@prisma/client"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import prisma from "@/lib/db"

async function getData(): Promise<Job[]> {
  // Fetch data from your API here.
  const jobs = await prisma.job.findMany({
    include: {
      company: true,
    },

  })
  console.log("jobs", jobs)
  return jobs
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
