import { createTheme } from "@material-ui/core/styles";

const arcBlue = "#000000";
const arcOrange = "#FFFFFF";

export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 400,
      fontSize: "1rem",
    },
  },
});
