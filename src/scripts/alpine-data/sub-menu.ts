export default (id: string) => ({
  open: false,

  init() {
    const pathname = location.pathname;

    const links = document.querySelectorAll(`#item-${id} ul li a`);

    if (links.length) {
      links.forEach((link) => {
        if (link.getAttribute("href") === pathname) {
          this.open = true;
        }
      });
    }
  },
});