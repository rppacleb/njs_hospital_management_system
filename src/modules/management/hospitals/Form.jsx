import {
  CheckCircleOutline as ICheckCircle,
  AddHomeWorkOutlined as IAddHomeWorkOutlined,
} from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  Unstable_Grid2 as Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SwipeableDrawer,
} from "@mui/material";
import { Typography } from "@src/components/DataDisplay";
import { Button } from "@src/components/Inputs";
import TextField from "@src/components/Inputs/TextField";
import { Container } from "@src/components/Layout";
import { FLEXBOX } from "@src/constants/Snippet";
import { __LOCALDB } from "@src/utils/database";
import { MANAGERS, PLANS, __TBL } from "@src/utils/enum";
import { Field, Form as FormWrapper, Formik } from "formik";
import * as Yup from "yup";

const Form = ({ palette, INPHspForm, form, formHandler }) => {
  const validationSchema = Yup.object({
    hsp_name: Yup.string().required("Required"),
    hsp_id: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    status: Yup.boolean().required("Required"),
    acc_manager: Yup.number().required("Required"),
    plan: Yup.number(),
  });

  const submitHandler = (values) => {
    if (form.method === "create") {
      __LOCALDB.create(__TBL.HOSPITALS, values);
    } else {
      __LOCALDB.update(__TBL.HOSPITALS, form.id, values);
    }
    formHandler("", false);
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={form.toggled}
      onClose={() => formHandler(null, false)}
      onOpen={() => formHandler(null, false)}
      sx={{ zIndex: 1201 }}
      PaperProps={{ sx: { backgroundColor: "transparent", height: "100%" } }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        p={2}
      >
        <Container
          maxWidth={446}
          disableGutters
          sx={{
            container: {
              borderRadius: 2,
              bgcolor: palette.background.primary,
              p: 4,
              color: palette.primary.light,
            },
          }}
        >
          <Formik
            initialValues={form.inputs}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
          >
            {({ errors, touched, isSubmitting, setFieldValue, values }) => (
              <FormWrapper>
                <Typography
                  variant="body1"
                  text={`${
                    form.method === "create" ? "New" : "Edit"
                  } hospital info`}
                  sx={{ fontSize: 24, fontWeight: 600, mb: 3 }}
                />
                <Typography
                  variant="body1"
                  text="Fill in the info of the Hospital. You can change this at any time by reaching the Hospital management page."
                  sx={{ fontSize: 12, fontWeight: 400, mb: 3 }}
                />
                <Box mt={2}>
                  <Box
                    borderRadius="8px 8px 0 0"
                    p={2}
                    {...FLEXBOX.rowCenter}
                    gap={2}
                    sx={{ background: palette.gradient.darkToLightBlue }}
                  >
                    <IAddHomeWorkOutlined sx={{ fontSize: 24 }} />
                    <Typography
                      text={values.hsp_name}
                      sx={{ fontSize: 16, fontWeight: 600 }}
                    />
                  </Box>
                  <Box
                    bgcolor={palette.primary.main}
                    borderRadius="0 0 8px 8px"
                    p={2}
                    {...FLEXBOX.rowCenter}
                    gap={2}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography
                          text="Hospital Name"
                          sx={{ fontSize: 12, fontWeight: 400, mb: 0.4 }}
                        />
                        <Field
                          sx={{ ...INPHspForm }}
                          as={TextField}
                          variant="outlined"
                          name="hsp_name"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          text="Hospital Id"
                          sx={{ fontSize: 12, fontWeight: 400, mb: 0.4 }}
                        />
                        <Field
                          sx={{ ...INPHspForm }}
                          as={TextField}
                          variant="outlined"
                          name="hsp_id"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          text="Address"
                          sx={{ fontSize: 12, fontWeight: 400, mb: 0.4 }}
                        />
                        <Field
                          sx={{ ...INPHspForm }}
                          as={TextField}
                          variant="outlined"
                          name="address"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={2}>
                          <Typography
                            text="Status"
                            sx={{ fontSize: 12, fontWeight: 400, mb: 0.4 }}
                          />
                          <RadioGroup
                            name="status"
                            value={values.status}
                            onChange={(event) => {
                              setFieldValue("status", event.target.value);
                            }}
                            sx={{ ...FLEXBOX.rowCenter }}
                          >
                            <FormControlLabel
                              value={true}
                              control={
                                <Radio
                                  checkedIcon={
                                    <ICheckCircle
                                      sx={{
                                        color: palette.primary.light,
                                      }}
                                    />
                                  }
                                  sx={{
                                    "& .MuiSvgIcon-root": {
                                      fontSize: 18,
                                    },
                                  }}
                                />
                              }
                              label={
                                <Typography
                                  text="Active"
                                  sx={{ fontSize: 10, fontWeight: 400 }}
                                />
                              }
                            />
                            <FormControlLabel
                              value={false}
                              control={
                                <Radio
                                  checkedIcon={
                                    <ICheckCircle
                                      sx={{
                                        color: palette.primary.light,
                                      }}
                                    />
                                  }
                                  sx={{
                                    "& .MuiSvgIcon-root": {
                                      fontSize: 18,
                                    },
                                  }}
                                />
                              }
                              label={
                                <Typography
                                  text="Inactive"
                                  sx={{ fontSize: 10, fontWeight: 400 }}
                                />
                              }
                            />
                          </RadioGroup>
                          {errors.status && touched.status && (
                            <div>{errors.status}</div>
                          )}
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={2}>
                          <Typography
                            text="Manager"
                            sx={{ fontSize: 12, fontWeight: 400, mb: 0.4 }}
                          />
                          <Select
                            fullWidth
                            name="acc_manager"
                            size="small"
                            value={values.acc_manager}
                            onChange={(event) => {
                              setFieldValue("acc_manager", event.target.value);
                            }}
                            sx={{ ...INPHspForm }}
                          >
                            {MANAGERS.map((v, k) => (
                              <MenuItem value={v.id} key={k}>
                                {v.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={2}>
                          <Typography
                            text="Plan"
                            sx={{ fontSize: 12, fontWeight: 400, mb: 0.4 }}
                          />
                          <Select
                            fullWidth
                            name="plan"
                            size="small"
                            value={values.plan}
                            onChange={(event) => {
                              setFieldValue("plan", event.target.value);
                            }}
                            sx={{ ...INPHspForm }}
                          >
                            {PLANS.map((v, k) => (
                              <MenuItem value={v.id} key={k}>
                                {v.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box
                  pt={4}
                  {...FLEXBOX.rowCenterBetween}
                  alignItems="flex-start"
                >
                  <Button
                    disabled={isSubmitting}
                    theme="secondary"
                    onClick={() => formHandler("", false)}
                    sx={{
                      fontSize: 14,
                      borderRadius: 2,
                      p: "4px 24px",
                      color: palette.primary.light,
                      border: `1px solid ${palette.primary.light}`,
                      bgcolor: palette.complementary.dark4,
                      "&:hover": {
                        bgcolor: palette.complementary.dark4,
                      },
                    }}
                  >
                    Cancel
                  </Button>
                  {values.hsp_name &&
                    values.hsp_id &&
                    values.address &&
                    values.status &&
                    values.acc_manager && (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        theme="primary"
                        sx={{
                          fontSize: 14,
                          borderRadius: 2,
                          p: "4px 24px",
                        }}
                      >
                        {form.method === "create" ? "Submit" : "Update"}
                      </Button>
                    )}
                </Box>
              </FormWrapper>
            )}
          </Formik>
        </Container>
      </Box>
    </SwipeableDrawer>
  );
};

export default Form;
