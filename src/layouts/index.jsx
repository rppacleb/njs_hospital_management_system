import { Box } from "@mui/material";
import { Inter } from "next/font/google";
import { Footer, Header } from "../components/Navigation";
import useLayoutStyles from "./useLayoutStyles";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const style = useLayoutStyles();

  return (
    <Box className={`${inter.className}`}>
      <Header />
      <Box sx={style}>
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
