import { Face3Outlined as IFace3Outlined } from "@mui/icons-material";
import { Box, Grid, useTheme } from "@mui/material";
import { Typography } from "@src/components/DataDisplay";
import { FLEXBOX } from "@src/constants/Snippet";
import { __LOCALDB } from "@src/utils/database";
import { Container } from "@src/components/Layout";
import Insights from "./Insights";
import { __TBL } from "@src/utils/enum";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setHospitalList } from "@src/redux/actions/hospitals";

const Main = ({ __LOCALSESSION }) => {
  const __SESSION = JSON.parse(__LOCALSESSION);
  const dispatch = useDispatch();
  const theme = useTheme();
  const hspList = useSelector((state) => state.hospitals.list);
  const { palette } = theme;

  useEffect(() => {
    const __init = async () => {
      const getHspList = await __LOCALDB.read(__TBL.HOSPITALS, "all");
      getHspList.sort((a, b) => b.id - a.id);

      dispatch(setHospitalList(getHspList));
    };

    __init();
  }, []);

  return (
    <Container maxWidth={1200} disableGutters sx={{ container: { py: 5 } }}>
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
          text={`Welcome ${__SESSION.fullname}!`}
          sx={{ fontSize: 32, fontWeight: 600 }}
        />
      </Box>
      <Typography
        text="Your monthly insights"
        variant="body1"
        sx={{ fontSize: 16, fontWeight: 600, mb: 3 }}
      />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Insights
            palette={palette}
            title="# of Hospitals"
            value={hspList.length}
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
