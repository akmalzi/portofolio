import Icon from "./Icons";
import { profile } from "@/data/portfolio";

// Isi kotak kode di sebelah kanan
const codeLines = [
  "const developer = {",
  '  name: "akmal zidan fahreza",',
  '  focus: "web development",',
  '  stack: ["React", "NextJS"],',
  '  mindset: "always learning"',
  "}",
  "",
  "export default developer",
];

const socials = [
  { label: "GitHub", icon: "github", href: `https://${profile.github}` },
  { label: "LinkedIn", icon: "linkedin", href: `https://${profile.linkedin}` },
  { label: "Email", icon: "mail", href: `mailto:${profile.email}` },
];

export default function Hero() {
  return (
    <section className="bg-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2">
        {/* Kiri: teks */}
        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 font-mono text-[11px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Open to junior web developer roles
          </span>

          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name}
          </h1>
          <p className="mt-2 text-2xl text-brand sm:text-3xl lg:text-4xl">
            Web Developer &amp; Informatics Graduate
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
            >
              View Projects
              <Icon name="arrowDown" className="h-3.5 w-3.5" />
            </a>
            <a
              href={profile.cvLink}
              className="flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-medium transition hover:border-brand hover:text-brand"
            >
              Download CV
              <Icon name="download" className="h-3.5 w-3.5" />
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="flex items-center gap-2 transition hover:text-brand"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-brand">
                    <Icon name={s.icon} className="h-4 w-4" />
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kanan: kotak kode */}
        <div className="overflow-hidden rounded-2xl bg-[#14161a] shadow-xl lg:ml-auto lg:w-full lg:max-w-md">
          <div className="flex items-center justify-between px-5 py-4">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            </div>
            <span className="font-mono text-[10px] text-gray-500">
              portfolio.tsx
            </span>
          </div>

          <pre className="overflow-x-auto px-5 pb-6 pt-2 font-mono text-xs leading-7 text-gray-300 sm:text-[13px]">
            {codeLines.map((line, i) => (
              <div key={i} className="flex gap-5">
                <span className="w-5 select-none text-gray-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{line}</span>
              </div>
            ))}
          </pre>

          <div className="flex items-center justify-between border-t border-white/5 px-5 py-3 font-mono text-[10px] text-gray-500">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              build passing
            </span>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
