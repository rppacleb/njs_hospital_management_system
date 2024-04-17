import { Box, useTheme } from "@mui/material";
import { Inter } from "next/font/google";
import { isUndefined } from "@src/utils/common";
import useLayoutStyles from "./useLayoutStyles";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Navigation/Header"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Navigation/Footer"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children, __LOCALSESSION }) => {
  const theme = useTheme();

  return (
    <Box
      className={`${inter.className}`}
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
    >
      {!isUndefined(__LOCALSESSION) ? <Header /> : <></>}

      <Box display="flex" flexDirection="column" height="100%" width="100%">
        <Box
          mt="72px"
          width="100%"
          height="100%"
          color={theme.palette.primary.light}
        >
          {children}
        </Box>
        {!isUndefined(__LOCALSESSION) && <Footer />}
      </Box>
    </Box>
  );
};

export default Layout;
