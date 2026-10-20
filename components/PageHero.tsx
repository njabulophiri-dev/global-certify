import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Globe2, MapPin, Plane, Sparkles } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  icon?: LucideIcon;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  icon: Icon = Globe2,
}: PageHeroProps) {
  return (
    <section className="site-hero">
      <div className="site-hero-grid" />
      <div className="site-hero-watermark motion-pulse" aria-hidden="true">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-ink-900/50">
          <Icon className="h-10 w-10" strokeWidth={1.5} />
        </div>
      </div>
      <div className="container-custom grid items-center gap-8 py-14 sm:py-16 lg:min-h-[380px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-16">
        <div className="relative z-10 max-w-3xl motion-enter">
          <span className="site-hero-kicker">
            <Sparkles className="h-4 w-4 text-coral-300" />
            {eyebrow}
          </span>
          <h1 className="site-hero-title">{title}</h1>
          <div className="site-hero-copy">{description}</div>
        </div>

        <div className="site-hero-art motion-enter motion-delay-200" aria-hidden="true">
          <div className="site-hero-orbit motion-pulse" />
          <div className="site-hero-orbit-inner motion-pulse motion-delay-300" />
          <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/10 bg-ink-900 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-4 rounded-full border border-white/10" />
            <div className="site-hero-emblem">
              <Icon className="h-16 w-16" strokeWidth={1.5} />
            </div>
            <span className="absolute -right-3 top-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-400 text-ink-950 shadow-lg motion-float">
              <Plane className="h-6 w-6 -rotate-12" />
            </span>
            <span className="absolute -bottom-2 left-7 flex h-11 w-11 items-center justify-center rounded-full bg-white text-coral-600 shadow-lg motion-float motion-delay-300">
              <Sparkles className="h-5 w-5" />
            </span>
          </div>

          <div className="site-hero-tag left-0 top-[22%] motion-float">
            <span className="site-hero-tag-label">
              <MapPin className="h-3.5 w-3.5" />
              Starting point
            </span>
            <p className="site-hero-tag-value">South Africa</p>
          </div>

          <div className="site-hero-tag bottom-[17%] right-0 motion-float motion-delay-200">
            <span className="site-hero-tag-label">
              <ArrowRight className="h-3.5 w-3.5" />
              Next chapter
            </span>
            <p className="site-hero-tag-value">Russia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
