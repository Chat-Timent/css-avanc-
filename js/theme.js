// bascule du mode sombre, classe theme-dark sur <html>, stockée dans localStorage
const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");
const STORAGE_KEY = "theme";

function applyTheme(isDark) {
  root.classList.toggle("theme-dark", isDark);

  if (toggle) {
    toggle.textContent = isDark ? "Mode clair" : "Mode sombre";
    toggle.setAttribute("aria-pressed", String(isDark));
  }
}

applyTheme(localStorage.getItem(STORAGE_KEY) === "dark");

if (toggle) {
  toggle.addEventListener("click", () => {
    const isDark = !root.classList.contains("theme-dark");
    localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    applyTheme(isDark);
  });
}