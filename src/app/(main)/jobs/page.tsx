import { Suspense } from 'react'
// import { fetchJobs, Job } from '../actions/jobActions'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import Link from 'next/link'
import { fetchJobs, Job } from '@/actions/job.action'

function JobList({ jobs }: { jobs: Job[] }) {
  if (jobs.length === 0) {
    return <p className="text-center mt-8">No jobs found matching your criteria.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-2">{job.company.name}</p>
            <p className="text-sm mb-2">{job.description}</p>
            <p className="text-sm mb-2">Industry: {job.company.industry}</p>
            {job.company.companySize && (
              <p className="text-sm mb-2">Company Size: {job.company.companySize}</p>
            )}
            {job.company.location && (
              <p className="text-sm mb-2">Location: {job.company.location}</p>
            )}
            {job.salary && (
              <p className="text-sm font-semibold">Salary: ${job.salary.toLocaleString()}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function JobListFallback() {
  return (
    <div className="flex justify-center items-center h-64">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  )
}

export default async function SearchResults({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const jobs = await fetchJobs(searchParams)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Search Results</h1>
      <Suspense fallback={<JobListFallback />}>
        <JobList jobs={jobs} />
      </Suspense>
      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/">Modify Filters</Link>
        </Button>
      </div>
    </div>
  )
}