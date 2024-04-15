import { FLEXBOX } from "@src/constants/Snippet";
import { useTheme, useMediaQuery } from "@mui/material";

const useFooterStyle = () => {
  const {} = useMediaQuery("down");
  const theme = useTheme();

  return {
    mainContainer: {
      padding: "4rem 0",
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.background.primary,
      ...FLEXBOX.allCenter,
    },
  };
};

export default useFooterStyle;
