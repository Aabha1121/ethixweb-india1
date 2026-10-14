"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
} from "lucide-react";

 
export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Enquiry submit nahi hui. Please try again."
        );
      }

      setStatus(
        result.emailSent === false
          ? "Enquiry save ho gayi, lekin email notification send nahi hui."
          : "Your enquiry has been submitted successfully!"
      );

      if (result.success) {
        form.reset();
      }
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (

    <main className="min-h-screen bg-[#faf9f6] text-[#171717]">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="text-2xl font-black">
            ethixweb<span className="text-[#c92332]">.</span>
          </Link>

          <nav className="flex items-center gap-4 text-sm font-medium sm:gap-8">
            <Link href="/" className="hover:text-[#c92332]">Home</Link>
            <Link href="/services" className="hover:text-[#c92332]">Services</Link>
            <Link href="/about" className="hover:text-[#c92332]">About</Link>
            <Link href="/contact" className="text-[#c92332]">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c92332]">
            Contact us
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Let's talk about what you want to build.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#66615e]">
            Share your goals, your challenge or your idea. Let's explore
            a practical digital solution for your business.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div>
          <h2 className="text-2xl font-semibold">Start a conversation</h2>
          <p className="mt-4 leading-7 text-[#66615e]">
            A little information about your project helps us understand
            what you need and what the next step could be.
          </p>

          <div className="mt-9 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c92332]/10 text-[#c92332]">
                <MessageSquare size={21} />
              </div>
              <div>
                <h3 className="font-semibold">Tell us your idea</h3>
                <p className="mt-1 text-sm leading-6 text-[#66615e]">
                  Website, automation, analytics or a custom digital product.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c92332]/10 text-[#c92332]">
                <Mail size={21} />
              </div>
              <div>
                <h3 className="font-semibold">Email communication</h3>
                <p className="mt-1 text-sm leading-6 text-[#66615e]">
                  Enter your email in the form so your enquiry can be associated
                  with your contact details.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c92332]/10 text-[#c92332]">
                <MapPin size={21} />
              </div>
              <div>
                <h3 className="font-semibold">Made for Indian businesses</h3>
                <p className="mt-1 text-sm leading-6 text-[#66615e]">
                  Share your requirements from anywhere in India.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c92332]/10 text-[#c92332]">
                <Clock size={21} />
              </div>
              <div>
                <h3 className="font-semibold">Clear next steps</h3>
                <p className="mt-1 text-sm leading-6 text-[#66615e]">
                  Tell us what matters most, and we can understand the scope.
                </p>
              </div>
            </div>
          </div>
        </div>

         
         <form
         onSubmit={handleSubmit}
         className="rounded-3xl border border-black/10 bg-white p-6 shadow-xl shadow-black/5 sm:p-9"
         >

          <h2 className="text-2xl font-semibold">Project enquiry</h2>
          <p className="mt-2 text-sm text-[#66615e]">
            Fields marked with * are required.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Full name *
              <input
                name="name"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-black/15 bg-[#faf9f6] px-4 py-3 outline-none transition focus:border-[#c92332]"
              />
            </label>

            <label className="text-sm font-medium">
              Email address *
              <input
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-black/15 bg-[#faf9f6] px-4 py-3 outline-none transition focus:border-[#c92332]"
              />
            </label>

            <label className="text-sm font-medium">
              Phone number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                pattern="(\+91[\s-]?)?[6-9][0-9\s-]{9,13}"
                title="Enter a valid Indian mobile number."
                placeholder="+91 98765 43210"
                className="mt-2 w-full rounded-xl border border-black/15 bg-[#faf9f6] px-4 py-3 outline-none transition focus:border-[#c92332]"
              />
            </label>

            <label className="text-sm font-medium">
              Company
              <input
                name="company"
                maxLength={150}
                autoComplete="organization"
                placeholder="Company or business"
                className="mt-2 w-full rounded-xl border border-black/15 bg-[#faf9f6] px-4 py-3 outline-none transition focus:border-[#c92332]"
              />
            </label>

            <label className="text-sm font-medium sm:col-span-2">
              What do you need help with? *
              <select
                name="service"
                required
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-black/15 bg-[#faf9f6] px-4 py-3 outline-none focus:border-[#c92332]"
              >
                <option value="" disabled>Select a service</option>
                <option>Website Development</option>
                <option>AI & Automation</option>
                <option>Data Analytics</option>
                <option>Business Applications</option>
                <option>Maintenance & Improvement</option>
                <option>Other</option>
              </select>
            </label>

            <label className="text-sm font-medium">
              Estimated budget
              <select
                name="budget"
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-black/15 bg-[#faf9f6] px-4 py-3 outline-none focus:border-[#c92332]"
              >
                <option value="">Select budget</option>
                <option>Under ₹25,000</option>
                <option>₹25,000–₹50,000</option>
                <option>₹50,000–₹1,00,000</option>
                <option>Above ₹1,00,000</option>
                <option>Not decided</option>
              </select>
            </label>

            <label className="text-sm font-medium">
              Expected timeline
              <select
                name="timeline"
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-black/15 bg-[#faf9f6] px-4 py-3 outline-none focus:border-[#c92332]"
              >
                <option value="">Select timeline</option>
                <option>As soon as possible</option>
                <option>Within 1 month</option>
                <option>Within 1–3 months</option>
                <option>Flexible</option>
              </select>
            </label>

            <label className="text-sm font-medium sm:col-span-2">
              Tell us about your project *
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={3000}
                rows={5}
                placeholder="What are you trying to achieve?"
                className="mt-2 w-full resize-y rounded-xl border border-black/15 bg-[#faf9f6] px-4 py-3 outline-none transition focus:border-[#c92332]"
              />
            </label>
          </div>

           
          <button
           type="submit"
           disabled={submitting}
           className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#c92332] px-7 py-4 font-semibold text-white transition hover:bg-[#a91c29] disabled:cursor-not-allowed disabled:opacity-60"
            >
            {submitting ? "Submitting..." : "Submit enquiry"}
            <ArrowRight size={18} />
            </button>
            
            {status && (
            <p
               role="status"
                aria-live="polite"
                className="mt-4 rounded-xl bg-[#faf9f6] p-4 text-sm font-medium"
            >
               {status}
            </p>
)}



          <p className="mt-4 text-xs leading-5 text-[#77716e]">
            Please do not include passwords, payment details or other sensitive
            information in your message.
          </p>
        </form>
      </section>

      <footer className="border-t border-black/10 px-6 py-7 text-center text-sm text-[#66615e]">
         © 2026 Ethixweb. Digital solutions for business.
      </footer>
    </main>
  );
}
