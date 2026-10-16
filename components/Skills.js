import Icon from "./Icons";
import SectionLabel from "./SectionLabel";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <SectionLabel>02 / Skills</SectionLabel>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          A balanced web development toolkit.
        </h2>
        <p className="mt-4 max-w-xl text-sm text-muted">
          Comfortable moving from interface systems to APIs, data models, and
          practical deployment workflows.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-line bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-brand">
                  <Icon name={group.icon} className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-soft px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
