// =====================================================================
//  All portfolio content lives here — edit this file and the site updates.
// =====================================================================

const PORTFOLIO = {
  name: "Nagham Haiman Ahmed",
  firstName: "Nagham",
  // Rotating titles shown in the hero (typewriter effect)
  roles: ["Front-End Developer", "CS Teaching Assistant", "Freelancing Coach"],
  tagline:
    "I build fast, accessible and responsive web interfaces with React and TypeScript — and teach the next generation of developers to do the same.",
  location: "Cairo, Egypt",
  email: "naghamhaiman2@gmail.com",
  cv: "assets/Nagham-Haiman-CV.pdf", // set to "" to hide the CV button
  photo: "assets/me.jpg", // set to "" to show initials instead

  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nagham-haiman-89bb48210" },
    { label: "GitHub", url: "https://github.com/naghamhaimanahmed" },
  ],

  about: [
    "I'm a Front-End Developer with 3+ years of experience turning business requirements into clean, responsive and intuitive interfaces using HTML, CSS, JavaScript, TypeScript and React. I care about performance, cross-browser compatibility and the small details that make a product feel polished.",
    "Alongside client work, I'm a Computer Science Teaching Assistant at the Arab Academy for Science, Technology & Maritime Transport, where I teach Web Programming, OOP and Databases, mentor student front-end projects and run workshops on modern web development. I'm currently pursuing my Master's in Computer Science.",
  ],

  stats: [
    { value: "3+", label: "Years in front-end" },
    { value: "2+", label: "Years teaching CS" },
    { value: "3.68", label: "GPA, B.Sc. (High Honors)" },
  ],

  skillGroups: [
    { title: "Front-End", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Responsive Design"] },
    { title: "Styling & UI", items: ["Tailwind CSS", "Bootstrap", "Figma"] },
    { title: "Tools & More", items: ["Git & GitHub", "REST APIs", "Linux (basic)", "Networking (TCP/IP, DNS, DHCP)"] },
  ],

  projects: [
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
      period: "2025 — Present",
      title: "Freelancing Coach",
      place: "Elharefa Company",
      points: ["Train students in the technical and personal skills required by today's job market."],
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
    { name: "Google IT Support Certificate", by: "Coursera", year: "2025" },
    { name: "Introduction to Networking", by: "Cisco Academy", year: "2025" },
    { name: "Winter School on Quantum Information & Computing", by: "", year: "2025" },
    { name: "Artificial Intelligence", by: "AMIT", year: "2024" },
    { name: "Web Design Track", by: "ITI", year: "2021 · 2022" },
    { name: "ACM Training", by: "Online", year: "2022" },
    { name: "Freelancing", by: "Online", year: "2021" },
    { name: "Mobile Application Development", by: "YAT", year: "2020" },
  ],
};
