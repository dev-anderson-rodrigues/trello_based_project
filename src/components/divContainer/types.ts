/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme } from "@emotion/react";
import { CSSProperties, HTMLAttributes } from "react";

export interface propsContainer extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: CSSProperties;
  isTablet?: boolean;
  isDesktop?: boolean;
  theme: Theme;
  [key: string]: any;
  tagSemantica?: React.ElementType;
}
