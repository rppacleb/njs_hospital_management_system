import { Face3Outlined as IFace3Outlined } from "@mui/icons-material";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Typography } from "@src/components/DataDisplay";
import { FLEXBOX } from "@src/constants/Snippet";
import { __LOCALDB } from "@src/utils/database";
import Insights from "./Insights";

const Main = ({ datas }) => {
  const theme = useTheme();
  const { palette } = theme;

  return (
    <Container maxWidth="container" disableGutters sx={{ py: 5 }}>
      <Box
        p={3.5}
        mb={7}
        bgcolor={palette.primary.main}
        borderRadius={2}
        {...FLEXBOX.rowCenter}
      >
        <Box
          p={2}
          bgcolor={palette.complementary.dark2}
          borderRadius={2}
          mr={10}
        >
          <IFace3Outlined sx={{ fontSize: 46 }} />
        </Box>
        <Typography
          text={`Welcome Pogi!`}
          sx={{ fontSize: 32, fontWeight: 600 }}
        />
      </Box>
      <Typography
        text="Your monthly insights"
        sx={{ fontSize: 16, fontWeight: 600, mb: 3 }}
      />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Insights
            palette={palette}
            title="# of Hospitals"
            value={0}
            percentage="12%"
          />
        </Grid>
        <Grid item xs={4}>
          <Insights
            palette={palette}
            title="# Dynamic 2"
            value={0}
            percentage="2%"
          />
        </Grid>
        <Grid item xs={4}>
          <Insights
            palette={palette}
            title="# Dynamic 3"
            value={0}
            percentage="3%"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
