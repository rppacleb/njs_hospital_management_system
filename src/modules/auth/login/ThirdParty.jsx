import { Button } from "@src/components/Inputs";
import AuthG from "@leecheuk/react-google-login";

const ThirdParty = () => (
  <AuthG
    clientId="9179683700-vvlvtj7p7tcm49d9ngb5kcvee76h033r.apps.googleusercontent.com"
    render={(props) => (
      <Button
        label="Continue with Google"
        theme="secondary"
        onClick={props.onClick}
        sx={{ borderRadius: 2, px: "32px" }}
      />
    )}
    buttonText="Login"
    onSuccess={(e) => responseHandler(e, "google")}
    onFailure={(e) => responseHandler(e, "google")}
    cookiePolicy={"single_host_origin"}
  />
);

export default ThirdParty;
