"use client";

import { useState } from "react";
import Icon from "./Icons";
import SectionLabel from "./SectionLabel";
import { projects } from "@/data/portfolio";

const filters = ["All", "Frontend", "Full Stack", "UI"];

export default function Projects() {
  // filter yang sedang dipilih
  const [active, setActive] = useState("All");

  // kalau "All" tampilkan semua, selain itu hanya yang kategorinya cocok
  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <SectionLabel>03 / Selected Work</SectionLabel>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects that solve real problems.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-muted">
              From discovery to deployment, these projects show how I translate
              requirements into useful, responsive, and maintainable web
              products.
            </p>
          </div>
          <p className="font-mono text-[11px] text-muted">
            {String(projects.length).padStart(2, "0")} projects / 2024–2026
          </p>
        </div>

        {/* Tombol filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                active === f
                  ? "bg-ink text-white"
                  : "border border-line text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Daftar project */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-xl border border-line bg-white"
            >
              {/* Gambar project (atau placeholder kalau belum ada) */}
              <div className={`h-44 bg-linear-to-br sm:h-75 ${p.gradient}`}>
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="h-28 w-48 rounded-lg border border-white/60 bg-white/70 shadow-sm sm:h-32 sm:w-56">
                      <div className="flex gap-1 border-b border-line px-2 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-300" />
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
                        <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                      </div>
                      <div className="space-y-2 p-3">
                        <div className="h-2 w-2/3 rounded bg-slate-200" />
                        <div className="h-2 w-full rounded bg-slate-100" />
                        <div className="h-2 w-5/6 rounded bg-slate-100" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="font-medium uppercase tracking-wider text-brand">
                    {p.category}
                  </span>
                  <span className="text-gray-400">Featured project</span>
                </div>

                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  <span className="font-semibold text-ink">Role: </span>
                  {p.role}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-blue-50 px-2.5 py-1 font-mono text-[11px] text-brand"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-5 border-t border-line pt-4 text-xs text-muted">
                  {p.github == "" ? (
                    <button
                      className="flex items-center gap-1.5 hover:cursor-not-allowed text-red-500"
                      disabled
                    >
                      <Icon name="github" className="h-3.5 w-3.5" />
                      GitHub
                    </button>
                  ) : (
                    <a
                      href={p.github}
                      className="flex items-center gap-1.5 hover:text-brand text-green-500"
                    >
                      <Icon name="github" className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  )}
                  {p.demo == "" ? (
                    <button
                      className="flex items-center gap-1.5 hover:cursor-not-allowed text-red-500"
                      disabled
                    >
                      <Icon name="external" className="h-3.5 w-3.5" />
                      Live Demo
                    </button>
                  ) : (
                    <a
                      href={p.demo}
                      className="flex items-center gap-1.5 hover:text-brand text-green-500"
                    >
                      <Icon name="external" className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
