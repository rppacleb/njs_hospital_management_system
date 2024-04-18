import { useState, useEffect, useRef } from "react";
import { AppBar, Box, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import useHeaderStyle from "./useHeaderStyle";
import { Container } from "@src/components/Layout";
import { Typography } from "@src/components/DataDisplay";
import { FLEXBOX } from "@src/constants/Snippet";
import { Button } from "@src/components/Inputs";
import { Logout } from "@mui/icons-material";
import { cookie } from "@src/utils/cache/cookie";
import { MenuManagement } from "./Menu";

const Header = ({ __LOCALSESSION }) => {
  const __SESSION = JSON.parse(__LOCALSESSION);
  const router = useRouter();
  const theme = useTheme();
  const { palette } = theme;
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpened, setisMenuOpened] = useState(false);
  const styles = useHeaderStyle(scrolled);
  const menu = [
    { label: "Home", url: "/", active: router.pathname === "/" ? true : false },
    { label: "Menu 2", url: "#", active: false },
    { label: "Menu 3", url: "#", active: false },
    { label: "Menu 3", url: "#", active: false },
  ];

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  const redirectHandler = (route) => {
    router.push(route);
    setisMenuOpened(false);
  };

  const logoutHandler = () => {
    cookie.remove();
    window.location.href = "/auth/login";
  };

  return (
    <AppBar position="fixed" sx={styles.mainContainer}>
      <Container sx={{ ...FLEXBOX.rowCenterBetween }}>
        <Box {...FLEXBOX.rowCenterBetween}>
          <Box {...FLEXBOX.rowCenter} gap={3}>
            <Typography
              text="S"
              variant="div"
              sx={{ fontSize: 24, fontWeight: 900 }}
            />
            <Box ml={2}>
              {menu.map((value, key) => (
                <Button
                  key={key}
                  theme="secondary"
                  onClick={() => redirectHandler(value.url)}
                  sx={{
                    fontSize: 12,
                    borderRadius: 2,
                    p: "4px 24px",
                    mr: 1,
                    color: palette.primary.light,
                    bgcolor: value.active
                      ? palette.complementary.dark4
                      : palette.complementary.dark2,
                    "&:hover": {
                      bgcolor: palette.complementary.dark4,
                    },
                  }}
                >
                  {value.label}
                </Button>
              ))}
            </Box>
          </Box>
          <Box {...FLEXBOX.rowCenter} gap={3}>
            <Box sx={{ position: "relative" }}>
              <Button
                onClick={() => setisMenuOpened(!isMenuOpened)}
                theme="secondary"
                sx={{
                  fontSize: 12,
                  borderRadius: 2,
                  p: "4px 12px",
                  color: palette.primary.light,
                  bgcolor: palette.complementary.dark2,
                  "&:hover": {
                    bgcolor: palette.complementary.dark4,
                  },
                }}
              >
                Management
              </Button>
              {isMenuOpened && (
                <MenuManagement
                  FLEXBOX={FLEXBOX}
                  palette={palette}
                  redirectHandler={redirectHandler}
                />
              )}
            </Box>

            <Typography
              text={__SESSION?.fullname}
              variant="div"
              sx={{ fontSize: 12, fontWeight: 400 }}
            />
            <Button
              theme="secondary"
              onClick={() => logoutHandler()}
              sx={{
                fontSize: 12,
                borderRadius: 2,
                p: "4px 12px",
                color: palette.primary.light,
                bgcolor: palette.complementary.dark2,
                ...FLEXBOX.rowCenter,
                gap: 0.5,
                "&:hover": {
                  bgcolor: palette.complementary.dark4,
                },
              }}
            >
              <Logout sx={{ fontSize: 18 }} />
              Logout
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
