function toggleTheme() {
    window.theme = typeof window.theme === "string" ? window.theme : "light";
    var switchToTheme = window.theme === "light" ? "dark" : "light";
    window.theme = switchToTheme;
    document.querySelector("body").setAttribute("theme", switchToTheme);
  }
  