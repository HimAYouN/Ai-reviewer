import Link from "next/link";

const metrics = [
  { value: "24/7", label: "AI review coverage" },
  { value: "< 2 min", label: "feedback loop" },
  { value: "100%", label: "GitHub-native workflow" },
];

const features = [
  {
    title: "GitHub App installation",
    description:
      "Connect your repositories in minutes and let the platform pull PR context directly from GitHub.",
  },
  {
    title: "Automated review delivery",
    description:
      "Generate thoughtful code review summaries, risks, and next steps with AI tailored to each pull request.",
  },
  {
    title: "Repo sync + billing",
    description:
      "Keep repository data synced, manage paid plans, and monitor usage without leaving the product.",
  },
];

const workflow = [
  "Install the GitHub app and connect a repo",
  "Open a pull request and let AI review it instantly",
  "Ship with proactive feedback, usage insights, and billing controls",
];

export default function Home() {
  return (
    <div className="landing-shell relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="landing-grid" />

      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-8">
          <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
            AI Reviewer
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#features" className="transition hover:text-foreground">
              Features
            </a>
            <a href="#workflow" className="transition hover:text-foreground">
              Workflow
            </a>
            <a href="#pricing" className="transition hover:text-foreground">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              Sign in
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Open dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 py-10 sm:px-10 lg:px-8 lg:py-16">
        <section className="grid items-center gap-10 rounded-[2rem] border border-border/80 bg-card/80 p-8 shadow-[0_30px_120px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Live · GitHub-first AI review platform
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Turn every pull request into a shipping-grade review in minutes.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              AI Reviewer is a polished product experience for teams that want faster review cycles, deeper code context, and billing-ready subscription management in one place.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Launch live app
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                Explore the product
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="rounded-full border border-border px-3 py-1">Repo sync included</span>
              <span className="rounded-full border border-border px-3 py-1">Pro billing ready</span>
              <span className="rounded-full border border-border px-3 py-1">Built for sale-ready demos</span>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-border/80 bg-background/70 p-6">
            <div className="rounded-[1.25rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/20 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
                Product snapshot
              </p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="rounded-xl border border-border bg-card/70 px-4 py-3">
                  Connect GitHub repos and install the app in one flow.
                </li>
                <li className="rounded-xl border border-border bg-card/70 px-4 py-3">
                  Receive AI-powered PR summaries and review suggestions instantly.
                </li>
                <li className="rounded-xl border border-border bg-card/70 px-4 py-3">
                  Manage subscriptions, usage, and plan access from the dashboard.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm">
              <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </section>

        <section id="features" className="space-y-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Why teams buy it</p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Every core experience is already built and demo-ready.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="workflow" className="rounded-[2rem] border border-border/80 bg-card/70 p-8 lg:p-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">How it works</p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              A smooth experience from install to review to subscription.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {workflow.map((step, index) => (
              <div key={step} className="rounded-2xl border border-border/80 bg-background/70 p-5">
                <p className="text-sm font-semibold text-primary">0{index + 1}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">For sale now</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                Ready for launch, ready for customers, ready for growth.
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                The product is packaged as a live SaaS experience with authentication, billing, GitHub integration, and dashboard workflows already wired together.
              </p>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Get started today
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 px-6 py-8 text-center text-sm text-muted-foreground sm:px-10 lg:px-8">
        AI Reviewer · Built for modern engineering teams.
      </footer>
    </div>
  );
}
