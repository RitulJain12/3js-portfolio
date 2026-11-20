import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const [heroProgress, setHeroProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewport = window.innerHeight || 1;
      const progress = window.scrollY / viewport;
      setHeroProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // The name lives in the first screen, then clears before the next section.
  const opacity = 1 - heroProgress;

  const getCharTransform = (wordIndex: number, charIndex: number) => {
    const seed = wordIndex * 10 + charIndex;
    const randomY = Math.sin(seed * 1.5);
    const randomRotate = Math.cos(seed * 2.3);

    const wordLength = wordIndex === 0 ? firstName.length : lastName.length;
    const delayIndex = wordIndex === 0 ? wordLength - 1 - charIndex : charIndex;
    const direction = wordIndex === 0 ? 1 : -1;
    const spread = Math.min(1, Math.max(0, (heroProgress - delayIndex * 0.05) / 0.75));

    const moveX = spread * 72 * direction;
    const moveY = spread * randomY * 28;
    const rotate = spread * randomRotate * 12;
    const scale = 1 - spread * 0.2;

    return `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg) scale(${scale})`;
  };

  // Name with specific emerald characters
  const firstName = 'Ritul';
  const lastName = 'Jain';
  const emeraldIndices = { first: [0, 2], last: [0, 2] }; // R, t, J, i

  return (
    <section
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-10 flex flex-col items-center justify-center"
      style={{ opacity, visibility: heroProgress >= 1 ? 'hidden' : 'visible' }}
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
              className={`char char-assemble text-7xl md:text-9xl lg:text-[11rem] font-normal tracking-wide ${
                emeraldIndices.first.includes(i) ? 'char-emerald' : 'text-foreground'
              }`}
              style={{ display: 'inline-block', animationDelay: `${i * 0.07}s`, transform: getCharTransform(0, i) }}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="flex">
          {lastName.split('').map((char, i) => (
            <span
              key={`last-${i}`}
              className={`char char-assemble text-7xl md:text-9xl lg:text-[11rem] font-normal tracking-wide ${
                emeraldIndices.last.includes(i) ? 'char-emerald' : 'text-foreground'
              }`}
              style={{ display: 'inline-block', animationDelay: `${i * 0.07}s`, transform: getCharTransform(1, i) }}
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
          style={{ animationDelay: '0.55s', animationFillMode: 'both' }}
        >
          CREATIVE DEVELOPER
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        style={{ opacity: Math.max(0, 1 - heroProgress * 2.5) }}
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
