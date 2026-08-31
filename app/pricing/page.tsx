import {
  Check,
  X,
  ArrowRight,
  Shield,
  Clock,
  CreditCard,
  RotateCcw,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Application Support",
    price: "R4,500",
    subtitle: "One-time fee",
    bestFor: "Students who know their university and just need help getting in",
    features: [
      "Document verification & translation (Matric, ID, transcripts)",
      "University application submission (up to 2 universities)",
      "Admission letter processing",
      "Invitation letter (visa support document)",
      "Basic email/WhatsApp support",
      "Service Level Agreement (SLA)",
      "Academic verification by our Russia-trained experts",
    ],
    notIncluded: [
      "University matching",
      "Scholarship application support",
      "Visa application guidance",
      "Pre-departure orientation",
      "Russian basics course",
      "Airport pickup",
      "In-country support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Full Placement",
    price: "R8,500",
    subtitle: "One-time fee",
    bestFor:
      "Students who want end-to-end support — from application to arrival",
    features: [
      "Everything in Application Support",
      "University matching — we help you choose the right fit",
      "Scholarship application support (Russian Government Quota)",
      "Visa application guidance & document preparation",
      "Pre-departure orientation (1-hour session)",
      "Russian basics course (4 sessions with Irina)",
      "Airport pickup upon arrival in Russia",
      "Migration registration support",
      "30-day in-country WhatsApp support",
    ],
    notIncluded: [
      "Mental health pre-departure screening",
      "Contract review",
      "12-month in-country mentorship",
      "24/7 emergency support",
      "Career transition guidance",
    ],
    cta: "Most Popular — Get Started",
    popular: true,
  },
  {
    name: "Premium",
    price: "R14,000",
    subtitle: "One-time fee",
    bestFor:
      "Students who want everything — full support from start to graduation",
    features: [
      "Everything in Full Placement",
      "1-on-1 career matching session (Dr Siya / Elvis)",
      "Mental health pre-departure screening (Dr Phinda)",
      "Russian language course (8 sessions with Irina)",
      "Cultural orientation (what to expect in Russia)",
      "Contract review (legal review of your university agreement)",
      "12-month in-country mentorship (monthly check-ins)",
      "24/7 emergency support",
      "Study-to-work transition guidance (upon graduation)",
      "ECSA/HPCSA accreditation guidance (returning to SA)",
      "Priority support",
    ],
    notIncluded: [],
    cta: "Go Premium",
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: "Application Submission", t1: true, t2: true, t3: true },
  { feature: "Admission Letter", t1: true, t2: true, t3: true },
  { feature: "Visa Support", t1: false, t2: true, t3: true },
  { feature: "Pre-Departure Orientation", t1: false, t2: true, t3: true },
  {
    feature: "Russian Language",
    t1: false,
    t2: "4 sessions",
    t3: "8 sessions",
  },
  { feature: "Airport Pickup", t1: false, t2: true, t3: true },
  { feature: "In-Country Support", t1: false, t2: "30 days", t3: "12 months" },
  { feature: "Mental Health Screening", t1: false, t2: false, t3: true },
  { feature: "Contract Review", t1: false, t2: false, t3: true },
  { feature: "Career Transition", t1: false, t2: false, t3: true },
  { feature: "Emergency Support", t1: false, t2: false, t3: true },
];

const addOns = [
  {
    service: "Engineering Career Guidance (1 hour)",
    price: "R500–1,000",
    lead: "Elvis",
  },
  {
    service: "ECSA Pathway Advising (1 hour)",
    price: "R500–1,000",
    lead: "Elvis",
  },
  {
    service: "Medical Licensing Advice (1 hour)",
    price: "R800",
    lead: "Dr Siya",
  },
  {
    service: "STEM Scholarship Strategy (1 hour)",
    price: "R800",
    lead: "Mr. Katlego",
  },
  {
    service: "Mental Health Check-in (45 min)",
    price: "R700",
    lead: "Dr Phinda",
  },
  {
    service: "Contract Review (per document)",
    price: "R1,500",
    lead: "Legal Team",
  },
  {
    service: "CV Review (engineering/medical)",
    price: "R500",
    lead: "Elvis / Dr Siya",
  },
  {
    service: "Russian Language Session (1 hour)",
    price: "R400",
    lead: "Irina",
  },
  {
    service: "Cultural Orientation (group session)",
    price: "R800",
    lead: "Irina",
  },
];

const govPackages = [
  {
    students: "5–10",
    price: "R45,000",
    includes: "Full Premium package + monthly reporting to sponsor",
  },
  {
    students: "11–25",
    price: "R40,000",
    includes: "Full Premium + dedicated account manager + quarterly reviews",
  },
  {
    students: "26+",
    price: "Negotiated",
    includes: "Everything + bespoke support + on-site visits",
  },
];

const notIncluded = [
  {
    item: "University tuition fees",
    reason: "Paid directly to the university or through scholarship",
  },
  { item: "Flight tickets", reason: "You book your own travel" },
  { item: "Health insurance", reason: "Required by Russia; we can guide you" },
  { item: "Personal expenses", reason: "Pocket money, meals, entertainment" },
  { item: "Visa application fees", reason: "Paid to the Russian Embassy" },
];

const refundPolicy = [
  {
    scenario: "Student academically rejected by university",
    refund: "70% refund",
  },
  { scenario: "Student withdraws before visa stage", refund: "50% refund" },
  {
    scenario: "Student withdraws after visa processing begins",
    refund: "0% refund",
  },
  {
    scenario: "Global Certify fails to deliver agreed service",
    refund: "100% refund",
  },
];

const faqs = [
  {
    q: "Can I pay in instalments?",
    a: "Yes. We offer custom payment plans for students who need flexibility. Just ask.",
  },
  {
    q: "What if I don't get accepted?",
    a: "You get a 70% refund. We keep 30% to cover the work already done (document verification, translation, application submission).",
  },
  {
    q: "Are these fees in addition to university tuition?",
    a: "Yes. These are our service fees. Tuition is paid directly to the university (or through your scholarship). We can help you understand tuition costs — just ask.",
  },
  {
    q: "Do you offer scholarships?",
    a: "Yes. We help students apply for the Russian Government Scholarship (Quota) — at no cost to the student.",
  },
  {
    q: "What's an SLA?",
    a: "A Service Level Agreement. It's a legal document that says exactly what we will do for you, by when. You sign it before you pay. No vague promises.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4 block">
              Pricing
            </span>
            <h1 className="heading-lg text-white mb-6">
              Transparent. Fair. No Hidden Fees.
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed max-w-2xl mx-auto">
              We publish everything. Every rand. Every service. Every
              expectation. Some agencies have hidden fees. We have hidden
              nothing. Try us.
            </p>
          </div>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 mb-2 block">
              Choose Your Path
            </span>
            <h2 className="heading-md text-navy-900">
              Three Tiers. One Mission.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`card overflow-hidden ${tier.popular ? "ring-2 ring-gold-500 lg:scale-105" : ""}`}
              >
                {tier.popular && (
                  <div className="bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider text-center py-2">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-navy-500 mb-4">{tier.bestFor}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold text-navy-900">
                      {tier.price}
                    </span>
                    <span className="text-sm text-navy-500">
                      {tier.subtitle}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-navy-700">{feature}</span>
                      </div>
                    ))}
                    {tier.notIncluded.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className="flex items-start gap-3 opacity-40"
                      >
                        <X className="w-5 h-5 text-navy-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-navy-500 line-through">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full text-center ${tier.popular ? "btn-primary" : "btn-outline"} block`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>

                  <p className="text-xs text-navy-400 text-center mt-4">
                    50% deposit required. Balance due upon{" "}
                    {index === 0
                      ? "admission letter"
                      : index === 1
                        ? "visa confirmation"
                        : "departure"}
                    .
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-navy-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 mb-2 block">
              Compare
            </span>
            <h2 className="heading-md text-navy-900">
              What Makes Each Tier Different?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm border border-navy-100">
              <thead>
                <tr className="border-b border-navy-100">
                  <th className="text-left p-4 lg:p-6 text-sm font-semibold text-navy-900">
                    Feature
                  </th>
                  <th className="text-center p-4 lg:p-6 text-sm font-semibold text-navy-900">
                    Application
                  </th>
                  <th className="text-center p-4 lg:p-6 text-sm font-semibold text-navy-900 bg-gold-50/50">
                    Full Placement
                  </th>
                  <th className="text-center p-4 lg:p-6 text-sm font-semibold text-navy-900">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-navy-50 last:border-0"
                  >
                    <td className="p-4 lg:p-6 text-sm text-navy-700">
                      {row.feature}
                    </td>
                    <td className="p-4 lg:p-6 text-center">
                      {typeof row.t1 === "boolean" ? (
                        row.t1 ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-navy-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-navy-600">{row.t1}</span>
                      )}
                    </td>
                    <td className="p-4 lg:p-6 text-center bg-gold-50/30">
                      {typeof row.t2 === "boolean" ? (
                        row.t2 ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-navy-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-navy-600">{row.t2}</span>
                      )}
                    </td>
                    <td className="p-4 lg:p-6 text-center">
                      {typeof row.t3 === "boolean" ? (
                        row.t3 ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-navy-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-navy-600">{row.t3}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 mb-2 block">
              À La Carte
            </span>
            <h2 className="heading-md text-navy-900">Add-On Services</h2>
            <p className="body-lg mt-2">
              Not ready for a full package? Choose what you need.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-navy-100 shadow-sm overflow-hidden">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-5 ${index !== addOns.length - 1 ? "border-b border-navy-50" : ""}`}
                >
                  <div>
                    <p className="text-sm font-medium text-navy-900">
                      {addon.service}
                    </p>
                    <p className="text-xs text-navy-500">Lead: {addon.lead}</p>
                  </div>
                  <span className="text-sm font-bold text-gold-600 whitespace-nowrap ml-4">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's NOT Included */}
      <section className="py-16 lg:py-20 bg-navy-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-sm text-navy-900 mb-8 text-center">
              What&apos;s NOT Included{" "}
              <span className="text-navy-400 font-normal">(So You Know)</span>
            </h2>
            <div className="space-y-4">
              {notIncluded.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-navy-100"
                >
                  <X className="w-5 h-5 text-navy-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">
                      {item.item}
                    </p>
                    <p className="text-sm text-navy-500">{item.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government Packages */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 mb-2 block">
              Bulk
            </span>
            <h2 className="heading-md text-navy-900">
              Government & Corporate Packages
            </h2>
            <p className="body-lg mt-2">
              For DHET, universities, or organisations sending students in bulk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {govPackages.map((pkg, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="text-3xl font-bold text-navy-900 mb-1">
                  {pkg.students}
                </div>
                <div className="text-sm text-navy-500 mb-4">students</div>
                <div className="text-2xl font-bold text-gold-600 mb-4">
                  {pkg.price}
                </div>
                <p className="text-sm text-navy-600 leading-relaxed">
                  {pkg.includes}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-navy-500 mt-8">
            All government packages include transparent cost breakdowns. No
            hidden fees.
          </p>
        </div>
      </section>

      {/* Payment & Refund */}
      <section className="py-16 lg:py-24 bg-navy-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Payment Terms */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-gold-700" />
                </div>
                <h2 className="heading-sm text-navy-900">Payment Terms</h2>
              </div>
              <div className="bg-white rounded-2xl border border-navy-100 shadow-sm overflow-hidden">
                {[
                  {
                    label: "Deposit",
                    value: "50% upfront (secures your place in our pipeline)",
                  },
                  {
                    label: "Balance",
                    value: "50% due upon visa confirmation / before departure",
                  },
                  {
                    label: "Payment Methods",
                    value: "EFT, Card (coming soon)",
                  },
                  { label: "Receipts", value: "Provided for every payment" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 p-5 ${index !== 3 ? "border-b border-navy-50" : ""}`}
                  >
                    <span className="text-sm font-semibold text-navy-900 w-36 flex-shrink-0">
                      {item.label}
                    </span>
                    <span className="text-sm text-navy-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Refund Policy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-gold-700" />
                </div>
                <h2 className="heading-sm text-navy-900">Refund Policy</h2>
              </div>
              <div className="bg-white rounded-2xl border border-navy-100 shadow-sm overflow-hidden">
                {refundPolicy.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start justify-between p-5 ${index !== 3 ? "border-b border-navy-50" : ""}`}
                  >
                    <span className="text-sm text-navy-700 pr-4">
                      {item.scenario}
                    </span>
                    <span className="text-sm font-bold text-gold-600 whitespace-nowrap">
                      {item.refund}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-navy-500 mt-4 italic">
                We don&apos;t collect money and disappear. We collect
                accountability and stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-gold-700" />
              </div>
              <h2 className="heading-md text-navy-900">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-base font-bold text-navy-900 mb-2">
                  Q: {faq.q}
                </h3>
                <p className="text-navy-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 gradient-navy">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">Ready to Start?</h2>
            <p className="text-lg text-navy-200 leading-relaxed mb-10">
              Some agencies hand you a ticket and wave goodbye. We hand you a
              plan and stay.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Start Your Enquiry
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/scholarships"
                className="btn-outline border-navy-400 text-navy-200 hover:bg-white hover:text-navy-900 hover:border-white w-full sm:w-auto"
              >
                Explore Free Scholarships
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
