import useFooterStyle from "./useFooterStyle";
import { Container } from "@src/components/Layout";

const Footer = () => {
  const style = useFooterStyle();

  return (
    <Container
      fullWidth
      component="footer"
      sx={{ container: style?.mainContainer, content: {} }}
    >
      Footer Content Here
    </Container>
  );
};

export default Footer;
