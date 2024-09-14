"use server"

import prisma from "@/lib/db"

const getCompaniesByKey = async ({ query, take = 5, skip = 0 }: { query: string, take?: number, skip?: number }) => {
    const companies = await prisma.company.findMany({
        where: {
            name: {
                contains: query
            }
        },
        take,
        skip
    })
    return companies
    // TODO: Scope for improvement -> error handing(try catch), handle or cases
}


const getCompanyData = async () => {
    const company = await prisma.company.findMany({})
    return company
}

export { getCompaniesByKey, getCompanyData }