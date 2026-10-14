
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Workflow,
  BarChart3,
  CheckCircle2,
  Menu,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, responsive websites and digital experiences designed to help your business grow.",
    tags: ["Business Websites", "Web Applications"],
  },
  {
    number: "02",
    icon: Workflow,
    title: "AI & Automation",
    description:
      "Reduce repetitive work and build smarter workflows with practical automation.",
    tags: ["AI Solutions", "Workflow Automation"],
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Data & Digital Systems",
    description:
      "Turn business information into useful insights, dashboards and better decisions.",
    tags: ["Analytics", "Dashboards"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#171717]">
      <header className="border-b border-black/10 bg-[#faf9f6]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="text-2xl font-black tracking-tight">
            ethixweb<span className="text-[#c92332]">.</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/" className="text-[#c92332]">Home</Link>
            <Link href="/services" className="hover:text-[#c92332]">Services</Link>
            <Link href="/about" className="hover:text-[#c92332]">About</Link>
            <Link href="/contact" className="hover:text-[#c92332]">Contact</Link>
            <Link href="/admin/login" className="hover:text-[#c92332]">Login</Link>
          </nav>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-[#c92332] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a91c29] sm:flex"
          >
            Let's Talk <ArrowRight size={16} />
          </Link>

          <Link href="/contact" aria-label="Contact us" className="sm:hidden">
            <Menu size={25} />
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#c92332]/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#c92332]/20 bg-white px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-[#c92332]" />
              Digital solutions for ambitious businesses
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Built for India's
              <span className="block text-[#c92332]">next stage of</span>
              growth.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#66615e]">
              Websites, intelligent automation and connected business systems
              designed around the way Indian teams work.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#c92332] px-7 py-4 font-semibold text-white transition hover:bg-[#a91c29]"
              >
                Start a project <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 font-semibold transition hover:border-[#c92332] hover:text-[#c92332]"
              >
                Explore services
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#66615e]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#c92332]" />
                Mobile-first design
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#c92332]" />
                Built for real business needs
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-2xl shadow-black/5 sm:p-8">
              <div className="flex items-center justify-between border-b border-black/10 pb-5">
                <div>
                  <p className="text-sm text-[#77716e]">THE DIGITAL ADVANTAGE</p>
                  <h2 className="mt-1 text-xl font-semibold">Ideas into impact.</h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c92332] text-white">
                  <Workflow size={25} />
                </div>
              </div>

              <div className="mt-7 space-y-4">
                <div className="rounded-2xl bg-[#faf9f6] p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Digital presence</span>
                    <span className="text-xs text-[#c92332]">01 / DESIGN</span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-black/5">
                    <div className="h-full w-[85%] rounded-full bg-[#c92332]" />
                  </div>
                </div>

                <div className="rounded-2xl bg-[#faf9f6] p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Smarter workflows</span>
                    <span className="text-xs text-[#c92332]">02 / BUILD</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <div className="h-2 flex-1 rounded-full bg-[#c92332]" />
                    <div className="h-2 flex-1 rounded-full bg-[#c92332]/40" />
                    <div className="h-2 flex-1 rounded-full bg-black/10" />
                  </div>
                </div>

                <div className="rounded-2xl bg-[#171717] p-5 text-white">
                  <p className="text-sm text-white/60">Our approach</p>
                  <p className="mt-2 text-lg font-medium">
                    Understand. Build. Improve.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Technology should solve real problems, not create more of them.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 -z-10 h-36 w-36 rounded-full bg-[#c92332]/10 blur-2xl" />
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-6 py-6 sm:grid-cols-3 lg:px-10">
          <p className="text-center text-sm font-medium text-[#66615e]">
            Designed for Indian businesses
          </p>
          <p className="text-center text-sm font-medium text-[#66615e]">
            Responsive across devices
          </p>
          <p className="text-center text-sm font-medium text-[#66615e]">
            Focused on practical outcomes
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c92332]">
              What we do
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Technology that moves your business forward.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold hover:text-[#c92332]"
          >
            All services <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.number}
                className="group rounded-3xl border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c92332]/40 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c92332]/10 text-[#c92332]">
                    <Icon size={24} />
                  </div>
                  <span className="text-sm text-[#99918d]">{service.number}</span>
                </div>
                <h3 className="mt-7 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-[#66615e]">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#faf9f6] px-3 py-2 text-xs font-medium text-[#66615e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#171717] text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 md:flex-row md:items-center md:py-20 lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff8790]">
              Have a project in mind?
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Let's build something that makes a difference.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/65">
              Tell us what you are working on. Let's explore the right solution together.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#c92332] px-7 py-4 font-semibold text-white transition hover:bg-[#e03847]"
          >
            Talk to our team <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <footer className="bg-[#faf9f6]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-7 text-sm text-[#66615e] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <Link href="/" className="text-xl font-black tracking-tight text-[#171717]">
            ethixweb<span className="text-[#c92332]">.</span>
          </Link>
          <p>Digital experiences built around real business needs.</p>
          <p>Â© 2026 Ethixweb</p>
        </div>
      </footer>
    </main>
  );
}

