import { FLEXBOX } from "@src/constants/Snippet";
import { useTheme } from "@mui/material";

const usePaginationStyle = () => {
  const theme = useTheme();
  return {
    mainContainer: {
      ...FLEXBOX.allCenter,
      background: theme.palette.colors.blacklight,
      paddingBottom: "3rem",
    },
    widthControl: {
      ...FLEXBOX.allCenter,
    },
    mainPagination: {
      ul: {
        gap: "0.4rem",
        "li .Mui-selected": {
          background: theme.palette.colors.red,
          color: theme.palette.colors.white,
          border: "unset",
        },
        "li button, li div": {
          color: theme.palette.colors.white,
        },
        "li:nth-of-type(1) button, li:nth-last-of-type(1) button": {
          border: `1px solid ${theme.palette.colors.white}`,
        },
      },
    },
  };
};
export default usePaginationStyle;
