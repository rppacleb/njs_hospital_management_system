import { Button } from "@src/components/Inputs";
import AuthG from "@leecheuk/react-google-login";
import { FLEXBOX } from "@src/constants/Snippet";
import Image from "next/image";
import { Box } from "@mui/material";

const ThirdParty = ({ responseHandler }) => (
  <AuthG
    clientId="9179683700-vvlvtj7p7tcm49d9ngb5kcvee76h033r.apps.googleusercontent.com"
    render={(props) => (
      <Button
        theme="secondary"
        onClick={props.onClick}
        sx={{ borderRadius: 2, px: "32px" }}
      >
        <Box {...FLEXBOX.rowCenter} gap={2}>
          <Image
            src="/assets/img/google1.png"
            width={20}
            height={20}
            alt="Google logo"
          />
          Continue with Google
        </Box>
      </Button>
    )}
    buttonText="Login"
    onSuccess={(e) => responseHandler(e, "google")}
    onFailure={(e) => responseHandler(e, "google")}
    cookiePolicy={"single_host_origin"}
  />
);

export default ThirdParty;
