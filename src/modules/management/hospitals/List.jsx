import { Box, Divider, Grid } from "@mui/material";
import {
  SellOutlined as ISellOutlined,
  KeyboardArrowDownOutlined as IKeyboardArrowDownOutlined,
  ArrowForwardOutlined as IArrowForwardOutlined,
  EditOutlined as IEditOutlined,
} from "@mui/icons-material";
import { Button } from "@src/components/Inputs";
import { Typography } from "@src/components/DataDisplay";

const List = ({ palette, FLEXBOX, data, previewHandler, editHandler }) => {
  return (
    <Grid item xs={12}>
      <Box bgcolor={palette.primary.main} borderRadius={2} mb={2}>
        <Box p={3} {...FLEXBOX.rowCenterBetween} alignItems="flex-start">
          <Box {...FLEXBOX.rowCenter}>
            <Box
              p={3}
              bgcolor={palette.complementary.dark2}
              borderRadius={2}
              mr={2}
            />
            <Box {...FLEXBOX.col}>
              <Typography
                text={data.hsp_name}
                sx={{ fontSize: 16, fontWeight: 600 }}
              />
              <Typography
                text={
                  <Box {...FLEXBOX.rowCenter} gap={0.5}>
                    <ISellOutlined sx={{ fontSize: 14 }} />
                    ID: {data.hsp_id}
                  </Box>
                }
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: palette.complementary.cream2,
                }}
              />
            </Box>
          </Box>
          <Button
            onClick={() => editHandler(data)}
            type="submit"
            sx={{
              boxShadow: "none",
              fontSize: 12,
              borderRadius: 2,
              display: "flex",
              p: 0,
              gap: 1,
            }}
          >
            <IEditOutlined sx={{ fontSize: 12 }} />
            Edit
          </Button>
        </Box>
        <Divider sx={{ bgcolor: palette.complementary.cream2 }} />
        <Box p={3} {...FLEXBOX.row} justifyContent="flex-end">
          <Button
            onClick={() => previewHandler(data)}
            type="submit"
            sx={{
              boxShadow: "none",
              fontSize: 12,
              borderRadius: 2,
              display: "flex",
              p: "2px 8px",
              gap: 1,
            }}
          >
            <Typography
              text={
                <Box {...FLEXBOX.rowCenter} gap={0.5}>
                  Full overview
                  <IArrowForwardOutlined sx={{ fontSize: 18 }} />
                </Box>
              }
              sx={{ fontSize: 12, fontWeight: 400 }}
            />
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default List;
