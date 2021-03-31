import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          maxWidth: "1200px",
          margin: "0 auto",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#0A7964",
      light: "#18BFA0",
    },
    secondary: {
      main: "#DB397D",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    fontWeightBlack: 900,
    h5: {
      fontWeight: 900,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      fontSize: "16px",
      textTransform: "capitalize",
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
