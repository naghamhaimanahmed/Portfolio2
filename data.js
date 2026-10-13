// =====================================================================
//  كل بيانات البورتفوليو هنا — عدّلي الملف ده بس وكل الموقع هيتحدث
//  All portfolio content lives here — edit this file only.
// =====================================================================

const PORTFOLIO = {
  name: { ar: "نغم هيمن أحمد", en: "Nagham Haiman Ahmed" },
  role: { ar: "مطوّرة Front-End ومعيدة علوم حاسب", en: "Front-End Developer & CS Teaching Assistant" },
  tagline: {
    ar: "بحوّل التصميمات لواجهات ويب سريعة ومتجاوبة وسهلة الاستخدام.",
    en: "I turn designs into fast, responsive and user-friendly web interfaces.",
  },
  location: { ar: "القاهرة، مصر", en: "Cairo, Egypt" },
  email: "naghamhaiman2@gmail.com",
  cv: "assets/Nagham-Haiman-CV.pdf", // سيبيه فاضي "" لو مش عايزة زرار الـ CV
  photo: "assets/me.jpg", // لو فاضي "" هتظهر الحروف الأولى من الاسم

  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nagham-haiman-89bb48210" },
    { label: "GitHub", url: "https://github.com/naghamhaimanahmed" },
  ],

  about: {
    ar: "مطوّرة Front-End بخبرة أكتر من 3 سنين في بناء واجهات ويب حديثة ومتجاوبة باستخدام HTML و CSS و JavaScript و TypeScript و React. بشتغل مع العملاء عشان أحوّل احتياجاتهم لواجهات سهلة الاستخدام، وبهتم بالأداء وتوافق المواقع مع كل المتصفحات والشاشات. بجانب التطوير، بشتغل معيدة في كلية علوم الحاسب بالأكاديمية العربية للعلوم والتكنولوجيا، وبدرّس مواد زي برمجة الويب والـ OOP وقواعد البيانات، وبعمل ورش عن أحدث ممارسات تطوير الويب. بحب حل المشاكل والتعلم المستمر، وبحب أشارك اللي بعرفه مع غيري.",
    en: "Front-End Developer with 3+ years of experience building modern, responsive web interfaces with HTML, CSS, JavaScript, TypeScript and React. I work closely with clients to turn business requirements into intuitive interfaces, with a strong focus on performance and cross-browser compatibility. Alongside development, I'm a Computer Science Teaching Assistant at the Arab Academy for Science, Technology and Maritime Transport, teaching courses like Web Programming, OOP and Databases, and running workshops on modern web development. I love problem-solving, continuous learning, and sharing what I know.",
  },

  stats: [
    { value: "3+", label: { ar: "سنين Front-End", en: "Years in front-end" } },
    { value: "2+", label: { ar: "سنين تدريس جامعي", en: "Years teaching" } },
    { value: "3.68", label: { ar: "GPA من 4", en: "GPA / 4.0" } },
  ],

  skills: [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Tailwind CSS",
    "Bootstrap", "REST APIs", "Git & GitHub", "Figma", "Responsive Design",
    "Linux (basic)", "Networking (TCP/IP, DNS, DHCP)",
  ],

  projects: [
    {
      title: { ar: "نظام تحديد المواقع الداخلية بالـ LiDAR", en: "Indoor Positioning with Low-Cost LiDAR" },
      description: {
        ar: "مشروع التخرج: نظام لتحديد المكان ورسم الخرائط داخل المباني باستخدام LiDAR منخفض التكلفة وخوارزمية Hector SLAM، لتطبيقات الروبوتات والتتبع.",
        en: "Graduation project: indoor localization and mapping using low-cost LiDAR and Hector SLAM, for robotics and tracking applications.",
      },
      tags: ["LiDAR", "Hector SLAM", "Robotics"],
      image: "",
      demo: "",
      code: "",
    },
  ],

  experience: [
    {
      period: { ar: "2025 — الآن", en: "2025 — Present" },
      title: { ar: "مدرّبة فريلانسنج", en: "Freelancing Coach" },
      place: { ar: "شركة Elharefa", en: "Elharefa Company" },
      description: {
        ar: "تدريب الطلاب على المهارات التقنية والشخصية المطلوبة في سوق العمل.",
        en: "Training students in the technical and personal skills required by the job market.",
      },
    },
    {
      period: { ar: "2023 — الآن", en: "2023 — Present" },
      title: { ar: "معيدة علوم حاسب", en: "Teaching Assistant" },
      place: { ar: "الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري", en: "Arab Academy for Science, Technology & Maritime Transport" },
      description: {
        ar: "تدريس سكاشن ومعامل في مواد علوم الحاسب (برمجة الويب، OOP، قواعد البيانات المتقدمة، التصميم المتمحور حول الإنسان…)، والإشراف على مشاريع الطلاب في الـ Front-End، وتنظيم ورش عن تطوير الويب الحديث.",
        en: "Delivering tutorials and labs in CS courses (Web Programming, OOP, Advanced Databases, Human-Centered Software Design…), mentoring student front-end projects, and organizing workshops on modern web development.",
      },
    },
    {
      period: { ar: "2021 — الآن", en: "2021 — Present" },
      title: { ar: "مطوّرة Front-End (فريلانس)", en: "Front-End Developer (Freelance)" },
      place: { ar: "عمل حر", en: "Self-employed" },
      description: {
        ar: "تصميم وتطوير مواقع متجاوبة بـ HTML و CSS و JavaScript و React، وتحويل متطلبات العملاء لواجهات سهلة، وتحسين الأداء والتوافق مع المتصفحات، وإدارة أكتر من مشروع في نفس الوقت.",
        en: "Designed and built responsive websites with HTML, CSS, JavaScript and React, translated client requirements into intuitive UIs, optimized performance and cross-browser compatibility, and managed multiple projects under tight deadlines.",
      },
    },
    {
      period: { ar: "فبراير 2022 — يناير 2024", en: "Feb 2022 — Jan 2024" },
      title: { ar: "باحثة", en: "Researcher" },
      place: { ar: "Action Restitution Africa (ARA)", en: "Action Restitution Africa (ARA)" },
      description: {
        ar: "إدخال البيانات وبناء الـ datasets، وكتابة التقارير، ومراجعة الدراسات، وبرمجة الويب والتصميم الجرافيكي.",
        en: "Data entry and dataset creation, report writing, reviewing studies, web programming and graphic design.",
      },
    },
    {
      period: { ar: "2024 — الآن", en: "2024 — Present" },
      title: { ar: "ماجستير علوم الحاسب", en: "Master of Computer Science" },
      place: { ar: "الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري", en: "Arab Academy for Science, Technology & Maritime Transport" },
      description: { ar: "", en: "" },
    },
    {
      period: { ar: "2019 — 2023", en: "2019 — 2023" },
      title: { ar: "بكالوريوس علوم الحاسب", en: "B.Sc. Computer Science" },
      place: { ar: "الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري", en: "Arab Academy for Science, Technology & Maritime Transport" },
      description: {
        ar: "تخرجت مع مرتبة الشرف — GPA 3.68 / 4.0.",
        en: "Graduated with high honors — GPA 3.68 / 4.0.",
      },
    },
  ],

  courses: [
    "Google IT Support Certificate — Coursera (2025)",
    "Introduction to Networking — Cisco Academy (2025)",
    "Winter School on Quantum Information & Computing (2025)",
    "AI Course — AMIT (2024)",
    "Web Design — ITI (2021, 2022)",
    "ACM Training (2022)",
    "Freelancing (2021)",
    "Mobile Application — YAT (2020)",
  ],
};
