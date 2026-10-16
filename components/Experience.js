import Link from "next/link";
import Icon from "./Icons";
import SectionLabel from "./SectionLabel";
import { experience, education, certificates } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 bg-soft">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        {/* Kiri: pengalaman (timeline) */}
        <div>
          <SectionLabel>04 / Experience</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Learning through contribution.
          </h2>

          <ol className="mt-10 space-y-8 border-l border-line pl-6">
            {experience.map((item, i) => (
              <li key={item.title} className="relative">
                {/* titik timeline: item pertama berwarna biru */}
                <span
                  className={`absolute -left-7.25 top-0 h-2.5 w-2.5 rounded-full border-2 ${
                    i === 0
                      ? "border-brand bg-brand"
                      : "border-gray-300 bg-white"
                  }`}
                />
                <p className="font-mono text-[10px] uppercase tracking-wider text-brand">
                  {item.period}
                </p>
                <h3 className="mt-1 text-base font-semibold">{item.title}</h3>
                <p className="text-xs text-muted">
                  {item.company}
                  {item.certificate !== "" ? (
                    <Link
                      href={item.certificate}
                      className="text-blue-500 underline ml-5 hover:text-blue-700"
                    >
                      Certificate
                    </Link>
                  ) : (
                    // <p>mal</p>
                    <span></span>
                  )}
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Kanan: pendidikan */}
        <div>
          <SectionLabel>05 / Education</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Foundation &amp; credentials.
          </h2>

          <div className="mt-8 rounded-xl bg-[#14161a] p-6 text-white">
            <Icon name="cap" className="h-5 w-5 text-blue-400" />
            <h3 className="mt-4 text-lg font-semibold">{education.degree}</h3>
            <p className="mt-1 text-xs text-gray-400">{education.school}</p>
            <div className="mt-4 flex justify-between font-mono text-[10px] text-gray-500">
              <span>{education.graduated}</span>
              <span className="text-blue-400">{education.gpa}</span>
            </div>
          </div>

          <ul className="mt-6 divide-y divide-line">
            {certificates.map((c) => (
              <li
                key={c.title}
                className="flex items-center justify-between py-4"
              >
                <div>
                  <p className="text-sm font-medium">{c.title}</p>
                  <p className="text-[11px] text-muted">{c.issuer}</p>
                </div>
                <Icon name="check" className="h-4 w-4 text-brand" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
