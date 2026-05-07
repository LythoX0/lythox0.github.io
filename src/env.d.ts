/// <reference types="astro/client" />

declare module 'alpinejs' {
  const Alpine: any;
  export default Alpine;
}

declare module 'overlayscrollbars' {
  export const OverlayScrollbars: any;
  export const ClickScrollPlugin: any;
  export const ScrollbarsHidingPlugin: any;
  export const SizeObserverPlugin: any;
}

interface Window {
  Alpine: any;
  walker: {
    colorSchemeSettings: {
      default: string;
      default_light: string;
      default_dark: string;
      enable_change: boolean;
      switcher_type: string;
      enable_view_transition_api: boolean;
    };
    activeColorScheme: string;
  };
}
