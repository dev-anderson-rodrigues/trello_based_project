import { forwardRef } from "react";
import TextField from "@mui/material/TextField";
import { propsInput } from "./types";

const Input = forwardRef<HTMLInputElement, propsInput>(
  ({ label, ...rest }, ref) => {
    return (
      <TextField
        label={label}
        placeholder={`Enter your ${label}`}
        inputRef={ref}
        variant="outlined"
        fullWidth
        {...rest}
      />
    );
  }
);

export default Input;
