// =====================================================================
//  All portfolio content lives here — edit this file and the site updates.
// =====================================================================

const PORTFOLIO = {
  name: "Nagham Haiman Ahmed",
  firstName: "Nagham",
  // Rotating titles shown in the hero (typewriter effect)
  roles: ["Front-End Developer"],
  tagline:
    "I build fast, responsive and user-friendly web interfaces with React and TypeScript — turning designs into clean, maintainable code.",
  location: "Cairo, Egypt",
  email: "naghamhaiman2@gmail.com",
  cv: "assets/Nagham-Haiman-CV.pdf", // set to "" to hide the CV button
  photo: "assets/me.jpg", // set to "" to show initials instead

  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nagham-haiman-89bb48210" },
    { label: "GitHub", url: "https://github.com/naghamhaimanahmed" },
  ],

  about: [
    "I'm a Front-End Developer with 3+ years of experience turning UI/UX designs and business requirements into clean, reusable and responsive interfaces using HTML, CSS, JavaScript, TypeScript and React. I currently work remotely as a Front-End Developer at Nexus Software Development (Ajman, UAE), integrating REST APIs and collaborating closely with designers and back-end developers.",
    "I'm also a Computer Science Teaching Assistant at the Arab Academy for Science, Technology & Maritime Transport and an AI Instructor with AMIDEAST's ECRAiL program, where I teach AI and Machine Learning fundamentals through hands-on labs and projects. I'm currently pursuing my Master's in Computer Science.",
  ],

  stats: [
    { value: "3+", label: "Years in front-end" },
    { value: "2+", label: "Years teaching CS & AI" },
    { value: "3.68", label: "GPA, B.Sc. (High Honors)" },
  ],

  skillGroups: [
    { title: "Front-End", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js"] },
    { title: "Styling & UI", items: ["Tailwind CSS", "Bootstrap", "Responsive Design"] },
    { title: "Tools & APIs", items: ["Git & GitHub", "REST APIs", "Figma"] },
    { title: "AI & Systems", items: ["AI Fundamentals", "Machine Learning Concepts", "Linux (basic)", "TCP/IP · DNS · DHCP", "IT Support"] },
  ],

  projects: [
    {
      title: "Nexus Software Development — Company Website",
      label: "Professional Work",
      description:
        "Developed the official website for Nexus Software Development, a software company based in Ajman, UAE — a responsive, user-friendly site presenting the company's services and brand.",
      tags: ["React", "TypeScript", "Responsive UI"],
      image: "",
      demo: "https://www.nexuscodes.tech/",
      code: "",
    },
    {
      title: "Indoor Positioning with Low-Cost LiDAR",
      label: "Graduation Project",
      description:
        "Indoor localization and mapping system using low-cost LiDAR and the Hector SLAM algorithm for pose estimation — enabling affordable positioning for robotics and tracking applications.",
      tags: ["LiDAR", "Hector SLAM", "Robotics", "Mapping"],
      image: "",
      demo: "",
      code: "",
    },
  ],

  experience: [
    {
      period: "2026 — Present",
      title: "Front-End Developer (Remote)",
      place: "Nexus Software Development — Ajman, UAE",
      points: [
        "Develop responsive, user-friendly web interfaces with HTML, CSS, JavaScript, TypeScript and React.",
        "Translate UI/UX designs and business requirements into reusable, maintainable components.",
        "Integrate front-end applications with REST APIs and collaborate with back-end developers and designers.",
        "Optimize performance and ensure cross-browser and mobile compatibility.",
      ],
    },
    {
      period: "May 2026 — Jun 2026",
      title: "AI Instructor — ECRAiL Program",
      place: "AMIDEAST — Egypt",
      points: [
        "Delivered Artificial Intelligence training as part of the AMIDEAST ECRAiL program.",
        "Taught core AI and Machine Learning concepts through lectures, hands-on labs and practical projects.",
        "Mentored participants on applying AI tools to real-world problems and assessed their project work.",
      ],
    },
    {
      period: "2025 — Present",
      title: "Freelancing Coach",
      place: "Elharefa Company",
      points: ["Train students in the technical and personal skills required by the job market, including freelancing and client management."],
    },
    {
      period: "2023 — Present",
      title: "Teaching Assistant, Computer Science",
      place: "Arab Academy for Science, Technology & Maritime Transport",
      points: [
        "Deliver tutorials and labs in Web Programming, OOP, Advanced Databases, Digital Logic, Human-Centered Software Design and more.",
        "Mentor students on software projects, especially front-end development.",
        "Organize workshops on modern web development practices.",
      ],
    },
    {
      period: "2021 — Present",
      title: "Front-End Developer (Freelance)",
      place: "Self-employed",
      points: [
        "Design and build responsive websites with HTML, CSS, JavaScript and React.",
        "Translate client business requirements into intuitive user interfaces.",
        "Optimize performance and ensure cross-browser compatibility while managing multiple projects under tight deadlines.",
      ],
    },
    {
      period: "Feb 2022 — Jan 2024",
      title: "Researcher",
      place: "Action Restitution Africa (ARA)",
      points: ["Built datasets, wrote reports, reviewed studies, and contributed web programming and graphic design."],
    },
  ],

  education: [
    {
      period: "2024 — Present",
      title: "M.Sc. Computer Science",
      place: "Arab Academy for Science, Technology & Maritime Transport",
    },
    {
      period: "2019 — 2023",
      title: "B.Sc. Computing & Information Technology",
      place: "Arab Academy for Science, Technology & Maritime Transport",
      note: "Graduated with High Honors — GPA 3.68 / 4.0",
    },
  ],

  courses: [
    { name: "Google IT Support Professional Certificate", by: "Coursera", year: "2025" },
    { name: "Introduction to Networking", by: "Cisco Academy", year: "2025" },
    { name: "Winter School on Quantum Information & Computing", by: "", year: "2025" },
    { name: "Artificial Intelligence", by: "AMIT", year: "2024" },
    { name: "Processing Technology of Agricultural & Livestock Products", by: "Training course — China", year: "2024" },
    { name: "Web Design Track", by: "ITI", year: "2021 · 2022" },
    { name: "ACM Training", by: "Online", year: "2022" },
    { name: "Freelancing", by: "Online", year: "2021" },
    { name: "Mobile Application Development", by: "YAT", year: "2020" },
  ],

  activities: [
    "Problem-Solving Coach — ICPC AAST Aswan community",
    "Head of Media & Marketing — GDG student chapter and IEEE student branch",
    "Member — Normandy ROV Team, AASTMT",
    "Web Design Basics Trainer for college newcomers",
    "Member — Marketing Design Team, AASTMT Aswan branch",
  ],
};
