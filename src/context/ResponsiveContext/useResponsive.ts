import { useContext } from "react";
import { IResponsive } from "./types";
import { ResponsiveContext } from "../ResponsiveContext/responsiveContext";

export const useResponsive = (): IResponsive => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error("useResponsive must be used within a ResponsiveContext");
  }
  return context;
};
