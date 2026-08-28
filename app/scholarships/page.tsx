import { Check, ArrowRight, Sparkles, Banknote, Home, Utensils } from 'lucide-react'
import Link from 'next/link'

const covers = [
  { icon: Banknote, label: 'Full tuition fees' },
  { icon: Home, label: 'Accommodation stipend' },
  { icon: Utensils, label: 'Monthly living stipend' },
]

const helps = [
  'Application guidance',
  'Document verification',
  'University matching',
  'Submission support',
]

export default function ScholarshipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Fully Funded
            </div>
            <h1 className="heading-lg text-white mb-6">
              Russian Government Scholarship{' '}
              <span className="text-gold-400">(Quota)</span>
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed max-w-2xl mx-auto">
              The Russian Government offers fully-funded scholarships to international students. 
              We help South African students apply — <span className="text-gold-400 font-semibold">at no cost to the student.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* What it Covers */}
            <div>
              <h2 className="heading-sm text-navy-900 mb-8">What the Scholarship Covers</h2>
              <div className="space-y-4">
                {covers.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-5 bg-navy-50 rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-gold-100 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-gold-700" />
                    </div>
                    <span className="text-navy-800 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Help */}
            <div>
              <h2 className="heading-sm text-navy-900 mb-8">How We Help</h2>
              <div className="bg-navy-900 rounded-2xl p-8 lg:p-10 text-white">
                <div className="space-y-4 mb-8">
                  {helps.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center">
                        <Check className="w-4 h-4 text-navy-950" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-navy-700 pt-6">
                  <p className="text-gold-400 font-semibold text-lg mb-2">The catch?</p>
                  <p className="text-navy-300 text-sm leading-relaxed">
                    There isn&apos;t one. The Russian Government wants talented international students. 
                    We want to connect them with you. Some agencies charge for this because they can. 
                    We don&apos;t, because we shouldn&apos;t.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-navy-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-md text-navy-900 mb-4">
              Yes, you read that right. Free.
            </h2>
            <p className="body-lg mb-8">
              No hidden fees. No &ldquo;administration charges.&rdquo; No &ldquo;processing fees&rdquo; 
              that mysteriously appear at the last minute. Just help.
            </p>
            <Link href="/contact" className="btn-secondary">
              Apply for Scholarship Support
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
