const useSwiperStyles = (theme) => ({
  containerSlider: {
    background: theme.palette.gradient.mainHeader,
    color: theme.palette.primary.main,
  },
  container: {
    width: "100%",
    color: theme.palette.primary.dark,
    padding: 0,
  },
  containerPagination: {
    width: {
      xl: 1200,
      xxs: "100%",
    },
    pointerEvents: "none",
    color: theme.palette.primary.dark,
    padding: 0,
  },
  btnNav: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: 50,
    padding: 0,
    minWidth: 0,
    "&:hover, &:disabled": {
      backgroundColor: "transparent",
    },
  },
});

export default useSwiperStyles;
