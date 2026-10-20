import { Award, Wallet, Globe, Briefcase, Gift, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";

const benefits = [
  {
    icon: Award,
    title: "A broad choice of programmes",
    description:
      "Explore programmes across disciplines, from medicine and engineering to the sciences, humanities and more.",
  },
  {
    icon: Wallet,
    title: "An international education",
    description:
      "Study in a new academic and cultural environment while building skills, connections and a global perspective.",
  },
  {
    icon: Globe,
    title: "A cultural experience",
    description:
      "Discover Russia's history, language and traditions as part of everyday student life.",
  },
  {
    icon: Briefcase,
    title: "A clear path to your goals",
    description:
      "Choose a programme with your academic interests, career plans and professional requirements in mind.",
  },
  {
    icon: Gift,
    title: "Scholarship opportunities",
    description:
      "South African students can apply for the Russian Government Quota scholarship. We guide you through eligibility, documents and application steps.",
  },
];

const faqs = [
  {
    question: "How do I choose the right programme?",
    answer:
      "Consider your interests, entry requirements, costs, language of instruction and career plans. We help you understand these factors and compare suitable options.",
  },
  {
    question: "What about degree recognition in South Africa?",
    answer:
      "Recognition depends on the qualification and your intended profession and may involve evaluation or professional registration. We help you identify the relevant requirements before you apply.",
  },
  {
    question: "How can I prepare for life in Russia?",
    answer:
      "We help you prepare with Russian language and cultural orientation, practical pre-departure guidance and in-country support after arrival.",
  },
  {
    question: "How do I plan for safety and support?",
    answer:
      "Use current official travel advice, university guidance, and local emergency contacts when planning. Our team provides practical arrival and in-country support.",
  },
];

export default function WhyRussiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Russia"
        icon={GraduationCap}
        title="Build your future through a world-class education in Russia."
        description="Explore academic programmes, experience a rich cultural heritage and gain an international perspective. We help South African students plan their studies in Russia with clear, personal guidance."
      />

      {/* Study opportunities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 mb-2 block">
              Study Opportunities
            </span>
            <h2 className="heading-md text-navy-900">
              What Studying in Russia Can Offer
            </h2>
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

      {/* Practical questions */}
      <section className="py-16 lg:py-24 bg-navy-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 mb-2 block">
              Planning Your Studies
            </span>
            <h2 className="heading-md text-navy-900">
              Questions About Studying in Russia
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
