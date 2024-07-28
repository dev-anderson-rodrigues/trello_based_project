import { styled } from "styled-components";
import { IResponsive } from "./types";

export const StyledContainer = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["isMobileLow", "isMobile", "isTablet", "isDesktop"].includes(prop),
})<IResponsive>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
`;
