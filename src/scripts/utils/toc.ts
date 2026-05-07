import tocbot from "tocbot";

export function generateToc(contentId: string, tocSelector: string) {
  const content = document.getElementById(contentId);
  const titles = content?.querySelectorAll("h1, h2, h3, h4");
  if (!titles?.length) {
    const tocContainer = document.querySelector(tocSelector);
    tocContainer?.parentElement?.remove();
    return;
  }
  tocbot.init({
    tocSelector: tocSelector,
    contentSelector: `#${contentId}`,
    headingSelector: "h1, h2, h3, h4",
    extraListClasses: "space-y-1",
    extraLinkClasses:
      "group flex items-center justify-between rounded py-1 px-1.5 transition-all hover:bg-base-200/80 text-sm opacity-80",
    activeLinkClass: "is-active-link",
    collapseDepth: 6,
    headingsOffset: 100,
    scrollSmooth: true,
    scrollSmoothOffset: 0,
  });
}