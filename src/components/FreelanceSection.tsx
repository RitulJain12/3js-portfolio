import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { 
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
  },
  {
    title: 'Generative AI Integration',
    description: 'Incorporating AI-driven features to enhance user experiences.',
  },
  {
    title: '3D & WebGL',
    description: 'Immersive 3D experiences and interactive visualizations.',
  },
  {
    title: 'Technical Consulting',
    description: 'Technical guidance and architecture planning for your projects.',
  },
];

const FreelanceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = contentRef.current?.querySelectorAll('.freelance-item');
      if (!elements?.length) return;

      elements.forEach((item, i) => {
        gsap.set(item, { transformStyle: 'preserve-3d' });
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 100,
            rotateY: i % 2 === 0 ? -15 : 15,
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'top 40%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 min-h-screen px-6 py-32 md:px-12 lg:px-24"
    >
      <div ref={contentRef} className="mx-auto max-w-5xl" style={{ perspective: '1500px' }}>
        {/* Section header */}
        <div className="mb-16">
          <span className="font-body text-xs tracking-[0.5em] text-muted-foreground/50">
            04 — FREELANCE
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left - Statement */}
          <div className="freelance-item">
            <h2 className="font-display text-3xl font-light leading-relaxed text-foreground md:text-4xl lg:text-5xl">
              Let's build something{' '}
              <span className="hover-emerald">extraordinary</span> together.
            </h2>
            <p className="mt-8 font-body text-lg text-muted-foreground">
              {/* DUMMY CONTENT - Customize this message */}
              I'm currently available for freelance projects and collaborations. Whether you need a
              complete web presence, an immersive experience, or technical expertise for your team,
              I'm here to help turn your vision into reality.
            </p>
            <p className="mt-4 font-body text-muted-foreground">
              From early-stage startups to established enterprises, I partner with clients who value
              quality, creativity, and attention to detail.
            </p>
          </div>

          {/* Right - Services */}
          <div className="space-y-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="freelance-item group border-b border-muted/10 pb-8 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl text-foreground transition-colors duration-300 group-hover:text-foreground/80">
                      {service.title}
                    </h3>
                    <p className="mt-2 font-body text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <span className="font-body text-xs text-muted-foreground/40">0{i + 1}</span>
                </div>
              </div>
            ))} 
          </div>
        </div>

        {/* CTA */}
        <div className="freelance-item mt-24 text-center">
          <p className="font-body text-sm tracking-[0.3em] text-muted-foreground/60">
            INTERESTED IN WORKING TOGETHER?
          </p>
          <a
            href="#contact"
            className="btn-minimal mt-6 inline-block px-10 py-4 text-base"
          >
            Start a Conversation
          </a> 
        </div>
      </div>
    </section>
  );
};

export default FreelanceSection;
