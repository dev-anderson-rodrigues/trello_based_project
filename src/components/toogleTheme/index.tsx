import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "styled-components";

interface ToggleButtonProps {
  onClick?: () => void;
  text?: string;
  children?: React.ReactNode;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onClick,
  children,
  text,
}) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      style={{
        color: theme.colors.text_color.secondary,
        fontFamily: "Poppins",
        borderRadius: "10px",
        fontWeight: "700",
      }}
    >
      {children}
      {text}
    </Button>
  );
};

export default ToggleButton;
