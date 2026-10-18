// Light / dark switch. Remembers your choice in this browser.

// 1. Pick the theme: saved choice first, otherwise the device's setting.
var saved = localStorage.getItem("theme");
var deviceIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
var theme = saved || (deviceIsDark ? "dark" : "light");
document.documentElement.setAttribute("data-theme", theme);

// 2. When the button is clicked, flip the theme and remember it.
document.addEventListener("click", function (event) {
  if (event.target.id !== "theme-button") return;

  theme = (theme === "dark") ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});
