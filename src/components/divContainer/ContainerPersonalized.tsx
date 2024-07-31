import { forwardRef } from "react";
import { useResponsive } from "../../context/ResponsiveContext/useResponsive";
import { propsContainer } from "./types";
import { Outlet } from "react-router-dom";
import React from "react";

const ContainerPersonalized = forwardRef<HTMLDivElement, propsContainer>(
  ({ tagSemantica: Tag = "div", children, style, rest }, ref) => {
    const { isTablet, isDesktop } = useResponsive();
    const paddingLeft = isTablet && isDesktop ? "0px" : "";
    const paddingRight = isTablet && isDesktop ? "0px" : "";
    const sanitizedProps = { ...rest };

    return React.createElement(
      Tag,
      {
        style: {
          paddingLeft: paddingLeft,
          paddingRight: paddingRight,
          width: "100vw",
          ...(isTablet && isDesktop ? { maxWidth: "100%" } : {}),
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          ...style,
        } as React.CSSProperties,
        ref: ref,
        ...sanitizedProps,
      },
      children || <Outlet />
    );
  }
);

export default ContainerPersonalized;
