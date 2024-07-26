import { styled } from "styled-components";
import imgLeft from "../../assets/images/trello-left.4f52d13c.svg";
import imgRight from "../../assets/images/trello-right.e6e102c7.svg";

export type containerProps = {
  padding?: string;
  backgroundColor?: string;
};
export const Container = styled.div<containerProps>`
  width: 100vw;
  height: 100vh;
  padding: ${(props) => props.padding || "10px"};
  background-color: ${(props) => props.backgroundColor || "#f5f5f5"};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  background-position: left bottom, right bottom;
  background-size: 368px, 368px;
  background-repeat: no-repeat, no-repeat;
  background-image: url(${imgLeft}), url(${imgRight});
  transition: background-image 0.5s ease;

  .logo {
    position: fixed;
    left: 10px;
    top: 0px;
    max-height: 100vh;
    max-width: 100vw;
  }
`;
