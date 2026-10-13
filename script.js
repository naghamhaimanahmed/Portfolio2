const UI = {
  ar: {
    about: "عنّي", skills: "المهارات", projects: "المشاريع", experience: "الخبرة والتعليم",
    contact: "تواصل معايا", hello: "أهلاً، أنا", seeWork: "شوف شغلي", contactMe: "كلّمني",
    downloadCv: "تحميل الـ CV", demo: "عرض مباشر", code: "الكود",
    contactText: "عندك مشروع أو فرصة شغل؟ يسعدني أسمع منك!",
  },
  en: {
    about: "About", skills: "Skills", projects: "Projects", experience: "Experience & Education",
    contact: "Contact", hello: "Hi, I'm", seeWork: "See my work", contactMe: "Get in touch",
    downloadCv: "Download CV", demo: "Live demo", code: "Code",
    contactText: "Have a project or an opportunity? I'd love to hear from you!",
  },
};

const $ = (sel) => document.querySelector(sel);
const t = (value, lang) => (value && typeof value === "object" ? value[lang] : value) ?? "";
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function storage(key, value) {
  try {
    if (value === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, value);
  } catch { return null; }
}

function initials(name) {
  const words = name.split(/\s+/).filter(Boolean);
  return [words[0], words.length > 1 ? words.at(-1) : ""].map((w) => w?.[0] ?? "").join("").toUpperCase();
}

function socialLinks(list) {
  return list.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");
}

function render(lang) {
  const P = PORTFOLIO;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = `${t(P.name, lang)} — ${t(P.role, lang)}`;
  $("#langToggle").textContent = lang === "ar" ? "EN" : "ع";

  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = UI[lang][el.dataset.i18n]));
  document.querySelectorAll("[data-field]").forEach((el) => {
    const key = el.dataset.field;
    el.textContent = key === "initials" ? initials(t(P.name, "en")) : t(P[key], lang);
  });

  $("#heroPhoto").innerHTML = P.photo
    ? `<img src="${esc(P.photo)}" alt="${esc(t(P.name, lang))}" />`
    : `<div>${esc(initials(t(P.name, "en")))}</div>`;

  const cv = $("#cvBtn");
  cv.hidden = !P.cv;
  if (P.cv) cv.href = P.cv;

  $("#heroSocials").innerHTML = socialLinks(P.socials);
  $("#footerSocials").innerHTML = socialLinks(P.socials);

  $("#stats").innerHTML = P.stats
    .map((s) => `<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(t(s.label, lang))}</span></div>`)
    .join("");

  $("#skillsList").innerHTML = P.skills.map((s) => `<li>${esc(s)}</li>`).join("");

  $("#projectsGrid").innerHTML = P.projects
    .map((p) => {
      const title = t(p.title, lang);
      const img = p.image
        ? `<img class="card__img" src="${esc(p.image)}" alt="${esc(title)}" loading="lazy" />`
        : `<div class="card__img">${esc(title.charAt(0))}</div>`;
      const links = [
        p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">${UI[lang].demo} ↗</a>` : "",
        p.code ? `<a href="${esc(p.code)}" target="_blank" rel="noopener">${UI[lang].code} ↗</a>` : "",
      ].join("");
      return `<article class="card reveal">${img}
        <div class="card__body">
          <h3>${esc(title)}</h3>
          <p>${esc(t(p.description, lang))}</p>
          <div class="tags">${p.tags.map((tag) => `<span>${esc(tag)}</span>`).join("")}</div>
          <div class="card__links">${links}</div>
        </div></article>`;
    })
    .join("");

  $("#timeline").innerHTML = P.experience
    .map((e) => {
      const desc = t(e.description, lang);
      return `<li class="reveal">
        <time>${esc(t(e.period, lang))}</time>
        <h3>${esc(t(e.title, lang))}</h3>
        <div class="place">${esc(t(e.place, lang))}</div>
        ${desc ? `<p>${esc(desc)}</p>` : ""}
      </li>`;
    })
    .join("");

  const email = $("#emailBtn");
  email.href = `mailto:${P.email}`;
  email.textContent = P.email;

  observeReveals();
}

let observer;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }
  observer ??= new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => observer.observe(el));
}

// ---------- Theme ----------
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  storage("theme", theme);
}
setTheme(storage("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
$("#themeToggle").addEventListener("click", () =>
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark")
);

// ---------- Language ----------
let lang = storage("lang") || "ar";
$("#langToggle").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  storage("lang", lang);
  render(lang);
});

// ---------- Mobile menu ----------
const links = $("#navLinks");
$("#menuToggle").addEventListener("click", () => links.classList.toggle("open"));
links.addEventListener("click", (e) => e.target.tagName === "A" && links.classList.remove("open"));

$("#year").textContent = new Date().getFullYear();
render(lang);
