import { Outlet } from "react-router-dom";
import { forwardRef } from "react";
import { propsContainer } from "../divContainer/types";
import ContainerPersonalized from "../divContainer/ContainerPersonalized";
import { useTheme } from "styled-components";
// import { useTheme } from "styled-components";

const BaseLayout = forwardRef<HTMLDivElement, propsContainer>((rest, ref) => {
  const theme = useTheme();
  return (
    <ContainerPersonalized
      ref={ref}
      {...rest}
      style={{
        height: "94vh",
        backgroundColor:
          theme.colors.background.secondary || "defaultBackgroundColor",
      }}
      className="base_layout"
      tagSemantica="main"
    >
      <Outlet />
    </ContainerPersonalized>
  );
});

export default BaseLayout;
