"use server";

import prisma from "@/lib/db";

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

export type Job = {
  id: number;
  title: string;
  description: string | null;
  salary: number | null;
  company: {
    name: string;
    industry: string;
    companySize: string | null;
    location: string | null;
  };
};

export async function fetchJobs(searchParams: {
  [key: string]: string | string[] | undefined;
}): Promise<Job[]> {
  const { industry, company_size, speciality, city, technology, sort } =
    searchParams;

  try {
    const jobs = await prisma.job.findMany({
      where: {
        company: {
          industry:
            typeof industry === "string" ? { contains: industry } : undefined,
          companySize:
            typeof company_size === "string"
              ? { contains: company_size }
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
            typeof technology === "string"
              ? { contains: technology }
              : undefined,
        },
      },
      include: {
        company: true,
      },
    //   orderBy: sort === "rating" ? { company: { rating: "desc" } } : undefined,
    });

    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw new Error("Failed to fetch jobs");
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

export { getCompaniesByKey, getCompanyBySlug };
