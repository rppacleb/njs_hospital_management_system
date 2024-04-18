import { Container } from "@src/components/Layout";
import { Typography } from "@src/components/DataDisplay";
import { Box, Grid, InputAdornment, TextField, useTheme } from "@mui/material";
import { FLEXBOX } from "@src/constants/Snippet";
import { Button } from "@src/components/Inputs";
import {
  AddOutlined as IAddOutlined,
  SearchOutlined as ISearchOutlined,
} from "@mui/icons-material";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import {
  setHospitalList,
  toggleForm,
  togglePreview,
} from "@src/redux/actions/hospitals";
import { useCallback, useEffect } from "react";
import { __LOCALDB } from "@src/utils/database";
import { __TBL } from "@src/utils/enum";
import List from "./List";
import Filter from "./Filter";
import Preview from "./Preview";

const Hospitals = ({ data }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const form = useSelector((state) => state.hospitals.form);
  const preview = useSelector((state) => state.hospitals.preview);
  const hspList = useSelector((state) => state.hospitals.list);
  const {
    palette,
    useCutomStyles: { INPSearch, INPHspForm },
  } = theme;

  useEffect(() => {
    const __init = async () => {
      const getHspList = await __LOCALDB.read(__TBL.HOSPITALS, "all");
      getHspList.sort((a, b) => b.id - a.id);
      dispatch(setHospitalList(getHspList));
    };

    if (form.toggled) return;
    if (Boolean(preview)) return;
    __init();
  }, [form.toggled, preview]);

  const formHandler = (method, toggled, inputs = null, id = null) => {
    dispatch(toggleForm(method, toggled, inputs, id));
  };

  const previewHandler = (value) => {
    dispatch(togglePreview(value));
  };

  const editHandler = (preview) => {
    const prevID = preview.id;
    delete preview.id;
    formHandler("edit", true, preview, prevID);
    previewHandler(null);
  };

  return (
    <Container maxWidth={1200} disableGutters sx={{ container: { py: 5 } }}>
      <Box {...FLEXBOX.rowCenterBetween} mb={5}>
        <Typography
          text="Manage Hospitals"
          sx={{ fontSize: 24, fontWeight: 600 }}
        />
        <Button
          type="submit"
          theme="primary"
          sx={{
            fontSize: 14,
            borderRadius: 2,
            px: "24px",
            display: "flex",
            gap: 1,
          }}
          onClick={() => formHandler("create", true)}
        >
          <IAddOutlined />
          Create Hospital
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={7}>
          <TextField
            fullWidth
            placeholder="Search for a hospital, country or ID"
            sx={{ ...INPSearch }}
            InputProps={{
              sx: { fontSize: 12 },
              endAdornment: (
                <InputAdornment position="end">
                  <ISearchOutlined sx={{ color: "#edeae6" }} />
                </InputAdornment>
              ),
            }}
          />
          <Grid container sx={{ mt: 4 }}>
            {hspList.map((data, key) => (
              <List
                key={key}
                palette={palette}
                FLEXBOX={FLEXBOX}
                data={data}
                previewHandler={previewHandler}
                editHandler={editHandler}
              />
            ))}
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Box mt={10} px={5}>
            <Filter FLEXBOX={FLEXBOX} palette={palette} INPSearch={INPSearch} />
          </Box>
        </Grid>
      </Grid>
      <Form
        palette={palette}
        INPHspForm={INPHspForm}
        form={form}
        formHandler={formHandler}
      />
      <Preview
        palette={palette}
        FLEXBOX={FLEXBOX}
        INPHspForm={INPHspForm}
        preview={preview}
        previewHandler={previewHandler}
        editHandler={editHandler}
        formHandler={formHandler}
        __LOCALDB={__LOCALDB}
        __TBL={__TBL}
      />
    </Container>
  );
};

export default Hospitals;
