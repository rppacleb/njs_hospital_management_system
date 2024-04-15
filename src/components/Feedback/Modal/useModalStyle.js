import mediaQuery from "@src/constants/useMediaQuery";
import { FLEXBOX } from "@src/constants/Snippet";
import { useTheme, useMediaQuery } from "@mui/material";

const useModalStyle = () => {
  const theme = useTheme();

  return {
    sxMainContainer: {
      "& .MuiDialog-container .MuiPaper-root": {
        borderRadius: "unset",
        margin: "unset",
        backgroundColor: "unset",
        maxWidth: "75rem",
        width: "100%",
        margin: "1.5rem",
      },
    },
    sxMain: {
      aspectRatio: "1 / 1",
      backgroundColor: theme.palette.background.blacklight,
      boxShadow: theme.palette.backShadow.lightOrDarkRim,
      position: "relative",
      overflow: "hidden",
    },
    sxIconClose: {
      fontSize: "1.2rem",
      cursor: "pointer",
      color: theme.palette.colors.white,
      position: "absolute",
      right: "1rem",
      top: "1rem",
      transition: theme.transitions.min,
      "&:hover": {
        color: theme.palette.colors.primary,
      },
    },
  };
};
export default useModalStyle;
