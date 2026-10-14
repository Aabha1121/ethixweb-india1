
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Workflow,
  BarChart3,
  Smartphone,
  Database,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Professional, responsive websites that communicate your value and help customers connect with your business.",
    items: ["Business websites", "Landing pages", "Web applications"],
  },
  {
    icon: Workflow,
    title: "AI & Automation",
    description:
      "Practical automation solutions to reduce repetitive tasks and make everyday business processes easier.",
    items: ["Workflow automation", "AI-powered tools", "Process improvement"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Turn business data into understandable reports, interactive dashboards and actionable insights.",
    items: ["Business dashboards", "Data visualization", "Reporting"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Create smooth digital experiences that work across mobile phones, tablets and desktop computers.",
    items: ["Mobile-first layouts", "User-friendly interfaces", "Accessibility"],
  },
  {
    icon: Database,
    title: "Business Applications",
    description:
      "Organize information and streamline operations with applications designed around your requirements.",
    items: ["Database integration", "Custom tools", "Digital workflows"],
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Improvement",
    description:
      "Keep your digital products reliable with ongoing improvements, performance checks and thoughtful updates.",
    items: ["Performance optimization", "Bug fixes", "Feature updates"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#171717]">
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="text-2xl font-black">
            ethixweb<span className="text-[#c92332]">.</span>
          </Link>
          <nav className="flex items-center gap-5 text-sm font-medium sm:gap-8">
            <Link href="/" className="hover:text-[#c92332]">Home</Link>
            <Link href="/services" className="text-[#c92332]">Services</Link>
            <Link href="/about" className="hover:text-[#c92332]">About</Link>
            <Link href="/contact" className="hover:text-[#c92332]">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c92332]">
            Our services
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Digital solutions built around your business.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#66615e]">
            From your first website to smarter workflows, explore practical
            technology solutions designed to support your next stage of growth.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c92332] px-7 py-4 font-semibold text-white hover:bg-[#a91c29]"
          >
            Discuss your project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-3xl border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:border-[#c92332]/40 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c92332]/10 text-[#c92332]">
                    <Icon size={24} />
                  </div>
                  <span className="text-sm text-[#99918d]">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="mt-7 text-xl font-semibold">{service.title}</h2>
                <p className="mt-3 min-h-24 leading-7 text-[#66615e]">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-[#44403e]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c92332]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#c92332]"
                >
                  Enquire about this <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#171717] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <h2 className="text-3xl font-semibold">
              Have a specific challenge?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-white/65">
              Tell us what you need. We can explore an approach that fits
              your goals and requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c92332] px-7 py-4 font-semibold hover:bg-[#e03847]"
          >
            Get in touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <footer className="px-6 py-7 text-center text-sm text-[#66615e]">
        Â© {2026} Ethixweb. Digital solutions for business.
      </footer>
    </main>
  );
}

