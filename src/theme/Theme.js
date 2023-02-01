import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    input: "#1f7da9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    darkTeal: "#3c7f8b",
  },
  fonts: ["Arial", "sans-serif"],
  fontSizes: {
    text: "1rem",
    subtitles: "2rem",
    titles: "3rem",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
