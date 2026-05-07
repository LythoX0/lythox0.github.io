import Alpine from "alpinejs";
import menu from "../scripts/alpine-data/menu";
import subMenu from "../scripts/alpine-data/sub-menu";

export function initAlpine() {
  window.Alpine = Alpine;

  Alpine.data("app", () => ({
    menuVisible: false,
    init() {
      document.body.classList.remove("hidden");
    },
    openMenu: function () {
      this.menuVisible = true;
    },
    closeMenu: function () {
      this.menuVisible = false;
    },
  }));

  Alpine.data("menu", menu);
  Alpine.data("subMenu", subMenu);

  Alpine.start();
}
