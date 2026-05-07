export default () => ({
  init() {
    const pathname = location.pathname;

    const menuLinks = document.querySelectorAll("#menu-container a");

    if (menuLinks.length) {
      menuLinks.forEach((link) => {
        if (link.getAttribute("href") === pathname) {
          link.classList.add("!text-base-content");
        }
      });
    }
  },
});