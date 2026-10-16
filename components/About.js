import SectionLabel from "./SectionLabel";
import { profile, stats } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
        {/* Foto */}
        <div>
          <div className="aspect-4/5 overflow-hidden rounded-xl bg-linear-to-br from-stone-200 to-stone-300">
            {profile.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-stone-500">
                Add your photo in data/portfolio.js
              </div>
            )}
          </div>
          <div className="mt-3 flex justify-between font-mono text-[11px] text-muted">
            <span>Based in Indonesia</span>
            <span className="text-brand">Frontend + Backend</span>
          </div>
        </div>

        {/* Teks */}
        <div>
          <SectionLabel>01 / About</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Curious by training. Practical by choice.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
            I&apos;m an Informatics graduate focused on Web Development, with a
            strong interest in both the precision of frontend interfaces and the
            structure of dependable backend systems.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            My approach starts with understanding the problem, reducing
            unnecessary complexity, and building the smallest clear solution
            that serves real users. I care about accessible interfaces,
            maintainable code, purposeful collaboration, and learning from every
            release.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-soft px-5 py-4">
                <p className="text-2xl font-medium">{s.value}</p>
                <p className="mt-1 font-mono text-[11px] text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
