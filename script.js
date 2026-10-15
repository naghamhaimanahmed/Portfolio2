const P = PORTFOLIO;
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

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

const projectIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`;

// ---------- Render content ----------
function render() {
  $("#logoName").textContent = P.firstName;
  $("#heroName").textContent = P.name;
  $("#heroTagline").textContent = P.tagline;
  $("#heroLocation").textContent = `📍 ${P.location}`;
  $("#footerName").textContent = P.name;
  $("#year").textContent = new Date().getFullYear();

  $("#heroPhoto").innerHTML = P.photo
    ? `<img src="${esc(P.photo)}" alt="${esc(P.name)}" />`
    : `<div class="photo__initials">${esc(initials(P.name))}</div>`;

  const cv = $("#cvBtn");
  cv.hidden = !P.cv;
  if (P.cv) cv.href = P.cv;

  $("#aboutText").innerHTML = P.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#stats").innerHTML = P.stats
    .map((s) => `<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`)
    .join("");

  $("#skillGroups").innerHTML = P.skillGroups
    .map((g, i) => `<div class="skill-card reveal" style="transition-delay:${i * 100}ms">
        <h3><span class="mono">0${i + 1}</span>${esc(g.title)}</h3>
        <ul class="chips">${g.items.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      </div>`)
    .join("");

  $("#timeline").innerHTML = P.experience
    .map((e) => `<li class="reveal">
        <time>${esc(e.period)}</time>
        <h3>${esc(e.title)}</h3>
        <div class="place">${esc(e.place)}</div>
        ${e.points?.length ? `<ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
      </li>`)
    .join("");

  $("#education").innerHTML = P.education
    .map((e) => `<div class="edu-item reveal">
        <time>${esc(e.period)}</time>
        <h4>${esc(e.title)}</h4>
        <p>${esc(e.place)}</p>
        ${e.note ? `<p class="note">${esc(e.note)}</p>` : ""}
      </div>`)
    .join("");

  $("#courses").innerHTML = P.courses
    .map((c) => `<li><span>${esc(c.name)}${c.by ? `<small>${esc(c.by)}</small>` : ""}</span><span>${esc(c.year)}</span></li>`)
    .join("");

  $("#activities").innerHTML = (P.activities || []).map((a) => `<li>${esc(a)}</li>`).join("");

  $("#projectsGrid").innerHTML = P.projects
    .map((p, i) => {
      const links = [
        p.code ? `<a href="${esc(p.code)}" target="_blank" rel="noopener">Code ↗</a>` : "",
        p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">Live ↗</a>` : "",
      ].join("");
      return `<article class="card reveal" style="transition-delay:${i * 100}ms">
        <div class="card__top">${projectIcon}<div class="card__links">${links}</div></div>
        ${p.image ? `<img class="card__img" src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" />` : ""}
        ${p.label ? `<span class="card__label">${esc(p.label)}</span>` : ""}
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      </article>`;
    })
    .join("");

  const email = $("#emailBtn");
  email.href = `mailto:${P.email}`;
  $("#socials").innerHTML = [
    ...P.socials.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>`),
    `<a href="mailto:${esc(P.email)}">${esc(P.email)}</a>`,
  ].join("");
}

// ---------- Typewriter: rotating roles ----------
function typeRoles() {
  const el = $("#typedRole");
  if (reducedMotion) { el.textContent = P.roles[0]; return; }
  let role = 0, char = 0, deleting = false;
  (function tick() {
    const word = P.roles[role];
    char += deleting ? -1 : 1;
    el.textContent = word.slice(0, char);
    let delay = deleting ? 40 : 85;
    if (!deleting && char === word.length) {
      if (P.roles.length === 1) return; // single title: type it once and keep it
      deleting = true; delay = 1800;
    }
    else if (deleting && char === 0) { deleting = false; role = (role + 1) % P.roles.length; delay = 300; }
    setTimeout(tick, delay);
  })();
}

// ---------- Code editor typing animation ----------
const S = (t) => ["tk-str", `"${t}"`];
const CODE = [
  ["tk-com", "// building interfaces people love\n"],
  ["tk-kw", "const "], ["tk-var", "developer"], ["tk-pun", " = {\n  "],
  ["tk-prop", "name"], ["tk-pun", ": "], S(P.firstName), ["tk-pun", ",\n  "],
  ["tk-prop", "role"], ["tk-pun", ": "], S(P.roles[0]), ["tk-pun", ",\n  "],
  ["tk-prop", "company"], ["tk-pun", ": "], S("Nexus Software"), ["tk-pun", ",\n  "],
  ["tk-prop", "stack"], ["tk-pun", ": ["], S("React"), ["tk-pun", ", "], S("TypeScript"), ["tk-pun", "],\n  "],
  ["tk-prop", "experience"], ["tk-pun", ": "], S("3+ years"), ["tk-pun", ",\n  "],
  ["tk-prop", "available"], ["tk-pun", ": "], ["tk-bool", "true"], ["tk-pun", ",\n};"],
];

function typeCode() {
  const code = $("#editorCode");
  if (reducedMotion) {
    code.innerHTML = CODE.map(([c, t]) => `<span class="${c}">${esc(t)}</span>`).join("");
    return;
  }
  let tok = 0, ch = 0, span = null;
  (function tick() {
    if (tok >= CODE.length) {
      setTimeout(() => { code.innerHTML = ""; tok = 0; ch = 0; span = null; tick(); }, 6000);
      return;
    }
    const [cls, text] = CODE[tok];
    if (ch === 0) { span = document.createElement("span"); span.className = cls; code.appendChild(span); }
    span.textContent += text[ch++];
    if (ch >= text.length) { tok++; ch = 0; }
    setTimeout(tick, text[ch - 1] === "\n" ? 180 : 28 + Math.random() * 40);
  })();
}

// ---------- Floating code symbols in the background ----------
function floatingSymbols() {
  if (reducedMotion) return;
  const symbols = ["</>", "{ }", "=>", "( )", "[ ]", "#", "&&", "</div>", ";", "css", "<>", "fn()", "npm", "===", "jsx"];
  const box = $("#bgSymbols");
  const count = window.innerWidth < 700 ? 10 : 20;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.textContent = symbols[i % symbols.length];
    s.style.left = `${Math.random() * 100}%`;
    s.style.fontSize = `${14 + Math.random() * 22}px`;
    s.style.animationDuration = `${18 + Math.random() * 22}s`;
    s.style.animationDelay = `${-Math.random() * 40}s`;
    box.appendChild(s);
  }
}

// ---------- Scroll reveal ----------
function observeReveals() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || reducedMotion) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  els.forEach((el) => observer.observe(el));
}

// ---------- Theme ----------
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  storage("theme", theme);
}
setTheme(storage("theme") || "dark");
$("#themeToggle").addEventListener("click", () =>
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark")
);

// ---------- Mobile menu ----------
const links = $("#navLinks");
$("#menuToggle").addEventListener("click", () => links.classList.toggle("open"));
links.addEventListener("click", (e) => e.target.closest("a") && links.classList.remove("open"));

render();
observeReveals();
typeRoles();
typeCode();
floatingSymbols();
