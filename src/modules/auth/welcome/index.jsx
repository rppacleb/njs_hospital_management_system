import { useTheme } from "@emotion/react";
import { CheckCircle as ICheckCircle } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";
import { Typography } from "@src/components/DataDisplay";
import { Container } from "@src/components/Layout";
import { FLEXBOX } from "@src/constants/Snippet";
import { __LOCALDB } from "@src/utils/database";
import { __TBL } from "@src/utils/enum";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Welcome = () => {
  const theme = useTheme();
  const router = useRouter();
  const { palette } = theme;

  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  }, []);

  return (
    <Container
      fullWidth
      fullContent
      sx={{
        container: {
          width: "100%",
          height: "100%",
        },
        content: {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Box
        height="100%"
        width="40%"
        bgcolor={palette.complementary.dark2}
      ></Box>
      <Box
        height="100%"
        width="60%"
        bgcolor={palette.complementary.dark3}
        color={palette.primary.light}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Container
          maxWidth={400}
          sx={{
            container: {
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            },
          }}
        >
          <Box {...FLEXBOX.col} gap={3}>
            <ICheckCircle sx={{ color: palette.complementary.green1 }} />
            <Typography
              text="Success! You are being redirected to your dashboard."
              variant="h1"
              sx={{ fontSize: 24, fontWeight: 500, lineHeight: 1.5 }}
            />
            <Divider sx={{ bgcolor: palette.complementary.cream2 }} />
            <Typography
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate voluptates at non nostrum aliquam earum deserunt atque."
              variant="h1"
              sx={{ fontSize: 12, fontWeight: 14, lineHeight: 1.5 }}
            />
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Welcome;
