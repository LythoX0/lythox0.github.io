document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopButton = document.getElementById("btn-scroll-to-top");

  if (!scrollToTopButton) {
    return;
  }

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", _handleScroll);

  function _handleScroll() {
    if (!scrollToTopButton) {
      return;
    }

    const isDown = window.scrollY > 300;

    if (isDown) {
      scrollToTopButton.style.opacity = "1";
    } else {
      scrollToTopButton.style.opacity = "0";
    }
  }
});

export {};