import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { DATA } from "@/data/resume";
import { Notebook } from "lucide-react";
import Markdown from "react-markdown";
import { ProjectsGrid } from "@/components/projects-grid";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <TracingBeam className="px-6">
      <main className="flex items-center justify-center flex-col min-h-[100dvh] space-y-10">
        {/* Hero Section */}
        <section id="hero" className="w-full max-w-3xl space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col space-y-2 text-center sm:text-left">
              <h1>
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                />
              </h1>
              <BlurFadeText
                className="max-w-[600px] md:text-xl text-muted-foreground"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border hover:shadow-lg hover:shadow-foreground/20 transition-all duration-300 ease-in-out">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full max-w-3xl space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
            <div className="flex items-center justify-end mt-4">
              <a
                href="/cv-rafi-imanullah.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="outline">
                  Download Resume
                  <Notebook className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </BlurFade>
        </section>

        {/* Work Experience */}
        <section id="work" className="w-full max-w-3xl space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <div className="flex flex-col gap-3">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                  links={work.links}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="w-full max-w-3xl space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-3">
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="w-full max-w-3xl space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap justify-start gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <Badge className="hover:cursor-default transition-all duration-300 ease-in-out">
                  <span className="mr-2">{skill.icon}</span>
                  {skill.name}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Projects: awalnya 4, "Show more" bertahap, reveal saat discroll */}
        <ProjectsGrid
          projects={DATA.projects as any}
          title="Projects"
          subtitle={
            <>
              I like to build projects. I have built a lot of projects, here are
              just some of my <span className="font-bold">favorites</span>.
            </>
          }
          initialCount={4}
          step={4}
          blurDelay={BLUR_FADE_DELAY}
        />

        {/* Contact */}
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground text-sm/relaxed md:text-base/relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions. Feel free to reach
                  out through{" "}
                  <a
                    href={DATA.contact.social.Instagram.url}
                    className="text-foreground hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>{" "}
                  or{" "}
                  <a
                    href={DATA.contact.social.LinkedIn.url}
                    className="text-foreground hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </TracingBeam>
  );
}
