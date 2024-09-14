"use server"

import prisma from "@/lib/db"

const getCompaniesByKey = async ({ query }: { query: string }) => {
    const companies = await prisma.company.findMany({
        where: {
            name: {
                contains: query
            }
        }
    })
    return companies
    // TODO: Scope for improvement -> error handing(try catch), handle or cases
}

export { getCompaniesByKey }