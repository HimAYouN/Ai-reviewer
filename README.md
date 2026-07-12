#  AI Reviewer

 AI Reviewer is a Next.js application that connects a GitHub App to your repositories and uses AI to review pull requests automatically. It combines authentication, repository syncing, background jobs, and billing workflows in a single product experience.

## What it does

- Installs a GitHub App for a user and exposes repository data in the dashboard
- Watches pull request events via GitHub webhooks
- Runs background review and sync jobs with Inngest
- Stores review state in PostgreSQL through Prisma
- Supports paid plans through Razorpay

## Tech stack

- Next.js 16 App Router
- React 19 and TypeScript
- Prisma + PostgreSQL
- Better Auth for authentication
- GitHub Octokit and GitHub App integration
- Inngest for background workflows
- OpenRouter for AI review generation
- Pinecone for vector-based codebase context
- Tailwind CSS and shadcn/ui

## Prerequisites

Before running the app locally, make sure you have:

- Node.js 20+
- npm
- A PostgreSQL database
- A GitHub App configured for webhooks and installation
- An OpenRouter API key
- A Pinecone API key and index (optional for repository context workflows)
- Razorpay credentials if you want to test subscriptions

## Local development

1. Install dependencies

```bash
npm install
```

2. Create a local environment file

```bash
cp .env.example .env.local
```

If there is no .env.example in the repository, create .env.local manually with the variables below.

3. Set up the database

```bash
npx prisma generate
npx prisma migrate dev
```

4. Start the app

```bash
npm run dev
```

The app will be available at http://localhost:3000.

## Required environment variables

Add the following values to your environment:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/chaicode

GITHUB_CLIENT_ID=your_github_oauth_app_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_app_client_secret
GITHUB_APP_ID=your_github_app_id
GITHUB_APP_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n..."
GITHUB_APP_WEBHOOK_SECRET=your_github_webhook_secret
NEXT_PUBLIC_GITHUB_PUBLIC_LINK=https://github.com/settings/apps/your-app-name

OPENROUTER_API_KEY=your_openrouter_key

PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX=your_pinecone_index_name

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_PLAN_ID=your_razorpay_plan_id
RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret
```

## Background jobs and webhooks

This project uses Inngest for asynchronous work such as PR review processing and repository syncing. Start it alongside the app:

```bash
npx inngest dev
```

For GitHub webhooks, your local app needs a public URL. A common setup is:

```bash
ngrok http 3000
```

Then configure your GitHub App webhook URL to point at the public tunnel and the `/api/github/webhook` route.

## Useful commands

```bash
npm run dev
npm run build
npm run lint
npx prisma studio
```

## Project structure highlights

- `app/` contains the Next.js route handlers and pages
- `features/` contains domain-specific logic for auth, GitHub, reviews, billing, and repo sync
- `lib/` contains shared auth, database, and utility code
- `prisma/` contains the Prisma schema and migrations

## Notes

- The GitHub App installation flow is required before repository data can be surfaced in the dashboard.
- Review jobs depend on webhook delivery and the Inngest worker being available.
- Prisma migrations should be applied after changing the schema.
