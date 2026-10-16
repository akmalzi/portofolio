import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#14161a] text-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div>
            <p className="text-sm font-semibold">{profile.name}</p>
            <p className="mt-1 text-xs text-gray-400">{profile.role}</p>
          </div>
          <ul className="flex gap-6 text-xs text-gray-400">
            <li><a href={`https://${profile.github}`} className="hover:text-white">GitHub</a></li>
            <li><a href={`https://${profile.linkedin}`} className="hover:text-white">LinkedIn</a></li>
            <li><a href={`mailto:${profile.email}`} className="hover:text-white">Email</a></li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 font-mono text-[10px] text-gray-500 sm:flex-row">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p>Designed &amp; built with intention.</p>
        </div>
      </div>
    </footer>
  );
}
