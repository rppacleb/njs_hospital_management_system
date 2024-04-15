import { useTheme, Box, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import DefaultNavigation from "./DefaultNavigation";
import DefaultPagination from "./DefaultPagination";
import { isNotNull } from "@src/utils/common";

const CoreSwiper = ({
  length,
  gutter,
  children,
  className,
  modules = [Autoplay, FreeMode],
  reference = { current: null },
  pagination = { show: false, custom: null },
  navigation = {
    show: false,
    custom: null,
  },
  ...params
}) => {
  length =
    params.slidesPerView !== undefined
      ? length + 1 - params.slidesPerView
      : length;
  gutter = { top: 0, right: 0, bottom: 0, left: 0, ...gutter };

  const theme = useTheme();
  const swiperRef = useRef(null);
  const slidesCount = Array.from({ length }, (_, index) => index);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down(445));

  const [swiper, setSwiper] = useState({ active: 0, loop: true });

  const swiperParams = {
    ...params,
    onSwiper: (sw) => {
      swiperRef.current = sw;
      reference.current = sw;

      setSwiper({ active: sw.realIndex, loop: sw.params.loop });
    },
    onActiveIndexChange: (sw) => setSwiper({ ...swiper, active: sw.realIndex }),
  };

  return (
    <Box position="relative">
      {navigation.show &&
        (isNotNull(navigation.custom) ? (
          navigation.custom()
        ) : (
          <DefaultNavigation
            swiper={swiper}
            length={length}
            swiperRef={swiperRef}
            theme={theme}
            {...navigation}
          />
        ))}

      <Swiper
        {...swiperParams}
        modules={modules}
        className={className}
        padding={`${gutter.top}px ${gutter.right}px ${gutter.bottom}px ${gutter.left}px`}
      >
        {children}
      </Swiper>

      {pagination.show &&
        (isNotNull(pagination.custom) ? (
          pagination.custom()
        ) : (
          <DefaultPagination
            swiper={swiper}
            isMobile={isMobile}
            swiperRef={swiperRef}
            slidesCount={slidesCount}
            theme={theme}
            {...pagination}
          />
        ))}
    </Box>
  );
};
export default CoreSwiper;
