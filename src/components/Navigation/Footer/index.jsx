import { Typography } from "@src/components/DataDisplay";
import useFooterStyle from "./useFooterStyle";
import { Container } from "@src/components/Layout";
import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import { FLEXBOX } from "@src/constants/Snippet";

const Footer = () => {
  const style = useFooterStyle();

  return (
    <Container
      fullWidth
      component="footer"
      sx={{ container: style?.mainContainer, content: {} }}
    >
      <Box {...FLEXBOX.rowCenterBetween} alignItems="flex-start" gap={4}>
        <Box width="70%">
          <Box {...FLEXBOX.rowCenter} gap={1}>
            <Typography
              text="S"
              variant="body1"
              sx={{ fontSize: 48, fontWeight: 900 }}
            />
            <Typography text="Satori" sx={{ fontSize: 24, fontWeight: 400 }} />
          </Box>
          <Box>
            <Typography
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, tenetur deleniti! Quia, accusamus. Facilis, officia itaque neque illo maiores dolorum enim quo quia quae quam, harum sapiente repellendus deserunt atque?"
              sx={{ fontSize: 12, fontWeight: 400 }}
            />
          </Box>
        </Box>
        <Box width="30%">
          <Box {...FLEXBOX.rowCenter} gap={1}>
            <Typography text="Title 1" sx={{ fontSize: 24, fontWeight: 400 }} />
          </Box>
          <Box>
            <Typography
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, tenetur deleniti! Quia, accusamus. Facilis, officia itaque neque illo"
              sx={{ fontSize: 12, fontWeight: 400 }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
