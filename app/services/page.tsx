import {
  FileCheck,
  GraduationCap,
  Scale,
  Plane,
  HeartPulse,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: FileCheck,
    title: "Application Support",
    description: `Document verification, submission, admission letters — handled by people who've done it themselves. We know what universities actually want because we've been through the process.`,
    features: [
      "Document verification",
      "University application submission",
      "Admission letter follow-up",
      "Timeline management",
    ],
  },
  {
    icon: GraduationCap,
    title: "Scholarship Guidance",
    description:
      "Russian Government Quota applications. Free. Yes, actually free. We guide you through every step of the fully-funded scholarship process.",
    features: [
      "Quota application strategy",
      "Document preparation",
      "University matching",
      "Interview prep",
    ],
  },
  {
    icon: Scale,
    title: "Visa & Legal",
    description:
      "Invitation letters, contract review, POPIA compliance — the boring stuff, made simple. We handle the paperwork so you can focus on packing.",
    features: [
      "Invitation letters",
      "Contract review",
      "POPIA compliance",
      "Legal documentation",
    ],
  },
  {
    icon: Plane,
    title: "Pre-Departure",
    description: `Mental health screening, Russian language prep, cultural orientation — because "good luck" isn't a strategy. We prepare you for what's actually coming.`,
    features: [
      "Mental health screening",
      "Russian language basics",
      "Cultural orientation",
      "Packing & logistics guide",
    ],
  },
  {
    icon: HeartPulse,
    title: "In-Country Support",
    description:
      "Airport pickup, migration registration, 24/7 support — we meet you where others send a PDF. You're never alone in a foreign country.",
    features: [
      "Airport pickup",
      "Migration registration",
      "Accommodation setup",
      "24/7 emergency support",
    ],
  },
  {
    icon: Briefcase,
    title: "Career Transition",
    description:
      "ECSA, HPCSA guidance, study-to-work transition — from graduate to professional. Your degree is just the beginning.",
    features: [
      "ECSA pathway guidance",
      "HPCSA registration support",
      "CV & interview prep",
      "Professional network access",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="gradient-navy py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4 block">
              Our Services
            </span>
            <h1 className="heading-lg text-white mb-6">
              From application to graduation.{" "}
              <span className="text-gold-400">And beyond.</span>
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed max-w-2xl">
              We don&apos;t do half-measures. Every service is designed around
              one question: &ldquo;What would we have wanted when we were in
              your shoes?&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="w-14 h-14 rounded-xl bg-gold-100 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-gold-700" />
                    </div>
                    <h2 className="text-xl font-bold text-navy-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm text-navy-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-center gap-3 p-3 bg-navy-50 rounded-lg"
                        >
                          <div className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                          <span className="text-sm text-navy-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-navy-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-md text-navy-900 mb-4">
              Not sure what you need?
            </h2>
            <p className="body-lg mb-8">
              That&apos;s exactly why we offer free consultations. Tell us where
              you are, and we&apos;ll map the route.
            </p>
            <Link href="/contact" className="btn-secondary">
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
