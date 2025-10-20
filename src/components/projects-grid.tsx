"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";

type Project = {
  title: string;
  href?: string;
  dates?: string;
  active?: boolean;
  description: string;
  technologies: string[];
  links?: { type: string; href: string; icon: React.ReactNode }[];
  image?: string;
};

export function ProjectsGrid({
  projects,
  title = "Projects",
  subtitle,
  initialCount = 4,
  step = 4,
  blurDelay = 0.04,
}: {
  projects: Project[];
  title?: string;
  subtitle?: React.ReactNode;
  initialCount?: number;
  step?: number;
  blurDelay?: number;
}) {
  const [visibleCount, setVisibleCount] = useState(
    Math.min(initialCount, projects.length)
  );

  // Section-level inView: sebelum terlihat, JANGAN render grid/card sama sekali
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sectionInView = useInView(sectionRef, {
    once: true,
    amount: 0.2, // 20% section masuk viewport baru render
  });

  const showMore = () => {
    setVisibleCount((c) => Math.min(c + step, projects.length));
  };

  const showLess = () => {
    setVisibleCount(initialCount);
    // scroll balik ke awal section agar rapi
    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const hasMore = visibleCount < projects.length;

  return (
    <section id="projects" ref={sectionRef} className="w-full">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={blurDelay * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {title}
              </h2>
              {subtitle ? (
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>
        </BlurFade>

        {/* Hanya render GRID & tombol saat section sudah in-view */}
        <AnimatePresence>
          {sectionInView && (
            <motion.div
              key="projects-grid"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                {projects.slice(0, visibleCount).map((project, idx) => (
                  <RevealCard key={project.title + idx} index={idx}>
                    <ProjectCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      links={project.links}
                    />
                  </RevealCard>
                ))}
              </div>

              <div className="flex justify-center">
                {hasMore ? (
                  <Button onClick={showMore}>Show more</Button>
                ) : projects.length > initialCount ? (
                  <Button variant="outline" onClick={showLess}>
                    Show less
                  </Button>
                ) : null}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/** Reveal per-card saat card masuk viewport */
function RevealCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    margin: "0px 0px -10% 0px",
    once: true,
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.04 }}
    >
      {children}
    </motion.div>
  );
}
