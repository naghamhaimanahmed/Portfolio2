// =====================================================================
//  كل بيانات البورتفوليو هنا — عدّلي الملف ده بس وكل الموقع هيتحدث
//  All portfolio content lives here — edit this file only.
// =====================================================================

const PORTFOLIO = {
  name: { ar: "نغم هيمن أحمد", en: "Nagham Haiman Ahmed" },
  role: { ar: "مطوّرة واجهات أمامية", en: "Front-End Developer" },
  tagline: {
    ar: "بحوّل التصميمات لواجهات ويب سريعة ومتجاوبة وسهلة الاستخدام.",
    en: "I turn designs into fast, responsive and user-friendly web interfaces.",
  },
  location: { ar: "الإمارات", en: "UAE" },
  email: "naghamhaiman2@gmail.com",
  cv: "", // مثال: "assets/cv.pdf" — سيبيه فاضي لو مفيش CV
  photo: "", // مثال: "assets/me.jpg" — لو فاضي هتظهر الحروف الأولى من الاسم

  socials: [
    { label: "GitHub", url: "https://github.com/naghamhaimanahmed" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
  ],

  about: {
    ar: "مطوّرة Front-End بخبرة 3 سنين في بناء واجهات ويب حديثة ومتجاوبة بتحوّل التصميمات لتجارب استخدام سلسة. بشتغل بـ HTML و CSS و JavaScript و TypeScript و React، وبهتم بكتابة كود نضيف وقابل لإعادة الاستخدام، وبركّز على الأداء وسهولة الوصول (Accessibility) وتوافق المواقع مع كل الشاشات. اتعاملت مع REST APIs وأدوات زي Git و Figma، واشتغلت مع فرق التصميم والـ Back-End عشان نطلّع منتجات بجودة عالية. دايمًا بتعلم تقنيات جديدة وبحب أحل المشاكل بطرق بسيطة وفعّالة.",
    en: "Front-End Developer with 3 years of experience building modern, responsive web interfaces that turn designs into smooth user experiences. I work with HTML, CSS, JavaScript, TypeScript and React, and I care about clean, reusable code with a strong focus on performance, accessibility and cross-device compatibility. I've integrated REST APIs, used tools like Git and Figma, and collaborated closely with design and back-end teams to ship high-quality products. I'm always learning new technologies and enjoy solving problems in simple, effective ways.",
  },

  stats: [
    { value: "3+", label: { ar: "سنين خبرة", en: "Years experience" } },
    { value: "15+", label: { ar: "مشروع", en: "Projects" } },
    { value: "10+", label: { ar: "عميل سعيد", en: "Happy clients" } },
  ],

  skills: [
    "HTML5", "CSS3", "Sass", "JavaScript (ES6+)", "TypeScript", "React", "Next.js",
    "Tailwind CSS", "Bootstrap", "Redux", "REST APIs", "Git & GitHub", "Figma",
    "Responsive Design", "Accessibility",
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
      period: { ar: "2023 — الآن", en: "2023 — Present" },
      title: { ar: "مطوّرة فرونت إند", en: "Front-End Developer" },
      place: { ar: "اسم الشركة", en: "Company Name" },
      description: {
        ar: "بناء واجهات مستخدم وتحسين الأداء والتعاون مع فريق التصميم.",
        en: "Building user interfaces, improving performance and collaborating with design.",
      },
    },
    {
      period: { ar: "2022 — 2023", en: "2022 — 2023" },
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
