import { getTranslations } from "next-intl/server";

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

const navLinkClass =
  "text-xs font-bold uppercase tracking-[0.08em] text-[#1a1a1a] no-underline hover:underline";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const skills = t.raw("skills.groups") as SkillGroup[];
  const projects = t.raw("projects.items") as ProjectItem[];
  const experiences = t.raw("experience.items") as ExperienceItem[];
  const education = t.raw("experience.education") as Education;
  const languageItems = t.raw("experience.languages.items") as LanguageItem[];

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <main className="mx-auto flex w-full max-w-3xl flex-col px-6 py-14">
        {/* Nav */}
        <nav className="flex flex-wrap items-center justify-center gap-5 pb-10">
          <a href="#about" className={navLinkClass}>
            {t("sections.about")}
          </a>
          <a href="#skills" className={navLinkClass}>
            {t("sections.skills")}
          </a>
          <a href="#projects" className={navLinkClass}>
            {t("sections.projects")}
          </a>
          <a href="#experience" className={navLinkClass}>
            {t("sections.experience")}
          </a>
          <a href="#github-stats" className={navLinkClass}>
            {t("sections.githubStats")}
          </a>
          <a href="#contact" className={navLinkClass}>
            {t("sections.contact")}
          </a>
          <span className="h-4 w-px bg-[#d9d9d9]" />
          <LanguageSwitcher />
        </nav>

        {/* Header */}
        <header className="pb-2">
          <h1 className="text-4xl font-bold tracking-tight">
            {t("hero.name")}
          </h1>
          <p className="mt-1 text-xl font-bold">
            {t("hero.role")} · {t("hero.location")}
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-[15px]">
            <a href="mailto:josetisrey@gmail.com">{t("links.email")}</a>
            <span>·</span>
            <a href="https://github.com/danieltistoj" target="_blank" rel="noreferrer">
              {t("links.github")}
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/danieltistoj-developer"
              target="_blank"
              rel="noreferrer"
            >
              {t("links.linkedin")}
            </a>
          </div>
        </header>

        <p className="mt-5 text-lg leading-relaxed">{t("hero.summary")}</p>

        {/* Terminal */}
        <div className="mt-6 overflow-hidden rounded-lg bg-[#1a1a1a]">
          <div className="flex gap-1.5 bg-[#2a2a2a] px-3.5 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="px-4 py-4 font-mono text-sm leading-[1.8]">
            <div>
              <span className="text-[#27c93f]">$</span>{" "}
              <span className="text-[#e5e5e5]">whoami</span>
            </div>
            <div className="text-[#9a9a9a]">
              {t("hero.name")} — {t("hero.role")}
            </div>
            <div className="text-[#9a9a9a]">{t("hero.location")}</div>
            <div className="text-[#9a9a9a]">
              core stack: {skills[0]?.items.join(", ")}
            </div>
            <div>
              <span className="text-[#27c93f]">$</span>{" "}
              <span className="text-[#e5e5e5]/60">▍</span>
            </div>
          </div>
        </div>

        <section id="about" className="mt-14">
          <h2 className="text-2xl font-bold">{t("sections.about")}</h2>
          <p className="mt-3 text-base leading-relaxed">{t("about.body")}</p>
        </section>

        <section id="skills" className="mt-10">
          <h2 className="text-2xl font-bold">{t("sections.skills")}</h2>
          <div className="mt-4 flex flex-col gap-3.5">
            {skills.map((group) => (
              <div key={group.title}>
                <strong>{group.title}</strong>
                <br />
                <span className="font-mono text-[15px]">
                  {group.items.join(" · ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-10">
          <h2 className="text-2xl font-bold">{t("sections.projects")}</h2>
          <div className="mt-4 flex flex-col gap-10">
            {projects.map((project) => (
              <article key={project.title}>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2 text-sm">
                  <a href={project.production} target="_blank" rel="noreferrer">
                    {t("projects.links.production")}
                  </a>
                  <span>·</span>
                  <a href={project.frontend} target="_blank" rel="noreferrer">
                    {t("projects.links.frontend")}
                  </a>
                  <span>·</span>
                  <span className="text-[#777]">{project.backend}</span>
                </div>
                <p className="mt-2.5 font-mono text-[13px] text-[#555]">
                  {project.stack}
                </p>
                <p className="mt-3 text-[15px] font-bold">
                  {t("projects.sections.highlights")}
                </p>
                <ul className="mt-1 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-3 text-[15px] font-bold">
                  {t("projects.sections.features")}
                </p>
                <ul className="mt-1 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed">
                  {project.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-10">
          <h2 className="text-2xl font-bold">{t("sections.experience")}</h2>
          <div className="mt-4 flex flex-col gap-6">
            {experiences.map((item) => (
              <div key={`${item.company}-${item.project}`}>
                <h3 className="text-[17px] font-bold">
                  {item.role} — {item.project}
                </h3>
                <p className="mt-0.5 text-sm text-[#555]">
                  {item.companyUrl ? (
                    <a href={item.companyUrl} target="_blank" rel="noreferrer">
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}{" "}
                  · {item.period} · {item.location}
                </p>
                <p className="mt-1.5 font-mono text-[13px] text-[#555]">
                  {item.stack}
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-10">
            <div>
              <h3 className="text-base font-bold">
                {t("experience.education.title")}
              </h3>
              <p className="mt-1 text-[15px] leading-relaxed">
                {education.degree}
                <br />
                {education.institution} — {education.period}
                <br />
                {education.status}
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold">
                {t("experience.languages.title")}
              </h3>
              <p className="mt-1 text-[15px] leading-relaxed">
                {languageItems.map((lang, index) => (
                  <span key={lang.label}>
                    {index > 0 ? <br /> : null}
                    {lang.label} — {lang.level}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </section>

        <section id="github-stats" className="mt-10">
          <h2 className="text-2xl font-bold">{t("sections.githubStats")}</h2>
          <div className="mt-4 flex flex-col gap-4 md:flex-row">
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=danieltistoj&theme=default&hide_border=true"
              alt="GitHub repos per language"
              className="w-full flex-1 rounded-lg border border-[#e3e3e3]"
            />
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=danieltistoj&theme=default&hide_border=true"
              alt="GitHub most commit language"
              className="w-full flex-1 rounded-lg border border-[#e3e3e3]"
            />
          </div>
        </section>

        <section id="contact" className="mt-12">
          <h2 className="text-2xl font-bold">{t("contactForm.title")}</h2>
          <p className="mt-1.5 text-[15px] text-[#555]">
            {t("contactForm.subtitle")}
          </p>
          <form
            className="mt-5 flex max-w-md flex-col gap-4"
            action="https://formspree.io/f/xbjevgbe"
            method="POST"
          >
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold" htmlFor="fullName">
                {t("contactForm.fields.name")}
              </label>
              <Input
                id="fullName"
                name="name"
                placeholder={t("contactForm.placeholders.name")}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold" htmlFor="email">
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
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold" htmlFor="phone">
                {t("contactForm.fields.phone")}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={t("contactForm.placeholders.phone")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold" htmlFor="message">
                {t("contactForm.fields.message")}
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder={t("contactForm.placeholders.message")}
                required
              />
            </div>
            <Button type="submit" className="self-start">
              {t("contactForm.actions.submit")}
            </Button>
          </form>
        </section>

        <footer className="mt-14 flex flex-wrap items-center justify-center gap-2 border-t border-dashed border-[#cfcfcf] pt-5 text-center text-sm">
          <a href="mailto:josetisrey@gmail.com">{t("links.email")}</a>
          <span>|</span>
          <a href="https://github.com/danieltistoj" target="_blank" rel="noreferrer">
            {t("links.github")}
          </a>
          <span>|</span>
          <a
            href="https://www.linkedin.com/in/danieltistoj-developer"
            target="_blank"
            rel="noreferrer"
          >
            {t("links.linkedin")}
          </a>
        </footer>
      </main>
    </div>
  );
}
