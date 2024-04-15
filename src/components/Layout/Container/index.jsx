import React from "react";
import { Box } from "@mui/material";
import MUIContainer from "@mui/material/Container";
import { FLEXBOX } from "@src/constants/Snippet";
import useMediaQuery from "@src/constants/useMediaQuery";

const Container = ({
  children,
  fullWidth = false,
  fullContent = false,
  maxWidth = 1200,
  maxContent = 1200,
  sx,
  component = "div",
}) => {
  const { isLapM, isMobM } = useMediaQuery("down");

  const ContainerElement = ({ classes, maxWidth = 1200 }) => (
    <MUIContainer
      disableGutters
      maxWidth={false}
      sx={{
        maxWidth,
        [isLapM]: {
          padding: "0 2rem",
        },
        [isMobM]: {
          padding: "0 1.25rem !important",
        },
        ...classes,
      }}
    >
      {children}
    </MUIContainer>
  );

  return (
    <>
      {fullWidth ? (
        <Box sx={sx.container} component={component}>
          <ContainerElement
            classes={sx.content}
            maxWidth={fullContent ? "100%" : maxContent}
          />
        </Box>
      ) : (
        <ContainerElement classes={sx.container} maxWidth={maxWidth} />
      )}
    </>
  );
};

export default Container;
