import {
  InfoOutlined as IInfoOutlined,
  ArrowUpwardOutlined as IArrowUpwardOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { Typography } from "@src/components/DataDisplay";
import { FLEXBOX } from "@src/constants/Snippet";

const Insights = ({ palette, title, value, percentage }) => {
  return (
    <Box
      p={2}
      bgcolor={palette.primary.main}
      borderRadius={2}
      {...FLEXBOX.col}
      gap={3}
      alignItems="flex-start"
    >
      <Box {...FLEXBOX.rowCenterBetween} width="100%">
        <Typography text={title} sx={{ fontSize: 12, fontWeight: 400 }} />
        <IInfoOutlined sx={{ fontSize: 12 }} />
      </Box>
      <Typography text={value} sx={{ fontSize: 24, fontWeight: 700 }} />
      <Box p={1} bgcolor={palette.complementary.dark2} borderRadius={2}>
        <Typography
          text={
            <Box {...FLEXBOX.rowCenter} gap="2px">
              <IArrowUpwardOutlined
                sx={{ color: palette.complementary.green1, fontSize: 12 }}
              />
              <Typography
                text={percentage}
                sx={{
                  color: palette.complementary.green1,
                  fontSize: 12,
                  fontWeight: 400,
                }}
              />
              <Box ml={0.5} fontSize={12}>
                This month
              </Box>
            </Box>
          }
          sx={{ fontSize: 12, fontWeight: 400 }}
        />
      </Box>
    </Box>
  );
};

export default Insights;
