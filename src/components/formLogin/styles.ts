import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .logo {
    top: 120px;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 100%;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .container_link {
    display: flex;
    gap: 6px;
    align-items: center;
    text-align: center;
    justify-content: center;

    span {
      width: 6px;
      height: 6px;
      background-color: #6379f4;
      opacity: 0.9;
      border-radius: 5px;
    }
  }
`;
