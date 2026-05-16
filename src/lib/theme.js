export function applyTheme(storageKey, nextTheme) {
  const theme = nextTheme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(storageKey, theme);
  return theme;
}

export function initTheme(storageKey) {
  const stored = localStorage.getItem(storageKey);
  if (stored === "light" || stored === "dark") {
    return applyTheme(storageKey, stored);
  }

  return applyTheme(storageKey, window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
}

export function toggleTheme(storageKey, currentTheme) {
  return applyTheme(storageKey, currentTheme === "dark" ? "light" : "dark");
}
