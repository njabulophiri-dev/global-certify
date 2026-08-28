import { CheckCircle, XCircle } from "lucide-react";

const comparisonData = [
  {
    them: "They charge hidden fees",
    us: "We publish everything. Every rand. Every ruble.",
  },
  {
    them: `They hope you don't read the fine print`,
    us: "We write the fine print so you can actually understand it.",
  },
  {
    them: "They treat you like a number",
    us: "We treat you like a future graduate.",
  },
  {
    them: 'They hand you a ticket and say "good luck"',
    us: "We meet you at the airport with a smile and a plan.",
  },
  {
    them: "They collect commission from the university",
    us: "We work for you — not for a commission.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4 block">
              About Us
            </span>
            <h1 className="heading-lg text-white mb-6">
              We are not a call-centre recruiter.
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed max-w-2xl">
              We are a specialised, high-touch agency — staffed by
              Russia-trained South African professionals who understand both
              systems intimately.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="heading-md text-navy-900 mb-6">Who We Are</h2>
              <div className="space-y-4 body-lg">
                <p>
                  Global Certify is a boutique bilateral agency that creates
                  trusted, transparent pathways for South African students to
                  access world-class education in Russia.
                </p>
                <p>
                  We are not a call-centre recruiter. We are a specialised,
                  high-touch agency — staffed by Russia-trained South African
                  professionals who understand both systems intimately.
                  We&apos;ve sat in the same lecture halls, navigated the same
                  visa offices, and weathered the same winters.
                </p>
                <p className="font-medium text-navy-800">
                  When we say &ldquo;we understand,&rdquo; we mean it literally.
                </p>
              </div>
            </div>

            <div className="bg-navy-50 rounded-2xl p-8 lg:p-10">
              <h3 className="heading-sm text-navy-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Global Certify was born from a simple observation: the pathway
                  from South Africa to Russia was broken.
                </p>
                <p>
                  Not the universities — those are world-class. Not the
                  opportunity — that&apos;s real. The broken part was the
                  middlemen. The agencies that treated students like spreadsheet
                  entries. The hidden fees that appeared like plot twists. The
                  &ldquo;support&rdquo; that evaporated the moment the plane
                  took off.
                </p>
                <p>
                  We decided to build something different. Something smaller,
                  sharper, and actually accountable.
                </p>
                <p className="font-medium text-navy-800">
                  A boutique agency where every team member has walked the path
                  you&apos;re about to take. Where transparency isn&apos;t a
                  marketing word — it&apos;s the only way we operate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Gap We Fill */}
      <section className="py-16 lg:py-24 bg-navy-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 mb-2 block">
              The Difference
            </span>
            <h2 className="heading-md text-navy-900">The Gap We Fill</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-navy-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 lg:p-8 bg-red-50/50">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-6">
                    What Some Agencies Do
                  </h3>
                  <div className="space-y-4">
                    {comparisonData.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-navy-600">
                          {item.them}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 lg:p-8 bg-emerald-50/50">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-600 mb-6">
                    What We Do
                  </h3>
                  <div className="space-y-4">
                    {comparisonData.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-navy-800 font-medium">
                          {item.us}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
