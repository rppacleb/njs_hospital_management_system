import {
  TextField as MUITextField,
  InputAdornment,
  useTheme,
} from "@mui/material";
import { FastField, getIn } from "formik";
import { MailOutline as IMailOutline } from "@mui/icons-material";

const BaseField = ({
  sx = {},
  adornment = { position: "start", Render: IMailOutline },
  helperText,
  form: { isSubmitting, touched, errors },
  field,
  showError = true,
  ...props
}) => {
  const {
    useCutomStyles: { INPPrimary },
  } = useTheme();
  const formError = getIn(errors, field.name);
  const hasError = showError && !!getIn(touched, field.name) && !!formError;
  const errMsg = hasError ? formError : helperText;

  const theming = () => {
    return { ...INPPrimary, ...sx };
  };

  return (
    <MUITextField
      sx={{ ...theming() }}
      error={hasError}
      helperText={errMsg}
      {...props}
      {...field}
      disabled={isSubmitting}
      InputProps={{
        [`${adornment.position}Adornment`]: (
          <InputAdornment position={adornment.position}>
            <adornment.Render />
          </InputAdornment>
        ),
      }}
    />
  );
};

const TextField = (props) => {
  return <FastField {...props} component={BaseField} />;
};
export default TextField;
