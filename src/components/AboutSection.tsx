import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && sectionRef.current) {
      const elements = contentRef.current.querySelectorAll('.about-text');

      gsap.fromTo(
        elements,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'center center',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 min-h-screen px-6 py-32 md:px-12 lg:px-24"
      style={{ marginTop: '100vh' }}
    >
      <div 
        ref={contentRef} 
        className="mx-auto max-w-4xl"
      >
        {/* Section label */}
        <div className="about-text mb-16">
          <span className="font-body text-xs tracking-[0.5em] text-muted-foreground/50">
            01 — ABOUT
          </span>
        </div>

        {/* Main about text */}
        <div className="space-y-12">
          <h2 className="about-text font-display text-4xl font-medium leading-relaxed text-foreground md:text-5xl lg:text-6xl">
            I craft <span className="char-emerald">digital experiences</span> that blur the line
            between art and technology.
          </h2>

          <p className="about-text font-body text-lg leading-relaxed text-foreground/70 md:text-xl">
            {/* DUMMY CONTENT - Replace with your actual bio */}
            A creative developer based in [Your City], specializing in immersive web experiences,
            3D interactions, and experimental interfaces. With a background in both design and
            engineering, I bring a unique perspective to every project.
          </p>

          <p className="about-text font-body text-lg leading-relaxed text-foreground/70 md:text-xl">
            {/* DUMMY CONTENT - Replace with your actual experience */}
            Over the past [X] years, I've had the privilege of working with startups, agencies,
            and established brands to create memorable digital products that push creative
            boundaries while maintaining exceptional user experience.
          </p>

          {/* Stats */}
          <div className="about-text grid grid-cols-2 gap-8 pt-12 md:grid-cols-4">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
              { value: '∞', label: 'Cups of Coffee' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="font-display text-3xl font-medium text-foreground md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 font-body text-xs tracking-[0.2em] text-foreground/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
