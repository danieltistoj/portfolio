import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";

import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

type SkillGroup = {
  title: string;
  items: string[];
};

type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  project: string;
  period: string;
  location: string;
  stack: string;
  bullets: string[];
};

type Education = {
  degree: string;
  institution: string;
  period: string;
  status: string;
};

type LanguageItem = {
  label: string;
  level: string;
};

type ProjectItem = {
  title: string;
  description: string;
  highlights: string[];
  frontend: string;
  production: string;
  backend: string;
  stack: string;
  features: string[];
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const cvNote = t("cv.note");
  const skills = t.raw("skills.groups") as SkillGroup[];
  const projects = t.raw("projects.items") as ProjectItem[];
  const experiences = t.raw("experience.items") as ExperienceItem[];
  const education = t.raw("experience.education") as Education;
  const languageItems = t.raw("experience.languages.items") as LanguageItem[];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-16">
        <header className="flex flex-col gap-10">
          <nav className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
            <div className="flex flex-wrap items-center gap-4">
              <a className="transition hover:text-white" href="#about">
                {t("sections.about")}
              </a>
              <a className="transition hover:text-white" href="#skills">
                {t("sections.skills")}
              </a>
              <a className="transition hover:text-white" href="#projects">
                {t("sections.projects")}
              </a>
              <a className="transition hover:text-white" href="#experience">
                {t("sections.experience")}
              </a>
              <a className="transition hover:text-white" href="#github-stats">
                {t("sections.githubStats")}
              </a>
              <a className="transition hover:text-white" href="#contact">
                {t("sections.contact")}
              </a>
            </div>
            <LanguageSwitcher />
          </nav>

          <div className="flex items-start justify-between gap-6">
            <div className="space-y-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <div className="h-40 w-40 overflow-hidden rounded-3xl border border-white/15 bg-white/5">
                <Image
                  src="/images/image-profile.png"
                  alt={t("hero.profilePlaceholder")}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  {t("hero.role")}
                </p>
                <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {t("hero.name")}
                </h1>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <MapPin className="h-4 w-4" />
                  <span>{t("hero.location")}</span>
                </div>
              </div>
            </div>
            <p className="max-w-2xl text-lg text-white/70">
              {t("hero.summary")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="mailto:josetisrey@gmail.com">
                  <Mail className="h-4 w-4" />
                  {t("links.email")}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://github.com/danieltistoj"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" />
                  {t("links.github")}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://www.linkedin.com/in/danieltistoj-developer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  {t("links.linkedin")}
                </a>
              </Button>
            </div>
            </div>
            <div className="hidden md:block" />
          </div>
        </header>

        <section id="about" className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">
              {t("sections.about")}
            </h2>
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-white/70">
            {t("about.body")}
          </p>
        </section>

        <section id="skills" className="space-y-8">
          <h2 className="text-2xl font-semibold">{t("sections.skills")}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-sm text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <h2 className="text-2xl font-semibold">{t("sections.projects")}</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-white/70">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Button asChild size="sm">
                    <a
                      href={project.production}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("projects.links.production")}
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("projects.links.frontend")}
                    </a>
                  </Button>
                  <span className="text-sm text-white/40">
                    {project.backend}
                  </span>
                </div>
                <p className="mt-4 text-sm text-white/70">{project.stack}</p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-semibold text-white/80">
                    {t("projects.sections.highlights")}
                  </h4>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-white/70">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-semibold text-white/80">
                    {t("projects.sections.features")}
                  </h4>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-white/70">
                    {project.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-8">
          <h2 className="text-2xl font-semibold">
            {t("sections.experience")}
          </h2>
          <div className="space-y-6">
            {experiences.map((item) => (
              <article
                key={`${item.company}-${item.project}`}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                    {item.role}
                  </p>
                  <h3 className="text-lg font-semibold">
                    {item.company} — {item.project}
                  </h3>
                  <p className="text-sm text-white/60">{item.period}</p>
                  <p className="text-sm text-white/60">{item.location}</p>
                </div>
                {item.companyUrl ? (
                  <div className="mt-4">
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("experience.companyLink")}
                      </a>
                    </Button>
                  </div>
                ) : null}
                <p className="mt-4 text-sm text-white/70">{item.stack}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">
                {t("experience.education.title")}
              </h3>
              <div className="mt-4 space-y-2 text-sm text-white/70">
                <p>{education.degree}</p>
                <p>{education.institution}</p>
                <p>{education.period}</p>
                <p>{education.status}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">
                {t("experience.languages.title")}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {languageItems.map((lang) => (
                  <li key={lang.label}>
                    {lang.label} — {lang.level}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="github-stats" className="space-y-8">
          <h2 className="text-2xl font-semibold">{t("sections.githubStats")}</h2>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
            <img
              src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=danieltistoj&theme=dark&hide_border=true"
              alt="GitHub repos per language"
              className="w-full max-w-md"
            />
            <img
              src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=danieltistoj&theme=dark&hide_border=true"
              alt="GitHub most commit language"
              className="w-full max-w-md"
            />
          </div>
        </section>

        <section id="contact" className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">
                {t("contactForm.title")}
              </h3>
              <p className="text-sm text-white/60">
                {t("contactForm.subtitle")}
              </p>
            </div>
            <form
              className="space-y-4"
              action="https://formspree.io/f/xbjevgbe"
              method="POST"
            >
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="fullName">
                  {t("contactForm.fields.name")}
                </label>
                <Input
                  id="fullName"
                  name="name"
                  placeholder={t("contactForm.placeholders.name")}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="email">
                  {t("contactForm.fields.email")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("contactForm.placeholders.email")}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="phone">
                  {t("contactForm.fields.phone")}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t("contactForm.placeholders.phone")}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="message">
                  {t("contactForm.fields.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("contactForm.placeholders.message")}
                  required
                />
              </div>
              <Button type="submit">{t("contactForm.actions.submit")}</Button>
            </form>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">
                {t("sections.downloadCv")}
              </h3>
              <p className="text-sm text-white/60">{t("cv.description")}</p>
            </div>
            <Button asChild>
              <Link href="/cv/jose-daniel-tistoj-reyes-cv.pdf" download>
                <Download className="h-4 w-4" />
                {t("cv.action")}
              </Link>
            </Button>
            {cvNote ? (
              <p className="text-xs text-white/40">{cvNote}</p>
            ) : null}
          </div>
        </section>
      </main>
    </div>
  );
}
