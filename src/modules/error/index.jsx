import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { Typography } from "@src/components/DataDisplay";
import Button from "@src/components/Inputs/Button";
import useErrorPage from "./useErrorPageStyle";

const Error = () => {
  const router = useRouter();
  const {
    sxMainContainer,
    sxImage,
    sxTexts,
    sxTextSubTitle,
    sxTextsDescContainer,
    sxTextsBtn,
  } = useErrorPage();

  return (
    <Box id="errorpage" sx={sxMainContainer}>
      <Box sx={sxTexts}>
        <Box sx={sxImage}>
          <Image
            src="/assets/banner-error.svg"
            alt="TK Image: Error Placeholder"
            {...useTheme().useCutomStyles.sxImageFill}
          />
        </Box>
        <Box sx={sxTextsDescContainer}>
          <Typography
            text="OPPS!"
            tagType="textParagraph"
            sx={sxTextSubTitle}
          />
          <Typography
            text="Something went wrong. Please reload and try again."
            tagType="textParagraph"
          />
        </Box>
        <Button
          label="< Back Home"
          variant="contained"
          style={sxTextsBtn}
          onClick={() => router.push("/")}
        />
      </Box>
    </Box>
  );
};

export default Error;
