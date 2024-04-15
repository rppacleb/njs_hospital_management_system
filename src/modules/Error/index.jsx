import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { Typography } from "@src/components/DataDisplay";
import { getRouteExtras } from "@src/utils/General.helper";
import Button from "@src/components/Inputs/Button";
import useErrorPage from "./useErrorPageStyle";

const Error = () => {
  const router = useRouter();
  const restURL = getRouteExtras(router.asPath);
  const {
    sxMainContainer,
    sxImage,
    sxTexts,
    sxTextSubTitle,
    sxTextsDescContainer,
    sxTextsBtn,
  } = useErrorPage();
  const [details, setDetails] = useState({
    type: "---",
    title: "OPPS!",
    desc: "Sorry, the page you're looking for does not exist.",
  });

  useEffect(() => {
    let data = { ...details };
    if (!!restURL) {
      switch (restURL?.type) {
        case "500":
          data.type = `${restURL?.type}`;
          data.title = "INTERNAL SERVER ERROR";
          data.desc =
            "Sorry, there were some technical issues while processing your request";
          break;
        case "auth":
          data.type = `${restURL?.type}`;
          data.title = "AUTHENTICATION ERROR";
          data.desc = "Sorry, the page you're looking for does not exist.";
          break;
      }
    }
    setDetails(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            text={details.title}
            tagType="textParagraph"
            sx={sxTextSubTitle}
          />
          <Typography text={details.desc} tagType="textParagraph" />
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
