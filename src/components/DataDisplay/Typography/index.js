import React from "react";
import { Typography as MUITypography, useTheme } from "@mui/material";

const Typography = ({ text, sx = {}, variant = "div", onClick }) => {
  return (
    <MUITypography variant={variant} sx={sx} onClick={onClick}>
      {text}
    </MUITypography>
  );
};

export default Typography;
