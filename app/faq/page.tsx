const faqs = [
  { question: 'How long does the application process take?', answer: 'Typically 3–6 months from initial consultation to admission letter. Scholarship (Quota) applications have specific deadlines set by the Russian Government, usually closing in January for September intake. We keep you on track so nothing slips through the cracks.' },
  { question: 'Is my degree recognised in South Africa?', answer: 'Yes — with proper planning. Medical graduates need HPCSA registration. Engineering graduates need ECSA evaluation. We guide you through this process from day one, not as an afterthought. Recognition is a strategy, not a surprise.' },
  { question: 'Do I need to speak Russian before I go?', answer: 'Not necessarily. Many programs offer preparatory Russian language courses. We provide pre-departure language support and connect you with resources to hit the ground running. Survival Russian is enough to start; academic Russian comes with time.' },
  { question: 'What if I struggle academically or personally?', answer: "That's exactly why we have Dr Phinda Dlamini leading Student Wellness and Curly Girl handling in-country logistics. We check in regularly, provide mental health support, and intervene before small issues become big problems. We're not ghosting you after arrival." },
  { question: 'Are there really no hidden fees?', answer: 'Really. Our scholarship guidance is completely free. For full-service packages, we publish every cost upfront. The only surprise we believe in is how smooth the process can actually be when done right.' },
  { question: 'Can parents be involved in the process?', answer: "Absolutely. We encourage it. We provide regular updates, clear timelines, and direct contact channels. Parents often have the best questions — and we have the answers. You're not handing your child to strangers; you're partnering with people who've walked the same path." },
]

export default function FAQPage() {
  return (
    <>
      <section className="gradient-navy py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4 block">FAQ</span>
            <h1 className="heading-lg text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-navy-200 leading-relaxed">The questions we actually get — answered honestly.</p>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-lg font-bold text-navy-900 mb-3">{faq.question}</h3>
                <p className="text-navy-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
