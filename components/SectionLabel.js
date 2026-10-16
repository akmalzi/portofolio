// Label kecil di atas judul section, contoh: "— 01 / ABOUT"
export default function SectionLabel({ children }) {
  return (
    <p className="mb-4 flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-widest text-brand">
      <span className="h-px w-5 bg-brand" />
      {children}
    </p>
  );
}
