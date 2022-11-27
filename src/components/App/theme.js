import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = () =>
  responsiveFontSizes(
    createTheme({
      palette: {
        primary: {
          main: "#982121",
          light: "#E57777",
          dark: "#982121",
        },
        secondary: {
          main: "#FF9E00",
          light: "#CC7E00",
          dark: "#FF611D",
        },
        text: {
          secondary: "#982121",
        },
      },
      typography: {
        button: {
          textTransform: "none",
        },
        fontFamily: `"Signika", "Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: 16,
      },
    })
  );

export default theme;
