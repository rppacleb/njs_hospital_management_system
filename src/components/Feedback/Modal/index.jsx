import React from "react";
import Image from "next/image";
import { Dialog, Box } from "@mui/material";
import { Icon } from "@src/components/DataDisplay";
import useModalStyle from "./useModalStyle";

const Modal = ({ children, open, handleClose, sx }) => {
  const { sxMainContainer, sxMain, sxIconClose } = useModalStyle();
  return (
    <Dialog open={open} onClose={handleClose} sx={sxMainContainer}>
      <Box sx={{ ...sxMain, ...sx }}>
        <Icon
          onClick={handleClose}
          name="icon-exit icon-center"
          props={sxIconClose}
        />
        {children}
      </Box>
    </Dialog>
  );
};

export default Modal;
