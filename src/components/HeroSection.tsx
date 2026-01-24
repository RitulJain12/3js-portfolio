import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface HeroSectionProps {
  scrollProgress: number;
}

const HeroSection = ({ scrollProgress }: HeroSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      const chars = nameRef.current.querySelectorAll('.char');
      gsap.fromTo(
        chars,
        { opacity: 0, y: 100, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: 'power4.out',
          delay: 0.5,
        }
      );
    }
  }, []);

  // Fade out on scroll
  const opacity = Math.max(0, 1 - scrollProgress * 3);
  const translateY = scrollProgress * -100;

  // Name with specific emerald characters
  const firstName = 'Ritul';
  const lastName = 'Jain';
  const emeraldIndices = { first: [0, 2], last: [0, 2] }; // R, t, J, i

  return (
    <section
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-10 flex flex-col items-center justify-center"
      style={{ opacity, transform: `translateY(${translateY}px)` }}
    >
      {/* Main name */}
      <div
        ref={nameRef}
        className="flex flex-col items-center gap-2 font-display"
        style={{ perspective: '1000px' }}
      >
        <div className="flex">
          {firstName.split('').map((char, i) => (
            <span
              key={`first-${i}`}
              className={`char text-7xl md:text-9xl lg:text-[11rem] font-medium tracking-tight ${
                emeraldIndices.first.includes(i) ? 'char-emerald' : 'text-foreground'
              }`}
              style={{ display: 'inline-block' }}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="flex">
          {lastName.split('').map((char, i) => (
            <span
              key={`last-${i}`}
              className={`char text-7xl md:text-9xl lg:text-[11rem] font-medium tracking-tight ${
                emeraldIndices.last.includes(i) ? 'char-emerald' : 'text-foreground'
              }`}
              style={{ display: 'inline-block' }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Subtitle */}
      <div className="mt-8 overflow-hidden">
        <p
          className="animate-fade-in font-body text-sm tracking-[0.5em] text-foreground/50"
          style={{ animationDelay: '1.5s' }}
        >
          CREATIVE DEVELOPER
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        style={{ opacity: Math.max(0, 1 - scrollProgress * 5) }}
      >
        <span className="font-body text-xs tracking-[0.3em] text-muted-foreground/50">
          SCROLL
        </span>
        <div className="h-12 w-[1px] overflow-hidden bg-muted/20">
          <div className="h-4 w-full animate-[float_2s_ease-in-out_infinite] bg-primary/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
