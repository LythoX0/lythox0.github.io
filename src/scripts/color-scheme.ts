type ColorSchemeType = "system" | "dark" | "light";

export function initColorScheme() {
  const { enable_change, default: defaultColorScheme } = window.walker.colorSchemeSettings;
  window.walker.activeColorScheme =
    (enable_change && (localStorage.getItem("color-scheme") as ColorSchemeType)) || (defaultColorScheme as ColorSchemeType);
  applyColorScheme(window.walker.activeColorScheme as ColorSchemeType, enable_change);
}

export function applyColorScheme(colorScheme: ColorSchemeType, store: boolean) {
  const { default_light, default_dark } = window.walker.colorSchemeSettings;
  const actualColorScheme = colorScheme === "system" ? getSystemColorScheme() : colorScheme;
  const theme = actualColorScheme === "dark" ? default_dark : default_light;

  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.colorScheme = colorScheme === "system" ? getSystemColorScheme() : colorScheme;
  if (store) {
    localStorage.setItem("color-scheme", colorScheme);
  }
}

export function getSystemColorScheme(): ColorSchemeType {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (window.walker.activeColorScheme === "system") {
    applyColorScheme("system", false);
  }
});