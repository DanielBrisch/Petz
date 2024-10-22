import { Box, TextField, Typography } from "@mui/material";

export default function InputLabel({ label, placeholder, value, onChange }) {
  return (
    <Box sx={{ mb: "1m" }}>
      <Typography>{label}</Typography>
      <TextField
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange}
        InputLabelProps={{
          style: {
            color: "gray",
          },
        }}
      />
    </Box>
  );
}
