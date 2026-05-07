export const SITE_CONFIG = {
  title: "LythoX",
  subtitle: "保持微笑",
  url: "https://lythox0.github.io",
  logo: "/assets/avatar.jpg",
  colorSchemeSettings: {
    default: "system" as const,
    default_light: "autumn",
    default_dark: "dracula",
    enable_change: true,
    switcher_type: "switch" as const,
    enable_view_transition_api: true,
  },
  sidebar: {
    title: "",
    description: "",
    avatar_shape: "rounded-full" as const,
    enabled_login_button: false,
    search_mode: "modal" as const,
  },
  styles: {
    menu_position: "sidebar" as const,
    content_width: "1200px",
    color_scheme: {
      enable_change: true,
      switcher_type: "switch" as const,
    },
  },
  menu: [
    { name: "首页", href: "/" },
    { name: "文章", href: "/articles" },
    { name: "归档", href: "/archives" },
    { name: "关于", href: "/about" },
  ],
  footer: {
    copyright: "",
  },
};
