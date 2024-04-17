import { useTheme } from "@emotion/react";
import { Box, Stack } from "@mui/material";
import { Typography } from "@src/components/DataDisplay";
import { Container } from "@src/components/Layout";
import { Button } from "@src/components/Inputs";
import { Formik, Form, Field } from "formik";
import { __LOCALDB } from "@src/utils/database";
import { __TBL } from "@src/utils/enum";
import {
  MailOutline as IMailOutline,
  LockOutlined as IlockOutlined,
} from "@mui/icons-material";
import ThirdParty from "./ThirdParty";
import TextField from "@src/components/Inputs/TextField";
import * as Yup from "yup";
import { isUndefined } from "@src/utils/common";
import { useState } from "react";
import { cookie } from "@src/utils/cache/cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [verificationMsg, setVerificationMsg] = useState({
    stat: false,
    msg: "",
  });
  const theme = useTheme();
  const router = useRouter();
  const { palette } = theme;
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const submitHandler = async (values) => {
    const account = await __LOCALDB.read(__TBL.USERS, values.email);
    if (isUndefined(account))
      return setVerificationMsg({ stat: false, msg: "Account does not exist" });
    if (account.password !== values.password)
      return setVerificationMsg({
        stat: false,
        msg: "Account credentials mismatched",
      });
    cookie.set("hms_app_session", JSON.stringify(account));
    router.push("/");
  };

  return (
    <Container
      fullWidth
      fullContent
      sx={{
        container: {
          width: "100%",
          height: "100%",
        },
        content: {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Box
        height="100%"
        width="40%"
        bgcolor={palette.complementary.dark2}
      ></Box>
      <Box
        height="100%"
        width="60%"
        bgcolor={palette.complementary.dark1}
        color={palette.primary.light}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Container
          maxWidth={320}
          sx={{
            container: {
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            },
          }}
        >
          <Box>
            <Typography
              text="Sign in via SSO"
              variant="h1"
              sx={{ fontSize: 24, fontWeight: 500, mb: 2 }}
            />
            <ThirdParty />
          </Box>
          <Box className="separator">or</Box>
          <Box>
            <Typography
              text="Sign in with your Satori credentials"
              variant="h2"
              sx={{ fontSize: 14, fontWeight: 400, mb: 1.5 }}
            />
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={submitHandler}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Stack spacing={2}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      name="email"
                      size="small"
                      placeholder="Email"
                      fullWidth
                      adornment={{ position: "start", Render: IMailOutline }}
                    />
                    <Field
                      as={TextField}
                      variant="outlined"
                      size="small"
                      type="password"
                      name="password"
                      placeholder="Password"
                      fullWidth
                      adornment={{ position: "start", Render: IlockOutlined }}
                    />
                    <Typography
                      text={verificationMsg.msg}
                      variant="h2"
                      sx={{ fontSize: 12, color: "#CB3837" }}
                    />
                    <Box pt={2} width="100%">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        label="Login with Satori Credentials"
                        theme="primary"
                        sx={{
                          fontSize: 14,
                          borderRadius: 2,
                          px: "32px",
                          width: "100%",
                        }}
                      />
                    </Box>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Login;
