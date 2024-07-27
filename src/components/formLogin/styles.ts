import { styled } from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .logo {
    top: 60px;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  h2 {
    padding-top: 20px;
    font-size: 1.5rem;
  }
  button {
    width: 90%;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    max-width: inherit;
  }

  .container_link {
    display: flex;
    gap: 6px;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: max-content;
    max-width: fit-content;
    margin: auto;
    font-size: inherit;

    span {
      width: 6px;
      height: 6px;
      background-color: #6379f4;
      opacity: 0.9;
      border-radius: 5px;
    }
  }
`;
