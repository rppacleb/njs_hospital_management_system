import { useTheme } from "@mui/material";

const useMediaQuery = (key) => {
  const theme = useTheme();

  return {
    isMobS: theme?.breakpoints[key]("xs"),
    isMobM: theme?.breakpoints[key]("sm"),
    isTab: theme?.breakpoints[key]("md"),
    isLapS: theme?.breakpoints[key]("lg"),
    isDefault: theme?.breakpoints[key]("container"),
    isLapM: theme?.breakpoints[key]("xl"),
    isLapL: theme?.breakpoints[key]("xxl"),
    flexWrapCard: {
      [theme?.breakpoints[key]("xl")]: {
        flex: "0 0 32%",
      },
      [theme.breakpoints.down(1045)]: {
        flex: "0 0 48.6%",
      },
      [theme.breakpoints.down(923)]: {
        flex: "0 0 48.45%",
      },
      [theme.breakpoints.down(840)]: {
        flex: "0 0 48.3%",
      },
      [theme.breakpoints.down(771)]: {
        flex: "0 0 100%",
      },
    },
  };
};

export default useMediaQuery;
