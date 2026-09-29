// Yılı otomatik yaz
document.getElementById("year").textContent = new Date().getFullYear();

// Tema değiştirme
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("ct-theme", next); } catch (e) {}
});

// Scroll animasyonları (görünüme girince belir)
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Menüde aktif bölüm vurgusu
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        nav.querySelectorAll("a").forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
["hakkimda", "yetenekler", "hizmetler", "projeler", "iletisim"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

// Mobil menü
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("siteNav");
toggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);
