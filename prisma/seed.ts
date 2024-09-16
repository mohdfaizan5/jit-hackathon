import { Company, PrismaClient } from "@prisma/client";
import { create } from "domain";

const prisma = new PrismaClient();

const companies: Company[] = [
  {
    id: 1,
    name: "Google",
    // jobs: "Software Engineer",
    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    location: "Mountain View, CA",
    industry: "Technology",
    slug: "google",
    overview:
      "Google is a multinational corporation that is specialized in internet-related services and products.",
    createdAt: new Date(),
    companySize: "1000",
    specialties:
      "Search Engine, Cloud Computing, Advertising, Software, Hardware",
    technologies: "Python, Java, C++, Go, JavaScript",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_100_100/company-logo_100_100/0/1630652622688/microsoft_logo?e=1734566400&v=beta&t=Yt2U2q_chLFHSfGyIwELQzAB1xy4HzeBOcq8C6adQcA",
    location: "Redmond, WA",
    industry: "Technology",
    slug: "microsoft",
    overview:
      "Microsoft develops, manufactures, licenses, supports, and sells computer software, consumer electronics, and personal computers.",
    createdAt: new Date(),
    companySize: "500",
    specialties: "Software Development, Cloud Computing, Productivity Tools",
    technologies: "C#, .NET, Azure",
  },
  {
    id: 3,
    name: "Apple",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_200_200/company-logo_200_200/0/1630637844948/apple_logo?e=1734566400&v=beta&t=8GGqcJQuY8U5XsAOv5t5z2lmX08SyakiTRPkKZoW5kk",
    location: "Cupertino, CA",
    industry: "Technology",
    slug: "apple",
    overview:
      "Apple Inc. is an American multinational technology company that designs, manufactures, and sells consumer electronics and software.",
    createdAt: new Date(),
    companySize: "200",
    specialties: "Hardware, Software, Design",
    technologies: "Swift, Objective-C, iOS",
  },
  {
    id: 4,
    name: "Amazon",
    //jo: "Data Scientist",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHTvZwCx4p2Qg/company-logo_100_100/company-logo_100_100/0/1630640869849/amazon_logo?e=1734566400&v=beta&t=zZjNtkDgo9D3Et4XxGPKzRSmX-hhrln_FAGWSona2vc",
    location: "Seattle, WA",
    industry: "E-commerce",
    slug: "amazon",
    overview:
      "Amazon is an American multinational conglomerate which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    createdAt: new Date(),
    companySize: "300",
    specialties: "E-commerce, Cloud Computing, Artificial Intelligence",
    technologies: "Python, Java, AWS",
  },
  {
    id: 5,
    name: "Facebook",
    //jo: "Product Manager",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFdNatYGiBelg/company-logo_200_200/company-logo_200_200/0/1636138754252/facebook_logo?e=1734566400&v=beta&t=W1teUPjyO4p1QL26TBaVzqK6RnvarWVYRSUfeMEtyFU",
    location: "Menlo Park, CA",
    industry: "Social Media",
    slug: "facebook",
    overview:
      "Facebook is a social media and social networking service company that helps people connect and share with others.",
    createdAt: new Date(),
    companySize: "1500",
    specialties: "Social Media, Advertising, Virtual Reality",
    technologies: "React, GraphQL, PHP",
  },
  {
    id: 6,
    name: "Netflix",
    //jo: "Content Strategist",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEVb0ZISWk8vQ/company-logo_200_200/company-logo_200_200/0/1631355051964?e=1734566400&v=beta&t=2Ug16g1Pt9OSemq_ixfE3o899GosZZyv71jQYpxmpCM",
    location: "Los Gatos, CA",
    industry: "Entertainment",
    slug: "netflix",
    overview:
      "Netflix is an American subscription streaming service and production company that provides a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
    createdAt: new Date(),
    companySize: "400",
    specialties: "Streaming, Entertainment, Content",
    technologies: "JavaScript, Node.js, React",
  },
  {
    id: 7,
    name: "IBM",
    //jo: "Hardware Engineer",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_200_200/company-logo_200_200/0/1688684715866/ibm_logo?e=1734566400&v=beta&t=bpKRXcHvkH5hKRZmDU3NFzJEECkLlE5sPsAqrrP-SB0",
    location: "Armonk, NY",
    industry: "Technology",
    slug: "ibm",
    overview:
      "IBM is an American multinational technology and consulting company, offering a range of services from cloud computing to AI.",
    createdAt: new Date(),
    companySize: "600",
    specialties: "Cloud Computing, AI, Consulting",
    technologies: "Java, Python, IBM Cloud",
  },
  {
    id: 8,
    name: "Intel",
    //jo: "Chip Designer",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_200_200/company-logo_200_200/0/1688684715866/ibm_logo?e=1734566400&v=beta&t=bpKRXcHvkH5hKRZmDU3NFzJEECkLlE5sPsAqrrP-SB0",
    location: "Santa Clara, CA",
    industry: "Semiconductors",
    slug: "intel",
    overview:
      "Intel is an American multinational corporation and technology company, known for developing semiconductor chips and related technologies.",
    createdAt: new Date(),
    companySize: "800",
    specialties: "Semiconductors, Processors, Hardware",
    technologies: "C++, Verilog, VHDL",
  },
  {
    id: 9,
    name: "Adobe",
    //jo: "UX Designer",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFrtK-ioO1rsQ/company-logo_200_200/company-logo_200_200/0/1630645864762/adobe_logo?e=1734566400&v=beta&t=UG-sfEO1VazZHQiGrcLmnTEG0U2jJktEp6g9GT1cGKM",
    location: "San Jose, CA",
    industry: "Software",
    slug: "adobe",
    overview:
      "Adobe Systems Incorporated is an American multinational computer software company, known for its creative and multimedia software products.",
    createdAt: new Date(),
    companySize: "100",
    specialties: "Design, Marketing, Software",
    technologies: "JavaScript, C++, Adobe Creative Cloud",
  },
  {
    id: 10,
    name: "Salesforce",
    //jo: "CRM Developer",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHZ9xYomLW7zg/company-logo_200_200/company-logo_200_200/0/1630658255326/salesforce_logo?e=1734566400&v=beta&t=rmpg-0N2dBG5NYQLwtc-SMvwg4dYWt73enWhell_Tck",
    location: "San Francisco, CA",
    industry: "Cloud Computing",
    slug: "salesforce",
    overview:
      "Salesforce is a cloud-based software company specializing in customer relationship management (CRM).",
    createdAt: new Date(),
    companySize: "200",
    specialties: "CRM, Cloud Computing, Sales",
    technologies: "Apex, Salesforce CRM",
  },
  {
    id: 11,
    name: "Twitter",
    //jo: "Social Media Analyst",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEJZABhJ-eE0g/company-logo_200_200/company-logo_200_200/0/1690242317195/twitter_logo?e=1734566400&v=beta&t=46CvQwAoyZpmZrCylF0b3fSUW1jYEmsmSErFQLwKz80",
    location: "San Francisco, CA",
    industry: "Social Media",
    slug: "twitter",
    overview:
      "Twitter is a social media platform that allows users to send and read short 280-character messages called tweets.",
    createdAt: new Date(),
    companySize: "300",
    specialties: "Social Media, Advertising, News",
    technologies: "JavaScript, Ruby, Scala",
  },
  {
    id: 12,
    name: "Spotify",
    //jo: "Music Data Analyst",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFkDzx_7dqq3A/company-logo_100_100/company-logo_100_100/0/1631377935713?e=1734566400&v=beta&t=WlWAtTysDT9NYr_KI2IHoyhiykqg8FveHcJvm9GjnKU",
    location: "Stockholm, Sweden",
    industry: "Streaming",
    slug: "spotify",
    overview:
      "Spotify is a digital music service that gives you access to millions of songs and podcasts.",
    createdAt: new Date(),
    companySize: "400",
    specialties: "Music, Streaming, Podcasts",
    technologies: "JavaScript, Python, Java",
  },
  {
    id: 13,
    name: "Uber",
    //jo: "Transportation Planner",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFiYnR1Mbtxdg/company-logo_200_200/company-logo_200_200/0/1630552741617/uber_com_logo?e=1734566400&v=beta&t=ZNLS1HnRDBxGfUWZ1ULuBWbspm2qcBNOTx1tkqzTRaQ",
    location: "San Francisco, CA",
    industry: "Transportation",
    slug: "uber",
    overview:
      "Uber Technologies Inc. is an American technology company known for its ride-hailing services.",
    createdAt: new Date(),
    companySize: "500",
    specialties: "Ride Sharing, Transportation, Logistics",
    technologies: "JavaScript, Python, Node.js",
  },
  {
    id: 14,
    name: "Snapchat",
    //jo: "AR Developer",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGS67pnekd_qQ/company-logo_200_200/company-logo_200_200/0/1706902360485/snap_inc_co_logo?e=1734566400&v=beta&t=l036nDdMdresMeXREBWXd_DlUxiYBg-WhPg5h8Orc38g",
    location: "Santa Monica, CA",
    industry: "Social Media",
    slug: "snapchat",
    overview:
      "Snapchat is a multimedia messaging app known for its ephemeral and interactive content.",
    createdAt: new Date(),
    companySize: "200",
    specialties: "Social Media, Augmented Reality, Messaging",
    technologies: "JavaScript, React, ARKit",
  },
  {
    id: 15,
    name: "LinkedIn",
    //jo: "Business Development Manager",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHaVYd13rRz3A/company-logo_100_100/company-logo_100_100/0/1638831590218/linkedin_logo?e=1734566400&v=beta&t=lZYegnOmN8V6Pvnjx9PUQv13n4fsjHVrrDf8swPUSAM",
    location: "Sunnyvale, CA",
    industry: "Professional Networking",
    slug: "linkedin",
    overview:
      "LinkedIn is a business and employment-oriented online service that operates via websites and mobile apps.",
    createdAt: new Date(),
    companySize: "300",
    specialties: "Professional Networking, Recruiting, Learning",
    technologies: "JavaScript, Java, React",
  },
  {
    id: 16,
    name: "Yahoo",
    //jo: "Web Developer",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQE8SlwfLWJuDg/company-logo_200_200/company-logo_200_200/0/1663278242829/yahoo_logo?e=1734566400&v=beta&t=EQeGOPk73gnAdgOfAGlevSog0TKG9xzPkWGbjHnRGO8",
    location: "Sunnyvale, CA",
    industry: "Internet",
    slug: "yahoo",
    overview:
      "Yahoo is an American web services provider known for its web portal, search engine, and email services.",
    createdAt: new Date(),
    companySize: "200",
    specialties: "Search Engine, Email, News",
    technologies: "JavaScript, PHP, Hadoop",
  },
  {
    id: 17,
    name: "PayPal",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGlX0cKdGRk-w/company-logo_200_200/company-logo_200_200/0/1725506319701?e=1734566400&v=beta&t=ADhq37tgnkyx4wnvPqNcOx7jKSQE4q0N2zp8P7BUJYc",
    location: "San Jose, CA",
    industry: "Fintech",
    slug: "paypal",
    overview:
      "PayPal is an American multinational financial technology company that operates an online payments system.",
    createdAt: new Date(),
    companySize: "400",
    specialties: "Payments, Fintech, E-commerce",
    technologies: "JavaScript, Node.js, React",
  },
  {
    id: 18,
    createdAt: new Date(),
    name: "Tesla",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHUcu98SZ2TVw/company-logo_200_200/company-logo_200_200/0/1630576446368/tesla_motors_logo?e=1734566400&v=beta&t=ymuSI6WnZSZHJIBfunVWZXZiz6MLwsf74GxaJ67nzYM",
    location: "Palo Alto, CA",
    industry: "Automotive",
    slug: "tesla",
    overview:
      "Tesla Inc. is an American electric vehicle and clean energy company.",
    companySize: "500",
    specialties: "Electric Vehicles, Clean Energy, Solar",
    technologies: "C++, Python, JavaScript",
  },
  {
    id: 19,
    name: "Zoom",
    createdAt: new Date(),
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHdFe3fnAvRmg/company-logo_200_200/company-logo_200_200/0/1711361750580/zoom_video_communications_logo?e=1734566400&v=beta&t=C31eNCYnzV6tOMlmswACpdXARXZ6UoU9hBIxP36JsDM",
    location: "San Jose, CA",
    industry: "Telecommunications",
    slug: "zoom",
    overview:
      "Zoom Video Communications is a communications technology company known for its video conferencing platform.",
    companySize: "200",
    specialties: "Video Conferencing, Telecommunications, Software",
    technologies: "JavaScript, Node.js, React",
  },
  {
    id: 20,
    name: "Dropbox",
    createdAt: new Date(),
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHjnNsmL5L2NA/company-logo_200_200/company-logo_200_200/0/1654114493492/dropbox_logo?e=1734566400&v=beta&t=9CGENbtrj5LtC81Z5QPde-DjoJc9DvCJd07oU634fO0",
    location: "San Francisco, CA",
    industry: "Cloud Storage",
    slug: "dropbox",
    overview:
      "Dropbox is a file hosting service that offers cloud storage, file synchronization, and personal cloud.",
    companySize: "300",
    specialties: "Cloud Storage, File Sharing, Collaboration",
    technologies: "Python, JavaScript, Go",
  },
];

const jobs = [
  {
    title: "Senior Software Engineer",
    description:
      "Join our team to work on cutting-edge search algorithms and machine learning models.",
    companyId: 1, // Google
    salary: 150000,
    keywords: "Python, Machine Learning, Algorithms",
  },
  {
    title: "Cloud Solutions Architect",
    description:
      "Design and implement scalable cloud solutions for enterprise clients.",
    companyId: 2, // Microsoft
    salary: 140000,
    keywords: "Azure, Cloud Architecture, .NET",
  },
  {
    title: "iOS Developer",
    description: "Create innovative mobile applications for Apple devices.",
    companyId: 3, // Apple
    salary: 130000,
    keywords: "Swift, iOS, Mobile Development",
  },
  {
    title: "Data Scientist",
    description:
      "Analyze large datasets to drive business decisions and improve customer experience.",
    companyId: 4, // Amazon
    salary: 135000,
    keywords: "Machine Learning, Big Data, Python",
  },
  {
    title: "Product Manager",
    description:
      "Lead the development of new social media features and products.",
    companyId: 5, // Facebook
    salary: 145000,
    keywords: "Product Management, UX, Analytics",
  },
  // Add more job entries for other companies...
];

const users = [
  { email: "admin@gmail.com", password: "admin123", createdAt: new Date() },
  { email: "test@gmail.com", password: "test123", createdAt: new Date() },
];
async function main() {
  console.log(`Start seeding ...`);

  for (const company of companies) {
    const result = await prisma.company.upsert({
      where: { id: company.id },
      update: {},
      create: company,
    });
    console.log(`created company: ${result.id}`);
  }

  for (const job of jobs) {
    const result = await prisma.job.create({
      data: job,
    });
    console.log(
      `Created job: ${result.title} for company ID ${result.companyId}`
    );
  }

  for (const user of users) {
    const result = await prisma.user.create({
      data: user,
    });
    console.log(`Created user: ${result.email}`);
  }

  console.log("seeding completed");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
