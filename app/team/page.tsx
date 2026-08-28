import {
  GraduationCap,
  Stethoscope,
  Cpu,
  Brain,
  Radio,
  Plane,
  Scale,
  Languages,
} from "lucide-react";

const team = [
  {
    name: "Njabulo Phiri",
    role: "Managing Director",
    icon: GraduationCap,
    description:
      "A speaker, strategic leader, and youth transformation advocate; a featured presenter on IT and digitalisation at the World Youth Festival 2026 in Yekaterinburg. He builds bridges — between nations, systems, and ambitious young people.",
    color: "bg-gold-100 text-gold-700",
  },
  {
    name: "Neo Kgotlagomang",
    role: "Head of Diplomatic Relations & Government Lead",
    icon: Scale,
    description:
      "Master's in International Relations (Russia). Embassy relations, DHET negotiations, government contracts. Neo knows which doors to knock on — and more importantly, how to open them.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Katlego Sebopela",
    role: "Head of STEM & Scholarships + Academic Policy Advisor",
    icon: Cpu,
    description:
      "Physics lecturer (TUT). Russia-trained. Academic verification, scholarship support, university partnerships. He speaks the language of both academics and administrators.",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Dr Siya Mahlangu",
    role: "Head of Medical Stream & Lead Presenter",
    icon: Stethoscope,
    description: `Medical Doctor (Russia). Medical advising, clinical placement, HPCSA guidance, lead presenter. If you're pursuing medicine in Russia, Siya has already walked every corridor you'll walk.`,
    color: "bg-red-100 text-red-700",
  },
  {
    name: "Elvis Xavier",
    role: "Head of Engineering Pathways",
    icon: Cpu,
    description: `Electrical Engineer (Russia). Career guidance, ECSA pathway advising, school outreach. From circuit theory to professional registration — he's mapped the route.`,
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Dr Phinda Dlamini",
    role: "Head of Student Wellness",
    icon: Brain,
    description:
      "Clinical Psychologist (Russia). President of the Eswatini Psychology Association. Mental health screening, in-country check-ins, crisis support. Because thriving academically starts with being well personally.",
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "Ionna Panferova",
    role: "Head of Strategic Communications & Media Relations",
    icon: Radio,
    description:
      "Former RT Producer, BRICS TV Senior Reporter. Communications strategy, media relations, embassy liaison. The voice that ensures your story — and ours — is told accurately.",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "Curly Girl",
    role: "Student Support & Logistics Coordinator",
    icon: Plane,
    description: `RUDN Graduate. Airport pickups, migration registration, in-country logistics. The first friendly face you'll see when you land — and the person who makes sure your paperwork doesn't become a paperweight.`,
    color: "bg-teal-100 text-teal-700",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4 block">
              Our Team
            </span>
            <h1 className="heading-lg text-white mb-6">
              Meet the people who&apos;ve actually done this.
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed">
              Every member of our team has walked the path you&apos;re about to
              take. We don&apos;t just advise — we remember.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="card p-8 group hover:border-gold-200 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-14 h-14 rounded-xl ${member.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <member.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-gold-600 mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-navy-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
