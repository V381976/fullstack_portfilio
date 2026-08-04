import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const services = [
  {
    title: "Website Development",
    description:
      "Custom responsive websites built with React, Next.js, and modern UI.",
    features: ["Responsive design", "SEO basics", "Fast performance", "Deployment"],
    icon: "globe",
    sortOrder: 1,
  },
  {
    title: "Full-Stack Web App",
    description:
      "End-to-end MERN apps with auth, APIs, and database integration.",
    features: ["REST API", "Auth (JWT)", "PostgreSQL/MongoDB", "Admin panel"],
    icon: "layers",
    sortOrder: 2,
  },
];

const removedTitles = ["Frontend UI / Dashboard", "Bug Fix & Feature Add"];

async function main() {
  await prisma.service.deleteMany({
    where: { title: { in: removedTitles } },
  });

  for (const service of services) {
    const existing = await prisma.service.findFirst({
      where: { title: service.title },
    });

    if (existing) {
      await prisma.service.update({
        where: { id: existing.id },
        data: service,
      });
    } else {
      await prisma.service.create({ data: service });
    }
  }

  console.log("Seeded freelancer services");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
