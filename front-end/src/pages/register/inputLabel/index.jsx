import { TextField } from "@mui/material";

export default function InputLabel({
  label,
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <TextField
      label={label}
      required
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      error={error}
      InputLabelProps={{
        style: {
          color: "gray",
          shrink: true,
        },
      }}
    />
  );
}
