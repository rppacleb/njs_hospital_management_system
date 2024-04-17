import { styled } from "@mui/material/styles";
import { Button as MUIButton, useTheme } from "@mui/material";
import { Typography } from "../../DataDisplay";

const Button = ({
  label,
  variant = "contained",
  theme,
  sx = {},
  onClick = () => {},
  startIcon,
  endIcon,
  ...props
}) => {
  const {
    useCutomStyles: { BTNPrimary, BTNSecondary },
  } = useTheme();

  const theming = () => {
    let theming =
      theme === "primary"
        ? BTNPrimary
        : theme === "secondary"
        ? BTNSecondary
        : {};
    return { ...theming, ...sx };
  };

  return (
    <MUIButton
      sx={{ ...theming() }}
      {...props}
      variant={variant}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      <Typography text={label} />
    </MUIButton>
  );
};

export default Button;
