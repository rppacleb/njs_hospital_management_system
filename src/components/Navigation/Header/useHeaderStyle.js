/* eslint-disable react-hooks/rules-of-hooks */
import { FLEXBOX } from "@src/constants/Snippet";
import { useTheme, useMediaQuery } from "@mui/material";
import mediaQuery from "@src/constants/useMediaQuery";

const useHeaderStyle = (scrolled) => {
  const { isDefault, isTab } = mediaQuery("down");
  const hideMenus = useMediaQuery(isDefault);
  const theme = useTheme();

  return {
    hideMenus,
    mainContainer: {
      ...FLEXBOX.allCenter,
      background: theme.palette.complementary.dark2,
      boxShadow: scrolled ? theme.palette.backShadow.lightOrDarkRim : "unset",
      padding: "1.5rem 0",
      width: "100%",
      height: 72,
      color: theme.palette.primary.light,
      left: 0,
      top: "-0.0625rem",
      paddingRight: "unset !important",
      [isTab]: {
        padding: "0.75rem 0",
      },
    },
    widthControl: {
      ...FLEXBOX.rowCenterBetween,
    },
  };
};

export default useHeaderStyle;
