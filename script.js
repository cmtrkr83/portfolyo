// Yılı otomatik yaz
document.getElementById("year").textContent = new Date().getFullYear();

// Mobil menü
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("siteNav");
toggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);
