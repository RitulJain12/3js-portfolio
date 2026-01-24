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
          <span className="char-emerald">Welcome</span> to my portfolio, where I showcase projects that blur the line
            between art and technology.
          </h2>

          <p className="about-text font-body text-lg leading-relaxed text-foreground/70 md:text-xl">
            {/* DUMMY CONTENT - Replace with your actual bio */}
            A creative full-stack developer based in Bhopal, specializing in MERN stack applications, generative AI integrations, and immersive, interactive web experiences. Currently in my pre-final year, I combine strong engineering fundamentals with modern AI-driven workflows to build scalable, high-impact digital products.
          </p>

          <p className="about-text font-body text-lg leading-relaxed text-foreground/70 md:text-xl">
            {/* DUMMY CONTENT - Replace with your actual experience */}
            With a deep interest in 3D interactions, experimental interfaces, and intelligent systems, I focus on turning complex ideas into clean, performant, and engaging user experiences.
          </p>

          {/* Stats */}
          <div className="about-text grid grid-cols-2 gap-8 pt-12 md:grid-cols-4">
            {[
              { value: '1+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Completed' },
              { value: '10+', label: 'Happy Clients' },
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
