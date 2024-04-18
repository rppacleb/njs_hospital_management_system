import {
  RestartAlt as IRestartAlt,
  CheckCircleOutline as ICheckCircle,
} from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Typography } from "@src/components/DataDisplay";
import { Button } from "@src/components/Inputs";

const Filter = ({ FLEXBOX, palette, INPSearch }) => {
  return (
    <Box {...FLEXBOX.col}>
      <Box {...FLEXBOX.rowCenterBetween}>
        <Typography text="Filter by" sx={{ fontSize: 18, fontWeight: 600 }} />
        <Button
          theme="secondary"
          sx={{
            fontSize: 14,
            borderRadius: 2,
            p: "4px 12px",
            ...FLEXBOX.rowCenter,
            gap: 0.4,
            color: palette.primary.light,
            border: `1px solid ${palette.primary.light}`,
            bgcolor: palette.complementary.dark4,
          }}
        >
          <IRestartAlt />
          Reset
        </Button>
      </Box>
      <Box mt={4} {...FLEXBOX.col} gap={0.2}>
        <Typography
          text="By geographic location"
          sx={{ fontSize: 12, fontWeight: 400, mb: 0.4 }}
        />
        <TextField
          sx={{ ...INPSearch }}
          InputProps={{
            sx: { fontSize: 12 },
          }}
          placeholder="Search for address"
          name="address"
          size="small"
          fullWidth
        />
      </Box>
      <Box mt={4} {...FLEXBOX.col} gap={0.2}>
        <Typography
          text="By ID"
          sx={{ fontSize: 12, fontWeight: 400, mb: 0.4 }}
        />
        <TextField
          sx={{ ...INPSearch }}
          InputProps={{
            sx: { fontSize: 12 },
          }}
          placeholder="Search for address"
          name="address"
          size="small"
          fullWidth
        />
      </Box>
      <Box mt={4} {...FLEXBOX.col} gap={0.2}>
        <RadioGroup name="status" sx={{ ...FLEXBOX.rowCenter }} value={true}>
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
      </Box>
    </Box>
  );
};

export default Filter;
