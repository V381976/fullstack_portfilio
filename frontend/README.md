# Portfolio (Next.js)

Next.js App Router + Prisma + Neon PostgreSQL + Gmail SMTP.

## Structure

```text
src/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   ├── globals.css
│   └── api/
│       ├── health/route.js
│       ├── services/route.js
│       └── inquiries/route.js
├── components/
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   └── sections/
└── lib/
    ├── api.js
    ├── prisma.js
    ├── mail.js
    └── inquiry.js
prisma/
public/
```

## Run

```bash
npm install
npm run db:push
npm run db:seed
npm run dev
```

Open http://localhost:3000
