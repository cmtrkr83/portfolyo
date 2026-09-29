// Yılı otomatik yaz
document.getElementById("year").textContent = new Date().getFullYear();

// Tema değiştirme
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("ct-theme", next); } catch (e) {}
});

// Mobil menü
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("siteNav");
toggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);
