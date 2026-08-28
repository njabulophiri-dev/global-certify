import { FileCheck, Stethoscope, Cpu, Brain, Scale, Languages, Plane, Radio } from 'lucide-react'

const supportTeam = [
  { icon: FileCheck, title: 'Academic Verification', lead: 'Mr. Katlego', description: 'Transcript evaluation, university matching, admission strategy.' },
  { icon: Stethoscope, title: 'Medical Advising', lead: 'Dr Siya', description: 'Medical school pathway planning, clinical placement guidance, HPCSA navigation.' },
  { icon: Cpu, title: 'Engineering Advising', lead: 'Elvis', description: 'ECSA pathway mapping, curriculum alignment, professional registration prep.' },
  { icon: Brain, title: 'Mental Health Screening', lead: 'Dr Phinda Dlamini', description: 'Pre-departure wellness checks, in-country counselling access, crisis support.' },
  { icon: Scale, title: 'Legal Support', lead: 'In-house Legal', description: 'Contract review, POPIA compliance, visa documentation.' },
  { icon: Languages, title: 'Russian Language', lead: 'Irina', description: 'Language prep, survival Russian, academic Russian foundations.' },
  { icon: Plane, title: 'In-Country Support', lead: 'Curly Girl', description: 'Airport pickup, migration registration, accommodation setup, 24/7 logistics.' },
  { icon: Radio, title: 'Communications', lead: 'Producer', description: 'Embassy liaison, media relations, parent updates.' },
]

export default function StudentSupportPage() {
  return (
    <>
      <section className="gradient-navy py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4 block">Student Support</span>
            <h1 className="heading-lg text-white mb-6">End-to-End Support</h1>
            <p className="text-lg text-navy-200 leading-relaxed">Some agencies help you get there. We help you succeed — from the moment you apply to the moment you graduate and return.</p>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-600 mb-2 block">Who Leads What</span>
            <h2 className="heading-md text-navy-900">Support Type & Team Lead</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportTeam.map((item, index) => (
              <div key={index} className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center flex-shrink-0"><item.icon className="w-6 h-6 text-gold-700" /></div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-navy-900">{item.title}</h3>
                    <span className="text-xs font-medium text-gold-600 bg-gold-50 px-2 py-0.5 rounded-full">{item.lead}</span>
                  </div>
                  <p className="text-sm text-navy-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-navy-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md text-navy-900 mb-6">What Makes Us Different</h2>
            <p className="text-lg text-navy-600 leading-relaxed mb-8">Because a student who succeeds is a student who tells others. And that&apos;s how we build something real.</p>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy-100 text-left">
              <p className="text-navy-800 leading-relaxed italic text-lg">&ldquo;We don&apos;t just help you get there. We help you succeed — from the moment you apply to the moment you graduate and return home. Because a student who succeeds is a student who tells others. And that&apos;s how we build something real.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
