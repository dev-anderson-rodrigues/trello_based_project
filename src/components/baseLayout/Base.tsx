import { Outlet } from "react-router-dom";
import { forwardRef } from "react";
import { propsContainer } from "../divContainer/types";
import ContainerPersonalized from "../divContainer/ContainerPersonalized";

const BaseLayout = forwardRef<HTMLDivElement, propsContainer>((rest, ref) => {
  return (
    <ContainerPersonalized
      ref={ref}
      {...rest}
      style={{ height: "94vh", backgroundColor: "white" }}
      className="base_layout"
      tagSemantica="main"
    >
      <Outlet />
    </ContainerPersonalized>
  );
});

export default BaseLayout;
