import { styled } from "styled-components";
interface isMobile {
  paddingRight: string;
  paddingLeft: string;
  backgroundColor?: string;
}

export const Container = styled.div<isMobile>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  padding-right: ${(props) => props.paddingRight || "0px"};
  padding-left: ${(props) => props.paddingLeft || "0px"};
`;
