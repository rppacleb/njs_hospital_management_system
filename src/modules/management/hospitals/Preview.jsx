import * as React from "react";
import {
  Box,
  Dialog,
  Divider,
  Unstable_Grid2 as Grid,
  Slide,
} from "@mui/material";
import { Typography } from "@src/components/DataDisplay";
import { MANAGERS, PLANS } from "@src/utils/enum";
import { Button } from "@src/components/Inputs";
import { Close as IClose } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Preview = ({
  palette,
  FLEXBOX,
  preview,
  previewHandler,
  editHandler,
  __LOCALDB,
  __TBL,
}) => {
  const manager = MANAGERS.filter((v) => v.id === preview?.acc_manager);
  const plan = PLANS.filter((v) => v.id === preview?.plan);
  const __close = () => {
    previewHandler(null);
  };

  const removeHandler = () => {
    __LOCALDB.delete(__TBL.HOSPITALS, preview?.id);
    __close();
  };

  return (
    <Dialog
      open={Boolean(preview)}
      fullScreen
      onClose={__close}
      TransitionComponent={Transition}
      keepMounted
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-end"
        gap={1}
        width="100%"
        height="100%"
        p="16px 0 16px 0"
      >
        <Box
          display="flex"
          flexDirection="column"
          width={550}
          height="100%"
          bgcolor={palette.background.primary}
          borderRadius="16px 0 0 16px"
          p={3}
          color={palette.primary.light}
        >
          <Box {...FLEXBOX.rowCenterBetween}>
            <Typography
              text="Hospital Info"
              sx={{ fontSize: 24, fontWeight: 600 }}
            />
            <Button
              onClick={__close}
              type="submit"
              sx={{
                boxShadow: "none",
                fontSize: 12,
                borderRadius: 2,
                display: "flex",
                p: 1,
                minWidth: 0,
                gap: 1,
              }}
            >
              <IClose sx={{ fontSize: 14 }} />
            </Button>
          </Box>
          <Divider sx={{ bgcolor: palette.complementary.cream2, my: 2 }} />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box {...FLEXBOX.col}>
                <Typography
                  text="Hospital name"
                  sx={{ fontSize: 12, fontWeight: 400 }}
                />
                <Typography
                  text={preview?.hsp_name}
                  sx={{ fontSize: 16, fontWeight: 600 }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box {...FLEXBOX.col}>
                <Typography
                  text="Hospital ID"
                  sx={{ fontSize: 12, fontWeight: 400 }}
                />
                <Typography
                  text={preview?.hsp_id}
                  sx={{ fontSize: 16, fontWeight: 600 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box {...FLEXBOX.col}>
                <Typography
                  text="Hospital Address"
                  sx={{ fontSize: 12, fontWeight: 400 }}
                />
                <Typography
                  text={preview?.address}
                  sx={{ fontSize: 16, fontWeight: 600 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box {...FLEXBOX.col}>
                <Typography
                  text="Status"
                  sx={{ fontSize: 12, fontWeight: 400 }}
                />
                <Typography
                  text={preview?.status ? "Active" : "Inactive"}
                  sx={{ fontSize: 16, fontWeight: 600 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box {...FLEXBOX.col}>
                <Typography
                  text="Manager"
                  sx={{ fontSize: 12, fontWeight: 400 }}
                />
                <Typography
                  text={manager.length > 0 ? manager[0]?.name : ""}
                  sx={{ fontSize: 16, fontWeight: 600 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box {...FLEXBOX.col}>
                <Typography
                  text="Manager"
                  sx={{ fontSize: 12, fontWeight: 400 }}
                />
                <Typography
                  text={plan.length > 0 ? plan[0]?.name : ""}
                  sx={{ fontSize: 16, fontWeight: 600 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box {...FLEXBOX.row} gap={2} mt={3}>
                <Button
                  onClick={removeHandler}
                  type="submit"
                  sx={{
                    bgcolor: "transparent",
                    boxShadow: "none",
                    fontSize: 12,
                    borderRadius: 2,
                    display: "flex",
                    p: "4px 12px",
                    minWidth: 0,
                    gap: 1,
                  }}
                >
                  Delete
                </Button>
                <Button
                  onClick={() => editHandler(preview)}
                  type="submit"
                  sx={{
                    boxShadow: "none",
                    fontSize: 12,
                    borderRadius: 2,
                    display: "flex",
                    p: "4px 24px",
                    minWidth: 0,
                    gap: 1,
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Dialog>
  );
};

export default Preview;
