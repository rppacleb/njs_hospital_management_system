import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { redirect } from "@src/utils/common";
import { useRouter } from "next/router";
import { SwiperSlide } from "swiper/react";
import CoreSwiper from "@src/components/DataDisplay/Swiper";

const Main = ({ data }) => {
  const router = useRouter();
  const theme = useTheme();
  const { palette } = theme;
  const isSM = useMediaQuery(theme.breakpoints.up("sm"));

  const redirectHandler = (action, url) => {
    if (action !== "_blank" && action !== "popup") return router.push(url);
    redirect(action, url);
  };

  return (
    <Box height="calc(100% - 70px)" width="100%" color={palette.primary.light}>
      <Container
        maxWidth="container"
        disableGutters
        sx={{ py: { sm: "96px", xxs: "48px" } }}
      >
        <CoreSwiper
          // loop={true}
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{ delay: 0.5, disableOnInteraction: false }}
          speed={5000}
          length={3}
          navigation={{
            show: false,
            justify: "end",
            title: { header: "This is a title" },
            gap: "16px",
            thumb: { palette: { active: palette.primary.light } },
            layout: {
              type: "layered",
              props: { top: 5 },
            },
          }}
          pagination={{
            show: true,
            justify: "end",
            thumb: { palette: { active: "#fff" } },
            layout: {
              type: "!layered",
              props: { bottom: 0 },
            },
          }}
        >
          <SwiperSlide>
            <Box
              height={120}
              bgcolor={palette.primary.light}
              color={palette.primary.dark}
              borderRadius={3}
              p={2}
            >
              3
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              height={120}
              bgcolor={palette.primary.light}
              color={palette.primary.dark}
              borderRadius={3}
              p={2}
            >
              3
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              height={120}
              bgcolor={palette.primary.light}
              color={palette.primary.dark}
              borderRadius={3}
              p={2}
            >
              3
            </Box>
          </SwiperSlide>
        </CoreSwiper>
      </Container>
    </Box>
  );
};

export default Main;
