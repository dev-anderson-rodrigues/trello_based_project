import { useTheme } from "styled-components";
import ContainerPersonalized from "../../components/divContainer/ContainerPersonalized";
import Sidebar from "../../components/sidebar";
import { useAuth } from "../../context/AuthContext/useAuth";
import { useState } from "react";
import { Divider } from "@mui/material";
import Cards from "../../components/card";

const Columns = ["New", "To Do", "Doing", "Done"];

const Dashboard = () => {
  const { user } = useAuth();
  const theme = useTheme();
  const [selectedBoard, setSelectedBoard] = useState<number | null>(null);
  const [boards, setBoards] = useState<string[]>([]);

  const handleAddBoard = (newBoard: string) => {
    setBoards([...boards, newBoard]);
  };

  const handleBoardClick = (index: number) => {
    setSelectedBoard(index);
  };

  return (
    <ContainerPersonalized
      tagSemantica="section"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "94vh",
      }}
    >
      <Sidebar onAddBoard={handleAddBoard} onBoardClick={handleBoardClick} />
      <div
        style={{
          maxWidth: "87vw",
          marginLeft: "240px",
          marginRight: "10px",
          height: "94vh",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {selectedBoard ? (
          <div style={{ display: "flex", gap: "20px" }}>
            {Columns.map((column, index) => (
              <div
                key={index}
                style={{
                  width: "20vw",
                  height: "90vh",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* <Input label="Digite um título para o card" onChange={(e) => setColumns(e.target.value)}/> */}
                <h2 style={{ color: theme.colors.text_color.primary }}>
                  {column}
                </h2>
                <Divider />
                <div
                  style={{
                    maxWidth: "95%",
                    maxHeight: "85%",
                    overflow: "auto",
                    padding: "10px",
                  }}
                >
                  <Cards indexColumn={index} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2
            style={{
              textAlign: "center",
              fontSize: "3rem",
              color: theme.colors.text_color.primary,
            }}
          >
            Olá, Seja Bem-vindo! {user?.name}
          </h2>
        )}
      </div>
    </ContainerPersonalized>
  );
};

export default Dashboard;
