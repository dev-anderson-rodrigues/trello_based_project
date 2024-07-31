import { ReactNode } from "react";
import ContainerPersonalized from "../divContainer/ContainerPersonalized";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <ContainerPersonalized
      tagSemantica="section"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "30%",
        height: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        padding: "20px",
        color: "black", // Cor branca para o texto "loading..."
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "8px solid #646cff",
            borderTop: "8px solid #f0f0f0",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            animation: "spin 1s linear infinite",
            marginBottom: "10px", // Espaço entre o spinner e o texto
          }}
        />
        <div>{children}</div>
      </div>
    </ContainerPersonalized>
  );
};

export default Modal;

const style = document.createElement("style");
style.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
