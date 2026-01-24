import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// DUMMY PROJECTS - Replace with your actual projects
const projects = [
    {
      id: 1,
      title: 'Astra Ai',
      description: 'Astraa AI is a smart, retrieval-augmented AI system designed to deliver accurate, context-aware, and reliable responses by combining the power of LangChain, RAG (Retrieval-Augmented Generation), and a Vector Database.',
      image: 'https://ik.imagekit.io/rituls12/Screenshot%202026-01-24%20185609.png',
      tags: ['React', 'Node', 'Langchain','Express','Langgraph','Langsmith'],
      year: '2024'
    },
    {
      id: 2,
      title: 'NeatCode',
      description: 'NeatCode is a scalable LeetCode-style coding platform enhanced with AI assistance, designed to help developers practice DSA, solve problems efficiently, and get intelligent guidance, hints, and explanations in real time all in a fast, production ready environment.',
      image: 'https://ik.imagekit.io/rituls12/Screenshot%202026-01-24%20190655.png',
      tags: ['React', 'Node', 'Langchain','Express','Mongodb','judge 0'],
      year: '2024'
    },
    {
      id: 3,
      title: 'Unir',
      description: 'Unir is a scalable LinkedIn-style professional networking application enhanced with AI-driven features that help users grow their careers smarter and faster. It enables professionals to connect, share posts, showcase skills, and leverage AI to improve visibility, resumes, and engagement.',
      image: 'https://ik.imagekit.io/rituls12/Screenshot%202026-01-24%20191000.png',
      tags: ['React', 'Node', 'Langchain','Express','Mongodb', 'Langgraph','Spring','webRtc','socket'],
      year: '2026'
    },
    {
      id: 4,
      title: 'OnCart',
      description: 'OnCart is a scalable e-commerce application built on a microservices architecture, enhanced with AI-driven semantic product search. Instead of traditional keyword-based search, OnCart understands user intent and product meaning, delivering faster and more relevant shopping results.',
      image: 'https://ik.imagekit.io/rituls12/Screenshot%202026-01-24%20191552.png',
      tags: ['React', 'Node', 'Langchain','Express','Mongodb', 'Langgraph','socket'],
      year: '2025'
    }
  ];







const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const projectCards = sectionRef.current.querySelectorAll('.project-card');

      projectCards.forEach((card, i) => {
        gsap.fromTo(
          card,
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
              trigger: card,
              start: 'top 80%',
              end: 'top 40%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 min-h-screen px-6 py-32 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-24">
          <span className="font-body text-xs tracking-[0.5em] text-muted-foreground/50">
            03 — WORK
          </span>
          <h2 className="mt-4 font-display text-4xl font-light text-foreground md:text-5xl lg:text-6xl">
            Selected Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div className="space-y-32" style={{ perspective: '1500px' }}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="project-card group relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className={`flex flex-col gap-8 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div className="relative flex-1 overflow-hidden rounded-sm">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/20" />
                  </div>
                </div> 

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center lg:px-12">
                  <span className="font-body text-xs tracking-[0.3em] text-muted-foreground/50">
                    {project.year}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-light text-foreground transition-colors duration-300 group-hover:text-foreground md:text-3xl lg:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 font-body text-muted-foreground">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-muted/30 px-3 py-1 font-body text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="btn-minimal mt-8 self-start">View Project</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
