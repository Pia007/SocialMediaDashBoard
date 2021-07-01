function toggleTheme() {
    window.theme = typeof window.theme === "string" ? window.theme : "dark";
    let switchToTheme = window.theme === "dark" ? "light" : "dark";
    window.theme = switchToTheme;
    document.querySelector("body").setAttribute("theme", switchToTheme);
  }
  

  //Function to change the theme from dark to light.
    // Set the default: The theme is strictly  a string and the value is the current value(light or dark).
        // If that is not true, then the theme is dark.
    // If the window theme is strictly dark, then switch to light theme when the toggle is moved, otherwise the theme remains dark.
    // Finally, set the theme to the value of switchToTheme
