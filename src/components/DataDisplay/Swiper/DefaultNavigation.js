import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import useSwiperStyles from "./useSwiperStyles";
import Icon from "../Icon";

const DefaultNavigation = ({
  theme,
  title,
  swiper,
  gap = 24,
  swiperRef,
  thumb = {},
  layout = {},
  customHeader,
  innerContainer,
  mainContainer,
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

  const isTabletS = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const iconFontSize = isTabletS ? 24 : 32;

  const thumbPalette = {
    active: thumb.palette?.active || theme.palette.primary.dark,
    default: thumb.palette?.default || theme.palette.primary.light,
  };

  const btnHandler = (direction) => {
    const cswiper = swiperRef.current;
    if (direction === "left") return cswiper.slidePrev();
    cswiper.slideNext();
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      position="relative"
      minHeight={24}
      sx={{ ...mainContainer }}
    >
      <Box>
        {title?.header && (
          <Typography
            sx={{
              fontWeight: 700,
              marginBottom: 2,
              fontSize: isTabletS ? 19 : 24,
              ...title?.style,
            }}
          >
            {title?.header}
          </Typography>
        )}

        {customHeader && <>{customHeader}</>}
      </Box>

      <Box sx={{ ...classes.container, ...pos }}>
        <Box
          display="flex"
          justifyContent={justify}
          gap={gap}
          {...innerContainer}
        >
          <Button
            sx={{
              ...classes.btnNav,
              color:
                swiper.loop || swiper.active !== 0
                  ? thumbPalette.active
                  : thumbPalette.default,
              fontSize: iconFontSize,
            }}
            onClick={() => btnHandler("left")}
          >
            <Icon name="arrow-left-2" />
          </Button>
          <Button
            sx={{
              ...classes.btnNav,
              color:
                swiper.loop || !swiperRef?.current?.isEnd
                  ? thumbPalette.active
                  : thumbPalette.default,
              fontSize: iconFontSize,
            }}
            onClick={() => btnHandler("right")}
          >
            <Icon name="arrow-right-2" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultNavigation;
