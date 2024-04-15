import { styled } from "@mui/material/styles";
import { Button, useTheme } from "@mui/material";

import React from "react";
import { Typography } from "../../DataDisplay";

const PrimaryButton = ({
  label,
  variant,
  style = {},
  onClick = () => {},
  startIcon,
  endIcon,
}) => {
  const {
    useCutomStyles: { styleBtnPrimary, styleBtnSecondary },
  } = useTheme();

  const ColorButton = styled(Button)((param) => {
    // const { variant } = param; @DESC: dont remove this, ill get back to this -Jehu
    let styling = variant === "contained" ? styleBtnPrimary : styleBtnSecondary;
    styling = { ...styling, ...style };
    return styling;
  });

  return (
    <ColorButton
      variant={variant}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      <Typography text={label} tagType="textHeaderSub2" />
    </ColorButton>
  );
};

export default PrimaryButton;
