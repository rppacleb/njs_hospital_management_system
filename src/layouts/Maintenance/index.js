import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import useMaintenanceStyles from "./useMaintenanceStyles";

const Maintenance = () => {
  const style = useMaintenanceStyles();
  return (
    <Box sx={style?.mainContainer}>
      <Box sx={style?.myBannerBox}>
        <Image
          src="/assets/banner-comingsoon.svg"
          alt="Euro EKINGS Logo"
          {...style?.myImage}
        />
      </Box>
      <Box sx={style?.myImageBox}>
        <Image
          src="/assets/euro2024-ekings-logo.svg"
          alt="Euro EKINGS Logo"
          {...style?.myImage}
        />
      </Box>
      <Typography variant="p" sx={style?.textParagraph}>
        Sorry, our website is under construction. We are currently adding new
        features and fixing some minor bugs.
      </Typography>
    </Box>
  );
};

export default Maintenance;
