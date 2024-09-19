"use server";

import prisma from "@/lib/db";
import { Company } from "@prisma/client";

const getCompaniesByKey = async ({
  query,
  take = 5,
  skip = 0,
}: {
  query: string;
  take?: number;
  skip?: number;
}) => {
  const companies = await prisma.company.findMany({
    where: {
      name: {
        contains: query,
      },
    },
    take,
    skip,
  });
  return companies;
  // TODO: Scope for improvement -> error handing(try catch), handle or cases
};

async function fetchCompanies(searchParams: {
  [key: string]: string | string[] | undefined;
}): Promise<Company[]> {
  const { industry, company_size, speciality, city, technology, q } =
    searchParams;

  try {
    const companies = await prisma.company.findMany({
      where: {
        name: typeof q === "string" ? { contains: q } : undefined,
        industry:
          typeof industry === "string" ? { contains: industry } : undefined,
        companySize:
          typeof company_size === "number"
            ? { gte: company_size as number }
            : undefined,
        specialties:
          typeof speciality === "string"
            ? {
                contains: speciality,
                // , mode: "insensitive"
              }
            : undefined,
        location: typeof city === "string" ? { contains: city } : undefined,
        technologies:
          typeof technology === "string" ? { contains: technology } : undefined,
      },
    });

    return companies;
  } catch (error) {
    console.error("Error fetching companies:", error);
    throw new Error("Failed to fetch companies");
  }
}

// async function filterJobs(
//   industry?: string,
//   companySize?: string,
//   speciality?: string,
//   city?: string,
//   technology?: string
// ) {
//   const jobs = await prisma.job.findMany({
//     where: {
//       company: {
//         industry: industry
//           ? { contains: industry, mode: "insensitive" }
//           : undefined,
//         companySize: companySize
//           ? { contains: companySize, mode: "insensitive" }
//           : undefined,
//         specialties: speciality
//           ? { contains: speciality, mode: "insensitive" }
//           : undefined,
//         location: city ? { contains: city, mode: "insensitive" } : undefined,
//         technologies: technology
//           ? { contains: technology, mode: "insensitive" }
//           : undefined,
//       },
//     },
//     include: {
//       company: true,
//     },
//   });

//   return jobs;
// }

const getCompanyBySlug = async ({ slug }: { slug: string }) => {
  await prisma.company.findMany({
    where: {
      slug,
    },
  });
};

export { getCompaniesByKey, getCompanyBySlug, fetchCompanies };
