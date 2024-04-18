import { Box } from "@mui/material";
import { Typography } from "@src/components/DataDisplay";
import { Button } from "@src/components/Inputs";

export const MenuManagement = ({ FLEXBOX, palette, redirectHandler }) => {
  return (
    <Box
      bgcolor={palette.complementary.dark6}
      borderRadius={2}
      width={180}
      sx={{ position: "absolute", right: 0 }}
      {...FLEXBOX.col}
    >
      <Button fullWidth sx={{ justifyContent: "flex-start", fontSize: 12 }}>
        Manage Menu 1
      </Button>
      <Button fullWidth sx={{ justifyContent: "flex-start", fontSize: 12 }}>
        Manage Menu 2
      </Button>
      <Button
        fullWidth
        sx={{ justifyContent: "flex-start", fontSize: 12 }}
        onClick={() => redirectHandler("/management/hospitals")}
      >
        Manage Hospitals
      </Button>
    </Box>
  );
};
