"use client";

import { useState } from "react";
import Icon from "./Icons";
import { profile } from "@/data/portfolio";

const contactItems = [
  { label: "Email", value: profile.email, icon: "mail" },
  { label: "LinkedIn", value: profile.linkedin, icon: "linkedin" },
  { label: "GitHub", value: profile.github, icon: "github" },
];

const inputClass =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // update satu kolom form setiap pengguna mengetik
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Belum ada server, jadi tombol Send membuka aplikasi email
  // dengan isi pesan yang sudah terisi (mailto).
  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-[#14161a] text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2">
        {/* Kiri */}
        <div>
          <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-blue-400">
            <span className="h-px w-5 bg-blue-400" />
            06 / Contact
          </p>
          <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Let&apos;s build something together.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-gray-400">
            I&apos;m ready to contribute to thoughtful products, learn from a strong
            team, and turn useful ideas into reliable web experiences.
          </p>

          <ul className="mt-8 space-y-4">
            {contactItems.map((c) => (
              <li key={c.label} className="flex items-center gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gray-300">
                  <Icon name={c.icon} className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium">{c.label}</p>
                  <p className="text-xs text-gray-400">{c.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Kanan: form */}
        <form onSubmit={handleSubmit} className="rounded-xl bg-white p-6 text-ink sm:p-8">
          <h3 className="text-lg font-semibold">Start a conversation</h3>
          <p className="mt-1 text-xs text-muted">Tell me a little about your team or project.</p>

          <label className="mt-6 block text-xs font-medium" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`${inputClass} mt-1.5`}
          />

          <label className="mt-4 block text-xs font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={`${inputClass} mt-1.5`}
          />

          <label className="mt-4 block text-xs font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="What would you like to build?"
            className={`${inputClass} mt-1.5 resize-none`}
          />

          <button
            type="submit"
            className="mt-6 flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            Send Message
            <Icon name="send" className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>
    </section>
  );
}
