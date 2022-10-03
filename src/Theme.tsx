import theme from "styled-theming";

export const PrimaryBackground = theme("theme", {
  light: "#ECEDF0",
  dark: "#232325",
});

export const SecondaryBackground = theme("theme", {
  light: "#FFFFFF",
  dark: "#18181A",
});

export const SecondaryTextColor = theme("theme", {
  light: "#72747D",
  dark: "#fff",
});

export const PrimaryTextColor = theme("theme", {
  light: "#72747D",
  dark: "#fff",
});
const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
