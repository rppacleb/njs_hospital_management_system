import { useState, useEffect } from "react";
import { AppBar } from "@mui/material";
import { useRouter } from "next/router";
import useHeaderStyle from "./useHeaderStyle";
import { Container } from "@src/components/Layout";

const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const style = useHeaderStyle(scrolled);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <AppBar position="fixed" sx={style.mainContainer}>
      <Container sx={style.widthControl}>Header Content Here</Container>
    </AppBar>
  );
};

export default Header;
