import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RESUME_URL = 'https://ik.imagekit.io/rituls12/op%20(2).pdf';
const RESUME_PREVIEW = 'https://ik.imagekit.io/rituls12/op%20(2).pdf/ik-thumbnail.jpg';

const ResumeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const documentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!documentRef.current) return;

      gsap.fromTo(
        documentRef.current,
        { opacity: 0, y: 56 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleDownload = () => {
    window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-20 flex min-h-screen items-center justify-center px-6 py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Section label */}
        <span className="font-body text-xs tracking-[0.5em] text-muted-foreground/50">
          05 — RESUME
        </span>

        {/* Document visualization */}
        <div
          ref={documentRef}
          className="group mx-auto mt-16 cursor-pointer"
          style={{ perspective: '1000px' }}
          onClick={handleDownload}
        >
          {/* Paper effect */}
          <div className="relative mx-auto h-[400px] w-[280px] overflow-hidden rounded-sm border border-muted/20 bg-white transition-all duration-500 group-hover:border-muted/40 group-hover:shadow-[0_0_60px_rgba(255,255,255,0.05)] md:h-[500px] md:w-[350px]">
            <img
              src={RESUME_PREVIEW}
              alt="Ritul Jain resume"
              className="absolute inset-0 h-full w-full object-contain object-top"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-display text-lg tracking-wider text-foreground">
                View Resume
              </span>
            </div>
          </div>

          {/* Shadow */}
          <div className="mx-auto mt-4 h-4 w-[200px] rounded-full bg-primary/10 blur-xl transition-all duration-500 group-hover:bg-primary/20 md:w-[250px]" />
        </div>

        {/* Download button */}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-minimal mt-12 inline-flex items-center gap-3 px-8"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Resume
        </a>

        <p className="mt-6 font-body text-xs text-muted-foreground/50">
          PDF Format
        </p>
      </div>
    </section>
  );
};

export default ResumeSection;
