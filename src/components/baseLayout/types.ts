/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLAttributes } from "react";

export interface propsContainer extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  display?: string;
  backgroundColor?: string;
  paddingLeft?: string;
  paddingRight?: string;
  [key: string]: any;
  tagSemantica: keyof JSX.IntrinsicElements;
}
