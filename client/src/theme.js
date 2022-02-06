import { createTheme } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

function getTheme(themeMode) {
  return createTheme({
    palette: {
      mode: themeMode,
      ...(themeMode === "light"
        ? {
            background: {
              light: grey[200]
            },
            navigation: {
              main: blue[700]
            },
            chartPrimary: {
              main: "#1976d2"
            },
            chartSecondary: {
              main: "#9c27b0"
            },
            chartBorderPrimary: {
              main: "#42a5f5"
            },
            chartBorderSecondary: {
              main: "#9c27b0"
            },
            chartCurrent: {
              main: "#fcae1e"
            }
          }
        : {
            background: {
              default: grey[900],
              light: grey[800]
            },
            navigation: {
              main: grey[900]
            },
            chartPrimary: {
              main: "#42a5f5"
            },
            chartSecondary: {
              main: "#ab74bc"
            },
            chartBorderPrimary: {
              main: "#1565c0"
            },
            chartBorderSecondary: {
              main: "#7b1fa2"
            },
            chartCurrent: {
              main: "#f9812a"
            }
          })
    }
  });
}

export default getTheme;
