import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  FileCheck,
  Globe2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const journey = [
  {
    number: "01",
    title: "Find your route",
    text: "Explore study options and choose a path that fits your goals.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Get application-ready",
    text: "We help you prepare documents, apply and keep each next step clear.",
    icon: FileCheck,
  },
  {
    number: "03",
    title: "Land ready for what's next",
    text: "Get practical pre-departure guidance and support when you arrive.",
    icon: Plane,
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Clear from day one",
    text: "We explain the process, the costs and what to expect in plain language.",
  },
  {
    icon: GraduationCap,
    title: "Focused on your graduation",
    text: "We treat you like a future graduate because that is who you are from day one.",
  },
  {
    icon: HeartHandshake,
    title: "People in your corner",
    text: "Our team brings lived experience and personal guidance to every step.",
  },
  {
    icon: Users,
    title: "A team that gets it",
    text: "We've studied in Russia and know what it takes to settle into a new place.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 right-[-8rem] h-96 w-96 rounded-full bg-coral-500/20 blur-3xl motion-pulse" />
          <div className="absolute -bottom-48 left-[-8rem] h-96 w-96 rounded-full bg-lime-300/10 blur-3xl motion-pulse motion-delay-300" />
          <div className="hero-grid absolute inset-0 opacity-30" />
        </div>

        <div className="container-custom grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="relative z-10 max-w-2xl motion-enter">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-lime-200">
              <Sparkles className="h-4 w-4 text-coral-300" />
              Your Pathway to Russia, with people who've been there
            </div>

            <h1 className="heading-xl mb-6 text-balance text-white">
              Your study-abroad story starts{" "}
              <span className="text-coral-300">here.</span>
            </h1>
            <p className="mb-9 max-w-xl text-lg leading-relaxed text-slate-200 sm:text-xl">
              We&apos;re Russia-trained professionals helping you find your
              study path, get application-ready and feel prepared for your next
              chapter.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/why-russia" className="btn-coral">
                Explore your options
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/team" className="btn-light-outline">
                Meet your people
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-300">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-lime-300" />
                Guidance by Russia-trained graduates
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-coral-300" />
                Support from application to arrival
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg motion-enter motion-delay-200">
            <div className="route-orbit absolute inset-5 rounded-full border border-dashed border-lime-200/30 motion-pulse" />
            <div className="route-orbit absolute inset-14 rounded-full border border-coral-300/20 motion-pulse motion-delay-300" />

            <div className="relative mx-auto flex aspect-square max-w-[440px] items-center justify-center">
              <div className="absolute h-[72%] w-[72%] rounded-full bg-coral-500/15 blur-2xl" />
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-white/10 bg-ink-900 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:h-64 sm:w-64">
                <div className="absolute inset-4 rounded-full border border-white/10" />
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-lime-300 text-ink-950 shadow-[0_0_60px_rgba(217,249,157,0.25)] sm:h-36 sm:w-36">
                  <GraduationCap className="h-16 w-16" strokeWidth={1.5} />
                </div>
                <span className="absolute -right-3 top-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-400 text-ink-950 shadow-lg motion-float">
                  <Plane className="h-6 w-6 -rotate-12" />
                </span>
                <span className="absolute -bottom-2 left-7 flex h-11 w-11 items-center justify-center rounded-full bg-white text-coral-600 shadow-lg motion-float motion-delay-300">
                  <Sparkles className="h-5 w-5" />
                </span>
              </div>

              <div className="absolute left-0 top-[22%] rounded-2xl border border-white/10 bg-ink-900/90 p-4 shadow-xl backdrop-blur motion-float">
                <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-200">
                  <MapPin className="h-3.5 w-3.5" />
                  Starting point
                </div>
                <p className="text-lg font-bold text-white">South Africa</p>
              </div>

              <div className="absolute bottom-[17%] right-0 rounded-2xl border border-white/10 bg-ink-900/90 p-4 shadow-xl backdrop-blur motion-float motion-delay-200">
                <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-coral-200">
                  <Globe2 className="h-3.5 w-3.5" />
                  Next chapter
                </div>
                <p className="text-lg font-bold text-white">Russia</p>
              </div>

              <div className="absolute right-[5%] top-[5%] rounded-full bg-lime-300 px-4 py-2 text-xs font-black uppercase tracking-widest text-ink-950 shadow-lg motion-float motion-delay-500">
                Your future, in motion
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="container-custom">
          <div className="mb-12 max-w-3xl motion-enter">
            <span className="eyebrow">Your journey, made human</span>
            <h2 className="heading-lg mt-3 text-ink-950">
              Big move. Clear steps.{" "}
              <span className="text-coral-600">People in your corner.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {journey.map((step, index) => (
              <article
                key={step.number}
                className="journey-card group motion-enter"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="text-sm font-black tracking-widest text-coral-600">
                    {step.number}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-200 text-ink-950 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <step.icon className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-ink-950">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-700">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-coral-200" />
            <div className="absolute -bottom-6 right-5 h-32 w-32 rounded-full bg-lime-200" />
            <div className="relative rounded-[2rem] bg-ink-950 p-8 text-white sm:p-12">
              <span className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-lime-200">
                We know this feeling
              </span>
              <p className="text-2xl font-semibold leading-snug sm:text-3xl">
                New place. New language. New possibilities.{" "}
                <span className="text-coral-300">
                  You don&apos;t have to figure it all out alone.
                </span>
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6 text-sm text-slate-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-ink-950">
                  <Users className="h-5 w-5" />
                </span>
                Russia-trained African and Russian professionals
              </div>
            </div>
          </div>

          <div className="motion-enter">
            <span className="eyebrow">Meet Global Certify</span>
            <h2 className="heading-md mt-3 text-ink-950">
              We&apos;ve made the journey. Now we help you make yours.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-700">
              <p>
                Global Certify is a South African agency supporting students who
                want to study in Russia. Our team brings first-hand experience
                of both systems and a shared commitment to clear, personal
                guidance.
              </p>
              <p>
                From your first question to your first days on campus, we help
                make each next step feel more manageable.
              </p>
            </div>
            <Link
              href="/team"
              className="group mt-8 inline-flex items-center font-bold text-coral-700 transition-colors hover:text-ink-950"
            >
              Get to know the team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-lime-100 py-20 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-2xl text-center motion-enter">
            <span className="eyebrow">Our promise to you</span>
            <h2 className="heading-lg mt-3 text-ink-950">
              Good energy.{" "}
              <span className="text-coral-600">Solid support.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="promise-card motion-enter"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-100 text-coral-700">
                  <pillar.icon className="h-6 w-6" />
                </span>
                <h3 className="mb-2 font-bold text-ink-950">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-ink-700">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coral-500 px-4 py-16 text-ink-950 sm:px-6 lg:py-20">
        <div className="container-custom flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <span className="text-sm font-black uppercase tracking-[0.18em]">
              Your next chapter is calling
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Let&apos;s talk about your Russia study plans.
            </h2>
            <p className="mt-3 max-w-xl text-ink-900">
              Bring your questions, your big plans and{" "}
              <span className="paint-highlight">YES</span> even the nervous
              ones. We&apos;re here for all of it.
            </p>
          </div>
          <Link href="/contact" className="btn-ink">
            Start the conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
