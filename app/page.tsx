import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  FileCheck,
  Plane,
  HeartPulse,
  Briefcase,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Application Support",
    description: `Document verification, submission, admission letters — handled by people who've done it themselves.`,
  },
  {
    icon: GraduationCap,
    title: "Scholarship Guidance",
    description: `Russian Government Quota applications. Free. Yes, actually free. No hidden fees.`,
  },
  {
    icon: FileCheck,
    title: "Visa & Legal",
    description: `Invitation letters, contract review, POPIA compliance — the boring stuff, made simple.`,
  },
  {
    icon: Plane,
    title: "Pre-Departure",
    description: `Mental health screening, Russian language prep, cultural orientation — because "good luck" isn't a strategy.`,
  },
  {
    icon: HeartPulse,
    title: "In-Country Support",
    description: `Airport pickup, migration registration, 24/7 support — we meet you where others send a PDF.`,
  },
  {
    icon: Briefcase,
    title: "Career Transition",
    description: `ECSA, HPCSA guidance, study-to-work transition — from graduate to professional.`,
  },
];

const differentiators = [
  {
    label: "They charge hidden fees",
    value: "We publish everything. Every rand. Every ruble.",
  },
  {
    label: `They hope you don't read the fine print`,
    value: "We write the fine print so you can actually understand it.",
  },
  {
    label: "They treat you like a number",
    value: "We treat you like a future graduate.",
  },
  {
    label: 'They hand you a ticket and say "good luck"',
    value: "We meet you at the airport with a smile and a plan.",
  },
  {
    label: "They collect commission from the university",
    value: "We work for you — not for a commission.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-navy">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-800/30 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              Now accepting 2027 applications
            </div>

            <h1 className="heading-xl text-white mb-6 text-balance">
              A Team of <span className="text-gold-400">Russia-Trained</span>{" "}
              South African Professionals.
            </h1>

            <p className="text-lg sm:text-xl text-navy-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Spread across Russian universities. One shared mission: creating
              trusted, transparent pathways to world-class education in Russia.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services" className="btn-primary w-full sm:w-auto">
                Explore Our Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="btn-outline border-navy-400 text-navy-200 hover:bg-white hover:text-navy-900 hover:border-white w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp a Graduate
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md text-navy-900 mb-4">
              A boutique bilateral agency,{" "}
              <span className="text-gold-600">
                not a call-centre recruiter.
              </span>
            </h2>
            <p className="body-lg">
              We don&apos;t read from scripts. We don&apos;t chase commissions.
              We don&apos;t disappear after the invoice clears. We are
              Russia-trained South African professionals who understand both
              systems intimately — because we&apos;ve lived them.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-navy-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 mb-2 block">
              What We Do
            </span>
            <h2 className="heading-md text-navy-900">
              End-to-End Support, From Application to Graduation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card p-8 group">
                <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center mb-5 group-hover:bg-gold-200 transition-colors">
                  <service.icon className="w-6 h-6 text-gold-700" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 mb-2 block">
                The Gap We Fill
              </span>
              <h2 className="heading-md text-navy-900 mb-6">
                Some agencies think a student is a transaction.{" "}
                <span className="text-gold-600">
                  We know they are a person.
                </span>
              </h2>
              <div className="space-y-6">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <span className="text-red-500 text-xs font-bold">
                        &times;
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-navy-400 line-through">
                        {item.label}
                      </p>
                      <p className="text-navy-800 font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gold-500/10 rounded-3xl transform rotate-3" />
              <div className="relative bg-navy-900 rounded-3xl p-8 lg:p-10 text-white">
                <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-6">
                  &ldquo;Some agencies promise the world and deliver confusion.
                  We promise clarity and deliver results. Some agencies collect
                  fees and disappear. We collect accountability and stay.&rdquo;
                </blockquote>
                <div className="border-t border-navy-700 pt-6">
                  <p className="text-navy-300 text-sm">
                    That&apos;s the difference between a call centre and a
                    boutique agency. That&apos;s the difference between a sales
                    pitch and a partnership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 gradient-navy">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Students Guided" },
              { value: "25+", label: "Partner Universities" },
              { value: "8", label: "Team Members" },
              { value: "100%", label: "Free Scholarship Help" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gold-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-navy-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-navy-900 mb-6">
              Ready to start your Russia journey?
            </h2>
            <p className="body-lg mb-10 max-w-xl mx-auto">
              Whether you&apos;re a student, parent, or school representative —
              we&apos;d love to hear from you. No pressure, no scripts, just
              honest guidance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-secondary w-full sm:w-auto">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/scholarships"
                className="btn-outline w-full sm:w-auto"
              >
                Explore Scholarships
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
