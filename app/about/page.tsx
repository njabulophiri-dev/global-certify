import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Global Certify"
        icon={Users}
        title="We've made the journey. Now we help you make yours."
        description="A team of proffessionals with first-hand experience studying in Russia."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="eyebrow">Meet Global Certify</span>
            <h2 className="heading-md mt-3 text-ink-950">
              Practical support for your study journey.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-700">
              <p>
                Global Certify helps students explore university options,
                navigate applications and prepare for life abroad. Our support
                starts from initial planning and continues through arrival on
                campus and beyond graduation.
              </p>
              <p className="mt-8 rounded-2xl border-l-4 border-coral-500 bg-cream-50 px-6 py-5 text-xl font-bold leading-snug text-ink-950 sm:text-2xl">
                <span className="text-coral-600">We are in your corner</span>{" "}
                all the way.
              </p>
            </div>
            <Link
              href="/team"
              className="group mt-8 inline-flex items-center font-bold text-coral-700 transition-colors hover:text-ink-950"
            >
              Meet the team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
