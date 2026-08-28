import {
  Award,
  Wallet,
  Globe,
  Briefcase,
  Gift,
  ThermometerSnowflake,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "World-Class Education",
    description:
      "Russian universities are globally recognised. This isn't a backup plan — it's a power move.",
  },
  {
    icon: Wallet,
    title: "Affordable Tuition",
    description:
      "Competitive fees and scholarships available. Quality education without the debt avalanche.",
  },
  {
    icon: Globe,
    title: "Cultural Experience",
    description:
      "Rich history, diverse culture, global network. You'll return with a degree and a worldview.",
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    description:
      "Russian qualifications are respected worldwide. From Moscow to Midrand, your credentials travel.",
  },
  {
    icon: Gift,
    title: "Government Scholarships",
    description:
      "Russian Quota covers tuition + stipends. Yes, the Russian government will pay you to study. Let that sink in.",
  },
];

const faqs = [
  {
    question: `"But isn't it cold?"`,
    answer:
      "Yes. The winters are cold. The education is world-class. The scholarships are fully funded. Pack a jacket, not an excuse.",
  },
  {
    question: '"Will my degree be recognised back home?"',
    answer:
      'Only if you plan it properly — which is exactly what we help you do. (Unlike some agencies who treat "recognition" like a surprise party.)',
  },
  {
    question: '"Is it safe?"',
    answer:
      "Russia hosts over 300,000 international students annually. We were among them. We survived. We thrived. We graduated. And now we help others do the same.",
  },
];

export default function WhyRussiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4 block">
              Why Russia
            </span>
            <h1 className="heading-lg text-white mb-6">
              World-class education.{" "}
              <span className="text-gold-400">
                Without the world-class debt.
              </span>
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed max-w-2xl">
              Russia isn&apos;t just a destination — it&apos;s a strategic
              choice for ambitious South African students who want quality
              without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 mb-2 block">
              Benefits
            </span>
            <h2 className="heading-md text-navy-900">Why Study in Russia?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-8 group">
                <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center mb-5 group-hover:bg-gold-200 transition-colors">
                  <benefit.icon className="w-6 h-6 text-gold-700" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Addressing Skepticism */}
      <section className="py-16 lg:py-24 bg-navy-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 mb-2 block">
              Real Talk
            </span>
            <h2 className="heading-md text-navy-900">
              Addressing the Skepticism
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-navy-100"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-navy-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
