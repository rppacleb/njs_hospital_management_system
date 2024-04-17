import { useState, useEffect } from "react";
import { AppBar } from "@mui/material";
import { useRouter } from "next/router";
import useHeaderStyle from "./useHeaderStyle";
import { Container } from "@src/components/Layout";
import { Typography } from "@src/components/DataDisplay";

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
      <Container sx={style.widthControl}>
        <Typography
          text="S"
          variant="div"
          sx={{ fontSize: 24, fontWeight: 900 }}
        />
      </Container>
    </AppBar>
  );
};

export default Header;
