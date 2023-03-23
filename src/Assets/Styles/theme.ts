import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
export const theme = extendTheme({
  config,
  styles: {
    global: {
      "html, body": {
        bg: "background",
        color: "matteWhite",
      },
    },
  },
  colors: {
    deepSkyBlue: "#00bfff",
    razzmatazz: "#ff0066",
    blackOut: "#222222",
    tangerine: "#ffcc00",
    lightGray: "#b2b2b2",
  },
  semanticTokens: {
    colors: {
      background: {
        _dark: "blackOut",
        _light: "white",
      },
      "menu-background": {
        _dark: "rgba(255, 0, 102, 0.55)",
        _light: "rgba(0, 191, 255, 0.55)",
      },
      "main-text": {
        _dark: "lightGray",
        _light: "lightGray",
      },
      "secondary-text": {
        _dark: "tangerine",
        _light: "tangerine",
      },
      title: {
        _dark: "razzmatazz",
        _light: "razzmatazz",
      },
      subtitle: {
        _dark: "tangerine",
        _light: "tangerine",
      },
      link: {
        _dark: "white",
        _light: "white",
      },
      "link-hover": {
        _dark: "deepSkyBlue",
        _light: "razzmatazz",
      },
      icon: {
        _dark: "white",
        _light: "blackOut",
      },
      "icon-hover": {
        _dark: "tangerine",
        _light: "blackOut",
      },
      "timeline-card": {
        _dark: "razzmatazz",
        _light: "deepSkyBlue",
      },
      "timeline-icon": {
        _dark: "white",
        _light: "blackOut",
      },
    },
  },
});
