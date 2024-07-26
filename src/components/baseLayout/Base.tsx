import { Outlet } from "react-router-dom";
import { useResponsive } from "../../context/ResponsiveContext/useResponsive";
import { Container } from "./styles";

const BaseLayout = () => {
  const { isTablet, isDesktop } = useResponsive();
  return (
    <Container
      paddingLeft={isTablet && isDesktop ? "0px" : "0px"}
      paddingRight={isTablet && isDesktop ? "0px" : "0px"}
    >
      <Outlet />
    </Container>
  );
};

export default BaseLayout;
