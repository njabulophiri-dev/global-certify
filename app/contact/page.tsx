import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <section className="gradient-navy py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4 block">
              Contact
            </span>
            <h1 className="heading-lg text-white mb-6">Get in Touch</h1>
            <p className="text-lg text-navy-200 leading-relaxed">
              Ready to start your Russia journey? Or just curious? Either way, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <div className="card p-8 lg:p-10">
                <h2 className="heading-sm text-navy-900 mb-6">Send us a message</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1.5">Full Name</label>
                      <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1.5">Email</label>
                      <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1.5">Phone (WhatsApp)</label>
                      <input type="tel" placeholder="+27 XX XXX XXXX" className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1.5">I am a</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white">
                        <option>Student</option><option>Parent</option><option>School Representative</option>
                        <option>University Partner</option><option>Government</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">How did you hear about us?</label>
                    <input type="text" placeholder="Friend, social media, school, etc." className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">Message</label>
                    <textarea rows={4} placeholder="Tell us about your goals, questions, or concerns..." className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none" />
                  </div>
                  <button type="submit" className="btn-secondary w-full">
                    <Send className="w-4 h-4 mr-2" />Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center mb-4"><MessageCircle className="w-5 h-5 text-gold-700" /></div>
                <h3 className="text-base font-bold text-navy-900 mb-1">WhatsApp Business</h3>
                <p className="text-sm text-navy-600 mb-3">Fastest response for urgent queries</p>
                <a href="#" className="inline-flex items-center px-4 py-2 rounded-lg border border-navy-200 text-sm font-medium text-navy-700 hover:bg-navy-50 transition-colors">Chat on WhatsApp</a>
              </div>
              <div className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center mb-4"><Mail className="w-5 h-5 text-gold-700" /></div>
                <h3 className="text-base font-bold text-navy-900 mb-1">Email Support</h3>
                <p className="text-sm text-navy-600">info@globalcertify.com</p>
              </div>
              <div className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center mb-4"><Clock className="w-5 h-5 text-gold-700" /></div>
                <h3 className="text-base font-bold text-navy-900 mb-1">Operating Hours</h3>
                <p className="text-sm text-navy-600">Monday – Friday: 8:00 AM – 6:00 PM SAST</p>
                <p className="text-sm text-navy-600">Saturday: 9:00 AM – 1:00 PM SAST</p>
              </div>
              <div className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center mb-4"><MapPin className="w-5 h-5 text-gold-700" /></div>
                <h3 className="text-base font-bold text-navy-900 mb-1">Location</h3>
                <p className="text-sm text-navy-600">Johannesburg, South Africa</p>
                <p className="text-sm text-navy-500">Serving clients worldwide</p>
              </div>
              <div className="bg-navy-900 rounded-2xl p-6 text-white">
                <p className="text-sm text-navy-300 mb-2">Prefer to talk to someone who&apos;s been there?</p>
                <p className="text-sm font-medium">WhatsApp us — you&apos;ll reach a team member, not a chatbot trained to say &ldquo;please hold.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
