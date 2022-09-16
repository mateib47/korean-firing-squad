import { createTheme, responsiveFontSizes } from "@mui/material";

let globalTheme = createTheme();
globalTheme = responsiveFontSizes(globalTheme);

export const theme = createTheme({
  ...globalTheme,
  palette: {
    primary: {
      main: "#13678A",
    },
    secondary: {
      main: "#45C4B0",
    },
    background: {
      default: "#fff",
    },
    text: {
      default: "#000",
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          color: '#000',
        },
      },
    },
  },
});
