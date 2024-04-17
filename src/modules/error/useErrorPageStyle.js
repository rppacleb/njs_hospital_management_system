import useMediaQuery from "@src/constants/useMediaQuery";
import { FLEXBOX } from "@src/constants/Snippet";
import { useTheme } from "@mui/material";

const useErrorPage = () => {
  const { isLapS, isMobM } = useMediaQuery("down");
  const theme = useTheme();

  return {
    sxMainContainer: {
      width: "100%",
      height: "calc(100vh - 76.8px)",
      minHeight: "30rem",
      overflow: "hidden",
      ...FLEXBOX.allCenter,
      backgroundColor: theme.palette.background.blacklight,

      gap: "5rem",
      [isLapS]: {
        gap: "3rem",
      },
    },
    sxTexts: {
      ...FLEXBOX.colCenter,
      padding: "1.5rem",
      width: "100%",
      gap: "2rem",
    },
    sxImage: {
      maxWidth: "50rem",
      height: "22rem",
      width: "100%",
    },
    sxTextSubTitle: {
      fontSize: "1.8rem",
      fontWeight: 900,
      [isMobM]: {
        fontSize: "1.2rem",
        padding: "0 1.2rem",
      },
    },
    sxTextSubDesc: {},
    sxTextsDescContainer: {
      ...FLEXBOX.colCenter,
      gap: "0.5rem",
    },
    sxTextsBtn: {
      width: "fit-content",
    },
  };
};
export default useErrorPage;
