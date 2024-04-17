import { FLEXBOX } from "@src/constants/Snippet";
import { useTheme, useMediaQuery } from "@mui/material";

const useFooterStyle = () => {
  const {} = useMediaQuery("down");
  const theme = useTheme();

  return {
    mainContainer: {
      padding: "4rem 0",
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.complementary.dark2,
      ...FLEXBOX.allCenter,
    },
  };
};

export default useFooterStyle;
