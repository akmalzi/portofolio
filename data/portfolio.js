export const profile = {
  name: "Akmal Zidan Fahreza",
  role: "Web Developer & Informatics Graduate",
  intro:
    "I build modern, functional, and user-friendly web applications—turning thoughtful interfaces and reliable backend systems into clear digital products.",
  email: "akmalzidanfah@gmail.com",
  github: "github.com/akmalzi",
  linkedin: "linkedin.com/in/name",
  cvLink: "#",
  photo: "/profile.jpg",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "S, Kom.", label: "Informatics degree" },
  { value: "6", label: "Shipped projects" },
  { value: "2026", label: "Ready to contribute" },
];

export const skills = [
  {
    title: "Frontend",
    icon: "layout",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Node.js", "Express.js", "Laravel", "Filament"],
  },
  {
    title: "Database",
    icon: "database",
    items: ["MySQL", "Prisma ORM"],
  },
  {
    title: "Tools",
    icon: "wrench",
    items: ["Git", "GitHub", "Figma", "Vercel"],
  },
];

// category harus salah satu: "Frontend", "Full Stack", atau "UI"
// image: isi dengan "/projects/nama.png" kalau sudah punya screenshot
export const projects = [
  {
    title: "Kebun Bibit Wonorejo",
    category: "Frontend",
    description:
      "Digital platform that designed to make easier for visitors to overcome challenges in obtaining information and navigating wonorejo area.",
    role: "Implement UI/UX designs into responsive website interfaces and collaborate with the UI/UX team to ensure that the final results align with the designs.",
    tags: ["React", "Express JS", "MySQL", "Tailwind"],
    github: "https://github.com/Agriculture-six-Asix",
    demo: "",
    image: "/project/kebunbibit.png",
    gradient: "from-sky-100 to-blue-200",
  },
  {
    title: "Company Profile with Content Management System",
    category: "Backend",
    description:
      "A company profile website featuring an integrated content management system (CMS) powered by Filament",
    role: "Built end-to-end design system, REST endpoints, CMS dashboard, and FE BE integration.",
    tags: ["Laravel", "FIlament V4", "MySQL"],
    github: "",
    demo: "https://koperasitsm.com/",
    image: "/project/koperasi.png",
    gradient: "from-indigo-100 to-slate-300",
  },
  {
    title: "Dompet Ozil",
    category: "Backend",
    description:
      "Financial management website designed to simplify bookkeeping for JajanOzil, it's designed to handle complex profit margin calculations.",
    role: "Developing the backend using Express.js, Prisma, and MySQL. Designing a REST API to support data integration between the frontend and backend.",
    tags: ["React", "Tailwind", "Express JS", "MySQL"],
    github: "https://github.com/ridhomuhhh/Web-JajanOzil",
    demo: "",
    image: "/project/dompetozil.png",
    gradient: "from-amber-100 to-orange-200",
  },
  {
    title: "Website Booking Lapangan - GOR Rungkut Timur",
    category: "Backend",
    description:
      "A patient-first appointment flow with doctor availability, queue estimates, reminders, and an operations view for clinics.",
    role: "Led UX research synthesis, wireframes, high-fidelity UI, and reusable design tokens in Figma.",
    tags: ["Express JS", "MySQL", "PRISMA ORM"],
    github: "https://github.com/Yow04/renting-api",
    demo: "",
    image: "/project/weblapangan.png",
    gradient: "from-blue-100 to-cyan-200",
  },
  {
    title: "Website Profile Paguyuban UMKM Klampis Ngasem",
    category: "Frontend",
    description:
      "Community reporting platform that routes neighborhood issues, maps progress, and keeps citizens updated from submission to resolution.",
    role: "Developed geotagged reports, admin triage, status notifications, and image upload workflows.",
    tags: ["React", "Tailwind"],
    github: "https://github.com/akmalzi/WebPaguyubanUmkmKlampisNgasem",
    demo: "https://web-paguyuban-umkm-klampis-ngasem.vercel.app/",
    image: "/project/paguyubanumkm.png",
    gradient: "from-emerald-100 to-teal-200",
  },
  // {
  //   title: "Nusa Travel Journal",
  //   category: "Frontend",
  //   description:
  //     "Editorial travel journal with destination stories, saved itineraries, and fast image delivery for strong Core Web Vitals.",
  //   role: "Built the responsive frontend, content templates, image optimization, and performance budget.",
  //   tags: ["Next.js", "CSS", "Vercel", "Figma"],
  //   github: "",
  //   demo: "",
  //   image: "",
  //   gradient: "from-lime-100 to-green-300",
  // },
];

export const experience = [
  {
    period: "FEB-JUL 2025",
    title: "Independent Study - Web Developer ",
    company: "Infinite Learning by Infinite Studio",
    certificate:
      "https://drive.google.com/drive/u/4/folders/1s7SysWelUXX2QT0keM25rDoucgJDL15Y",
    description:
      "Gained a comprehensive understanding of the website development process, from problem identification, solution planning, and system design to code implementation. Collaborated with a cross-provincial team to design and develop digital products based on user needs.",
  },
  {
    period: "SEP-DES 2026",
    title: "Praktek Kerja Lapangan",
    company: "Koperasi Tunas Sejahtera Mandiri by PT Temprina",
    certificate: "",
    description:
      "Delivered landing pages and operational dashboards for small organizations, mapping findings through deployment and handover.",
  },
];

export const education = {
  degree: "Bachelor of Informatics",
  school: "University of Technology Nusantara",
  graduated: "Graduated 2026",
  gpa: "GPA 3.71 / 4.00",
};

export const certificates = [
  { title: "Junior Web Programmer", issuer: "BNSP · 2025" },
  { title: "React Basic Certificate", issuer: "Hackerank · 2026" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp · 2025" },
  { title: "Git & GitHub Fundamentals", issuer: "Coursera · 2024" },
];
