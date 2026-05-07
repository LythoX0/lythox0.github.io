interface ColorSchemeSwitcher {}

(function initColorSchemeSwitcher() {
  const template = document.getElementById("color-scheme-switcher-tpl");
  if (!template) return;

  const containers = document.querySelectorAll("[data-color-scheme-switcher]");
  containers.forEach((container) => {
    const type = container.getAttribute("data-color-scheme-switcher") || "switch";
    const fragment = (template as HTMLTemplateElement).content.cloneNode(true) as DocumentFragment;
    const wrapper = fragment.querySelector(`[data-mode="${type}"]`) as HTMLElement | null;
    if (!wrapper) return;
    wrapper.classList.add("!grid");

    const checkbox = wrapper.querySelector("input[type=checkbox]") as HTMLInputElement | null;
    if (!checkbox) return;

    let checked =
      window.walker.activeColorScheme === "system"
        ? getSystemColorScheme() === "dark"
        : window.walker.activeColorScheme === "dark";
    checkbox.checked = checked;

    function getSystemColorScheme() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function applyColorScheme(colorScheme: "system" | "dark" | "light", store: boolean) {
      const { default_light, default_dark } = window.walker.colorSchemeSettings;
      const actualColorScheme = colorScheme === "system" ? getSystemColorScheme() : colorScheme;
      const theme = actualColorScheme === "dark" ? default_dark : default_light;
      document.documentElement.dataset.theme = theme;
      document.documentElement.dataset.colorScheme =
        colorScheme === "system" ? getSystemColorScheme() : colorScheme;
      if (store) {
        localStorage.setItem("color-scheme", colorScheme);
      }
    }

    checkbox.addEventListener("click", (event) => {
      const newScheme: "dark" | "light" = checked ? "light" : "dark";

      const isAppearanceTransition =
        (document as any).startViewTransition &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
        window.walker.colorSchemeSettings.enable_view_transition_api;

      if (!isAppearanceTransition) {
        applyColorScheme(newScheme, true);
        checked = !checked;
        checkbox.checked = checked;
        return;
      }

      const x = event.clientX;
      const y = event.clientY;
      const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

      checked = !checked;
      checkbox.checked = checked;

      const transition = (document as any).startViewTransition(() => {
        applyColorScheme(newScheme, true);
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        document.documentElement.animate(
          {
            clipPath: newScheme === "dark" ? clipPath : [...clipPath].reverse(),
          },
          {
            duration: 350,
            easing: "ease-in",
            pseudoElement:
              newScheme === "dark"
                ? "::view-transition-new(root)"
                : "::view-transition-old(root)",
          },
        );
      });
    });

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (window.walker.activeColorScheme === "system") {
        checked = getSystemColorScheme() === "dark";
        checkbox.checked = checked;
      }
    });

    container.innerHTML = "";
    container.appendChild(wrapper);
  });
})();
