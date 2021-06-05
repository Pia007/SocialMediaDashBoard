function toggleTheme() {
    window.theme = typeof window.theme === "string" ? window.theme : "light";
    let switchToTheme = window.theme === "light" ? "dark" : "light";
    window.theme = switchToTheme;
    document.querySelector("body").setAttribute("theme", switchToTheme);
  }
  

  //Function to change the theme from light to dark.
    // Set the default: The theme is strictly  a string and the value is the current value(light or dark).
        // If that is not true, then the theme is light.
    // If the window theme is strictly light then switch to dark theme when the toggle is moved, otherwise the theme remains light.
    // Finally, set the theme to the value of switchToTheme