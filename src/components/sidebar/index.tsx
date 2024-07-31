import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  createSvgIcon,
} from "@mui/material";
import AddBoardModal from "./AddBoardModal";
import DeleteIcon from "@mui/icons-material/Delete";

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

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [boards, setBoards] = useState<string[]>([]);

  const handleDrawerToggle = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const handleAddBoard = (name: string) => {
    setBoards([...boards, name]);
  };

  return (
    <>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            top: 55,
            backgroundColor: "#1a1033",
            color: "#ffffff",
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
              color: "#ffffff",
              borderBottom: "1px solid #535bf2",
              gap: "10px",
            }}
          >
            <h3>Seus quadros</h3>
            <ListItem
              button
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
            </ListItem>
          </div>

          <Divider />
          {boards.map((board, index) => (
            <ListItem
              button
              key={index}
              style={{
                padding: "10px",
                color: "#ffffff",
                textAlign: "left",
                marginLeft: "20px",
                marginTop: "20px",
                maxWidth: "80%",
              }}
            >
              <ListItemText primary={board} />
              <DeleteIcon
                onClick={() => setBoards(boards.filter((b) => b !== board))}
              />
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
