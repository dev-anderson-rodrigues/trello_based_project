import React, { useState } from "react";
import { Drawer, List, ListItem, Divider, createSvgIcon } from "@mui/material";
import AddBoardModal from "./AddBoardModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "styled-components";
import ToggleButton from "../toogleTheme";

const PlusIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);

interface SidebarProps {
  onAddBoard: (newBoard: string) => void;
  onBoardClick: (boardId: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onAddBoard, onBoardClick }) => {
  const [open, setOpen] = useState(false);
  const [boards, setBoards] = useState<{ id: number; name: string }[]>([]);
  const theme = useTheme();

  const handleDrawerToggle = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const handleAddBoard = (name: string) => {
    const newBoard = { id: boards.length + 1, name };
    setBoards([...boards, newBoard]);
    if (name) {
      onAddBoard(name);
    }
  };

  const handleDeleteBoard = (id: number) => {
    setBoards(boards.filter((board) => board.id !== id));
  };

  return (
    <>
      <section
        aria-hidden="false"
        style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap" }}
      >
        {/* ... Your section styles ... */}
      </section>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            top: 55,
            backgroundColor: theme.colors.background.primary,
            color: theme.colors.text_color.secondary,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <div
            style={{
              display: "flex",
              width: "200px",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "transparent",
              padding: "10px",
              borderBottom: `1px solid ${theme.colors.text_color.secondary}`,
              gap: "5px",
            }}
          >
            <h3
              style={{
                color: theme.colors.text_color.secondary,
                fontWeight: "600",
                fontFamily: "Poppins",
              }}
            >
              Seus quadros
            </h3>
            <div
              style={{
                maxWidth: "40px",
                maxHeight: "40px",
                display: "flex",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={handleDrawerToggle}
            >
              <PlusIcon style={{ width: "40px" }} />
            </div>
          </div>

          <Divider />
          {boards.map(({ id, name }) => (
            <ListItem
              button
              aria-hidden="false"
              onClick={() => onBoardClick(id)}
              key={id}
              style={{
                padding: "1px",
                color: theme.colors.text_color.secondary,
                textAlign: "left",
                marginTop: "20px",
                marginLeft: "20px",
                maxWidth: "76%",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ToggleButton>{name}</ToggleButton>
              <DeleteIcon onClick={() => handleDeleteBoard(id)} />
            </ListItem>
          ))}
          <Divider />
        </List>
      </Drawer>

      <AddBoardModal
        open={open}
        onClose={handleCloseModal}
        onAdd={handleAddBoard}
      />
    </>
  );
};

export default Sidebar;
