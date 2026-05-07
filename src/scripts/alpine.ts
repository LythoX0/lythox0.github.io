import Alpine from "alpinejs";

import menu from "./alpine-data/menu";
import subMenu from "./alpine-data/sub-menu";

window.Alpine = Alpine;

Alpine.data("app", () => ({
  menuVisible: false,
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