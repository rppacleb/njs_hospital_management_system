import { Box } from "@mui/material";
import useSwiperStyles from "./useSwiperStyles";

const DefaultPagination = ({
  theme,
  swiper,
  gap = 4,
  isMobile,
  swiperRef,
  thumb = {},
  slidesCount,
  layout = {},
  innerContainer,
  justify = "end",
}) => {
  const classes = useSwiperStyles(theme);
  const pos =
    layout.type === "layered"
      ? {
          position: "absolute",
          zIndex: 500,
          bottom: layout.props?.bottom || "none",
          top: layout.props?.top || "none",
          ...layout.props,
        }
      : { ...layout.props };

  const thumbPalette = {
    active: thumb?.palette?.active || theme.palette.primary.dark,
    default: thumb?.palette?.default || theme.palette.primary.light,
  };

  const swipeHandler = (page) => {
    if (swiperRef.current) swiperRef.current.slideTo(page);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box sx={{ ...classes.containerPagination, ...pos }}>
        <Box
          display="flex"
          justifyContent={justify}
          sx={{ gap, ...innerContainer }}
          py={1.5}
        >
          {slidesCount.map((key) => (
            <Box
              key={key}
              onClick={() => swipeHandler(key)}
              borderRadius={10}
              height={isMobile ? 12 : 16}
              width={
                swiper.active === key
                  ? isMobile
                    ? 24
                    : 77
                  : isMobile
                  ? 12
                  : 16
              }
              bgcolor={
                swiper.active === key
                  ? thumbPalette.active
                  : thumbPalette.default
              }
              sx={{
                transition: "width 0.5s ease, color 0.5s ease",
                pointerEvents: "auto",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultPagination;
