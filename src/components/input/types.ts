import { TextFieldProps } from "@mui/material/TextField";

export interface propsInput extends Omit<TextFieldProps, "ref"> {
  label: string;
  type?: "text" | "password" | "email";
  errors?: string;
}
