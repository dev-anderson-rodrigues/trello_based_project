import { forwardRef } from "react";
import TextField from "@mui/material/TextField";
import { propsInput } from "./types";

const Input = forwardRef<HTMLInputElement, propsInput>(
  ({ label, required, ...rest }, ref) => {
    return (
      <TextField
        label={label}
        placeholder={`Enter your ${label}`}
        inputRef={ref}
        variant="outlined"
        style={{ maxWidth: "90%" }}
        fullWidth
        required={required}
        {...rest}
      />
    );
  }
);

export default Input;
