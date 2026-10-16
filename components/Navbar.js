"use client";

import { useState } from "react";
import Icon from "./Icons";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  // open = true artinya menu mobile sedang terbuka
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 text-sm font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-mono text-[11px] text-white">
            {"</>"}
          </span>
          {profile.name}
        </a>

        {/* Menu laptop */}
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-brand">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cvLink}
              className="flex items-center gap-2 rounded-lg border border-line px-4 py-2 font-medium text-ink transition hover:border-brand hover:text-brand"
            >
              Download CV
              <Icon name="download" className="h-3.5 w-3.5" />
            </a>
          </li>
        </ul>

        {/* Tombol hamburger (hanya di mobile) */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <ul className="border-t border-line bg-white px-5 pb-5 pt-2 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-muted hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={profile.cvLink}
              className="flex items-center justify-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-medium"
            >
              Download CV
              <Icon name="download" className="h-3.5 w-3.5" />
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
