
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Users,
  CheckCircle2,
} from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Purpose before technology",
    description:
      "We start by understanding the problem, your goals and the people who will use the solution.",
  },
  {
    icon: Lightbulb,
    title: "Simple, thoughtful solutions",
    description:
      "We believe useful technology should be understandable, practical and easy to work with.",
  },
  {
    icon: Users,
    title: "Built around people",
    description:
      "We consider the needs of customers, teams and growing businesses at every stage.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#171717]">
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="text-2xl font-black">
            ethixweb<span className="text-[#c92332]">.</span>
          </Link>

          <nav className="flex items-center gap-4 text-sm font-medium sm:gap-8">
            <Link href="/" className="hover:text-[#c92332]">Home</Link>
            <Link href="/services" className="hover:text-[#c92332]">Services</Link>
            <Link href="/about" className="text-[#c92332]">About</Link>
            <Link href="/contact" className="hover:text-[#c92332]">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c92332]">
            About Ethixweb
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Technology should make progress
            <span className="text-[#c92332]"> possible.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#66615e]">
            We believe digital experiences work best when they solve real
            problems. Our approach brings together thoughtful design,
            practical technology and an understanding of business needs.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c92332] px-7 py-4 font-semibold text-white hover:bg-[#a91c29]"
          >
            Let's talk about your goals <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c92332]">
            Our perspective
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
            Designed with Indiaâ€™s growing businesses in mind.
          </h2>
          <p className="mt-6 leading-8 text-[#66615e]">
            Indian businesses serve customers across different devices,
            regions and working environments. Digital tools need to be
            accessible, responsive and relevant to these everyday realities.
          </p>
          <p className="mt-4 leading-8 text-[#66615e]">
            That is why we value mobile-first experiences, clear communication
            and solutions that can grow alongside a business.
          </p>
        </div>

        <div className="rounded-[2rem] bg-[#171717] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff8790]">
            Our mission
          </p>
          <h3 className="mt-5 text-3xl font-semibold leading-snug">
            Make digital progress feel practical, not complicated.
          </h3>
          <div className="mt-8 space-y-4">
            {[
              "Understand the real business challenge",
              "Choose technology for a clear purpose",
              "Create experiences people can use",
              "Improve through feedback and learning",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-1 shrink-0 text-[#ff8790]"
                />
                <p className="leading-7 text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c92332]">
            What guides us
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight">
            Principles behind every project.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="rounded-3xl border border-black/10 bg-[#faf9f6] p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c92332]/10 text-[#c92332]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">
                    {principle.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#66615e]">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#c92332] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <h2 className="text-3xl font-semibold">
              Have an idea worth building?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-white/85">
              Tell us what you want to achieve, and let's explore the next step.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-[#c92332] hover:bg-[#f5e8e8]"
          >
            Contact us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <footer className="px-6 py-7 text-center text-sm text-[#66615e]">
        Â© 2026 Ethixweb. Digital solutions for business.
      </footer>
    </main>
  );
}

