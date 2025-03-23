import { colors } from "./colors";

export const themes: { light: Theme; dark: Theme } = {
  light: {
    name: "light",
    primary: colors.primaryLight,
    accent: colors.accent,
    secondary: colors.secondary,
    background: colors.backgroundLight,
    text: colors.textLight,
    card: colors.cardLight,
    button: colors.buttonLight,
    buttonText: colors.buttonTextLight,
    inputBackground: colors.inputBackgroundLight,
    inputText: colors.inputTextLight,
    border: colors.borderLight,
  },
  dark: {
    name: "dark",
    primary: colors.primaryDark,
    accent: colors.accent,
    secondary: colors.secondary,
    background: colors.backgroundDark,
    text: colors.textDark,
    card: colors.cardDark,
    button: colors.buttonDark,
    buttonText: colors.buttonTextDark,
    inputBackground: colors.inputBackgroundDark,
    inputText: colors.inputTextDark,
    border: colors.borderDark,
  },
};
