// =====================================================================
//  كل بيانات البورتفوليو هنا — عدّلي الملف ده بس وكل الموقع هيتحدث
//  All portfolio content lives here — edit this file only.
// =====================================================================

const PORTFOLIO = {
  name: { ar: "نغم أحمد", en: "Nagham Ahmed" },
  role: { ar: "مطوّرة واجهات أمامية", en: "Front-End Developer" },
  tagline: {
    ar: "بحوّل الأفكار لمواقع سريعة وجميلة وسهلة الاستخدام.",
    en: "I turn ideas into fast, beautiful and easy-to-use websites.",
  },
  location: { ar: "الإمارات", en: "UAE" },
  email: "you@example.com",
  cv: "", // مثال: "assets/cv.pdf" — سيبيه فاضي لو مفيش CV
  photo: "", // مثال: "assets/me.jpg" — لو فاضي هتظهر الحروف الأولى من الاسم

  socials: [
    { label: "GitHub", url: "https://github.com/naghamhaimanahmed" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
  ],

  about: {
    ar: "أنا مطوّرة بحب أبني تجارب ويب نضيفة ومتجاوبة. بشتغل بـ HTML و CSS و JavaScript و React، ومهتمة بالتفاصيل وتجربة المستخدم. دايمًا بتعلم حاجات جديدة وبحب أشتغل في فريق.",
    en: "I'm a developer who loves building clean, responsive web experiences. I work with HTML, CSS, JavaScript and React, and I care about details and user experience. Always learning, and I enjoy working in teams.",
  },

  stats: [
    { value: "2+", label: { ar: "سنين خبرة", en: "Years experience" } },
    { value: "15+", label: { ar: "مشروع", en: "Projects" } },
    { value: "10+", label: { ar: "عميل سعيد", en: "Happy clients" } },
  ],

  skills: [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS",
    "Node.js", "Git & GitHub", "Figma", "Responsive Design",
  ],

  projects: [
    {
      title: { ar: "متجر إلكتروني", en: "E-commerce Store" },
      description: {
        ar: "متجر أونلاين بسلة مشتريات وفلترة منتجات ودفع.",
        en: "Online store with a cart, product filters and checkout.",
      },
      tags: ["React", "Tailwind", "Stripe"],
      image: "", // مثال: "assets/project1.png"
      demo: "#",
      code: "#",
    },
    {
      title: { ar: "تطبيق مهام", en: "Task Manager App" },
      description: {
        ar: "تطبيق لتنظيم المهام بالسحب والإفلات وحفظ تلقائي.",
        en: "Drag-and-drop task organizer with auto-save.",
      },
      tags: ["JavaScript", "LocalStorage"],
      image: "",
      demo: "#",
      code: "#",
    },
    {
      title: { ar: "لاندينج بيج لشركة", en: "Company Landing Page" },
      description: {
        ar: "صفحة تعريفية متجاوبة بأنيميشن خفيف وأداء عالي.",
        en: "Responsive landing page with subtle animation and high performance.",
      },
      tags: ["HTML", "CSS", "GSAP"],
      image: "",
      demo: "#",
      code: "#",
    },
  ],

  experience: [
    {
      period: { ar: "2024 — الآن", en: "2024 — Present" },
      title: { ar: "مطوّرة فرونت إند", en: "Front-End Developer" },
      place: { ar: "اسم الشركة", en: "Company Name" },
      description: {
        ar: "بناء واجهات مستخدم وتحسين الأداء والتعاون مع فريق التصميم.",
        en: "Building user interfaces, improving performance and collaborating with design.",
      },
    },
    {
      period: { ar: "2022 — 2024", en: "2022 — 2024" },
      title: { ar: "فريلانسر", en: "Freelancer" },
      place: { ar: "عمل حر", en: "Self-employed" },
      description: {
        ar: "تنفيذ مواقع لعملاء في مجالات مختلفة.",
        en: "Delivered websites for clients across different industries.",
      },
    },
    {
      period: { ar: "2018 — 2022", en: "2018 — 2022" },
      title: { ar: "بكالوريوس", en: "Bachelor's Degree" },
      place: { ar: "اسم الجامعة", en: "University Name" },
      description: { ar: "", en: "" },
    },
  ],
};
