import React from "react";
import { Typography, useTheme } from "@mui/material";

const PrimaryTypography = ({
  text,
  tagType = "textParagraph",
  sx = {},
  isHeader = false,
  onClick,
}) => {
  const {
    useCutomStyles: { styleTypography },
  } = useTheme();

  const getStyle = () => {
    let myStyle = {};
    !!styleTypography[tagType]
      ? (myStyle = { ...styleTypography[tagType], ...sx })
      : (myStyle = sx);
    return myStyle;
  };

  return (
    <Typography
      variant={isHeader ? "h1" : "p"}
      sx={getStyle()}
      onClick={onClick}
    >
      {text}
    </Typography>
  );
};

export default PrimaryTypography;
