import {
  GraduationCap,
  Stethoscope,
  Cpu,
  Radio,
  Scale,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const team = [
  {
    id: "njabulo-phiri",
    name: "Njabulo Phiri",
    role: "Managing Director",
    icon: GraduationCap,
    description:
      "Njabulo is a bilingual (English/Russian) software engineer, strategic leader and youth transformation advocate. As a delegate on IT and Digitalisation at the World Youth Festival 2026 in Yekaterinburg(Russia), he is dedicated to building bridges between nations, between complex systems and between ambitious young people and global opportunities.\n\nHaving spent 6.5 years studying Computer Science in Russia, Njabulo brings a unique, cross-cultural perspective to the tech industry. He is the founder of Zorya Studio, a media and tech agency and has personally mentored and spoken to over 2,000 school learners across South Africa. Through Global Certify, his mission is to equip the next generation with the technical skills, international networks and mindset required to lead in the digital age.",
    color: "bg-gold-100 text-gold-700",
  },
  {
    id: "seipone-mohale",
    name: "Seipone Mohale",
    role: "Chief Operating Officer (COO)",
    icon: Users,
    description:
      "Mechatronics and Robotics Engineering (Russia), with experience in engineering project management. Focus on strategic operations, organisational development, process optimisation and cross-functional coordination. Bridging technical expertise with strategic leadership to drive operational excellence and sustainable organisational growth.",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "mxolisi-nomdletshe",
    name: "Mxolisi Nomdletshe",
    role: "Institutional Coordinator (Learning and Development)",
    icon: GraduationCap,
    description:
      "Master of Arts (MA) degree in Political Studies at Nelson Mandela University and is currently pursuing a PhD in International Relations at the University of Pretoria. His research interests are in Strategic Studies, with a particular focus on conflict resolution, international security and South Africa’s foreign policy. He also takes a great interest in driving global knowledge exchange through internationalisation of higher education.",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "neo-kgotlagomang",
    name: "Neo Kgotlagomang",
    role: "Head of Diplomatic Relations & Government Lead",
    icon: Scale,
    description:
      "Master's in International Relations (Russia). Embassy relations, government negotiations and contracts. Neo knows which doors to knock on and more importantly, how to open them.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "katlego-sebopela",
    name: "Katlego Sebopela",
    role: "Head of STEM & Scholarships + Academic Policy Advisor",
    icon: Cpu,
    description:
      "A Nuclear Physics lecturer at TUT, with postgraduate training in both Nuclear Physics and Nuclear Engineering, including academic experience in Russia. Katlego combines technical expertise with an understanding of international higher education. Passionate about nuclear education and expanding access to STEM opportunities, he is committed to connecting young South Africans with world-class international education and helping develop the next generation of scientists, engineers and innovators. He bridges the gap between South African talent and global opportunity.",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "dr-siya-mahlangu",
    name: "Dr Siya Mahlangu",
    role: "Head of Medical Stream & Lead Presenter",
    icon: Stethoscope,
    description: `Medical Doctor (Russia). Medical advising, clinical placement, HPCSA guidance, lead presenter. A Phenomal Writer and Award Winning Author.
    If you're pursuing medicine in Russia, Dr Siya has already walked every corridor you'll walk.`,
    color: "bg-red-100 text-red-700",
  },
  {
    id: "elvis-xavier",
    name: "Elvis Xavier",
    role: "Head of Engineering Pathways",
    icon: Cpu,
    description: `lectrical engineering professional with international education (Russia) and South African industry experience. Focused on engineering career development, ECSA pathways and nurturing future engineering talent.`,
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "yana-panferova",
    name: "Yana Panferova",
    role: "Head of Strategic Communications & Media Relations",
    icon: Radio,
    description:
      "Yana holds degrees in Media from Southern Federal University (SFedU) and the Higher School of Economics (HSE). She has built a robust career as a correspondent and TV presenter for major networks including Vmeste RF, Russia 24 and TV BRICS. She currently serves as a producer at RT International and is a distinguished member of the Union of Journalists of Russia. Yana brings world-class expertise in global broadcasting, international relations and cross-cultural media to the Global Certify team.",
    color: "bg-indigo-100 text-indigo-700",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        icon={Users}
        title="Meet the people who've actually done this."
        description="Every member of our team has walked the path you're about to take. We don't just advise — we remember."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {team.map((member) => (
              <div
                key={member.id}
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
                    {member.description && (
                      <p className="text-sm text-navy-600 leading-relaxed">
                        {member.description}
                      </p>
                    )}
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
