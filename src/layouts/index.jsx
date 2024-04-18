import { Box, useTheme } from "@mui/material";
import { Inter } from "next/font/google";
import { isUndefined } from "@src/utils/common";
import { Footer, Header } from "@src/components/Navigation";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children, __LOCALSESSION }) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      className={`${inter.className}`}
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
    >
      {!isUndefined(__LOCALSESSION) && router.pathname !== "/auth/welcome" && (
        <Header __LOCALSESSION={__LOCALSESSION} />
      )}

      <Box display="flex" flexDirection="column" height="100%" width="100%">
        <Box
          mt={
            !isUndefined(__LOCALSESSION) && router.pathname !== "/auth/welcome"
              ? "48px"
              : 0
          }
          width="100%"
          height="100%"
          color={theme.palette.primary.light}
        >
          {children}
        </Box>
        {!isUndefined(__LOCALSESSION) &&
          router.pathname !== "/auth/welcome" && (
            <Footer __LOCALSESSION={__LOCALSESSION} />
          )}
      </Box>
    </Box>
  );
};

export default Layout;
