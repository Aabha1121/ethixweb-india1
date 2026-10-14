 # Ethixweb — Digital Solutions for Businesses

Ethixweb is a responsive business website built to showcase digital services and collect customer enquiries. It includes a contact form, email notifications, Supabase database storage, and a protected admin dashboard.

## Live Website

https://ethixweb-india1.vercel.app/

## Features

- Responsive homepage, About, Services, and Contact pages
- Contact form for customer enquiries
- Email notifications using Resend
- Enquiry storage using Supabase
- Secure admin authentication
- Admin dashboard to view enquiries
- Enquiry status management: New, In Progress, and Completed
- Deployed on Vercel

## Tech Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Supabase Authentication and Database
- Resend for email notifications
- Vercel for deployment

## Design Rationale

The website uses a clean, modern layout with simple navigation so visitors can easily explore services and contact the business. Responsive styling supports both mobile and desktop screens. The contact form provides a direct enquiry channel, while the admin dashboard helps authorized users organize and track enquiries.

## Getting Started

### Prerequisites

- Node.js
- npm
- A Supabase project
- A Resend account for email notifications

### Installation

Clone the repository:

```bash
git clone https://github.com/Aabha1121/ethixweb-india1.git
cd ethixweb-india1
npm install
```

Create a `.env.local` file in the project root and configure the required environment variables:

- `SUPABASE_URL`
- `SUPABASE_SECRET_KEY`
- `RESEND_API_KEY`
- `ENQUIRY_RECEIVER_EMAIL`
- `RESEND_FROM_EMAIL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `ADMIN_EMAIL`

Never publish real secret values in this file or on GitHub.

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## PageSpeed Insights Results

Tested on October 14, 2026.

| Category | Mobile | Desktop |
|---|---:|---:|
| Performance | 100 | 100 |
| Accessibility | 95 | 95 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

These are the scores recorded in the PageSpeed Insights reports. Results can vary between tests.

## Deployment

The website is deployed on Vercel:

https://ethixweb-india1.vercel.app/

## Security

- Keep `.env.local` private and excluded from Git.
- Never expose Supabase secret keys or Resend API keys.
- Restrict dashboard access to authorized administrators.

