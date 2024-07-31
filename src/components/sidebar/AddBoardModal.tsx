// src/components/AddBoardModal.tsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { AddBoardModalProps } from "./types.ts";

const AddBoardModal: React.FC<AddBoardModalProps> = ({
  open,
  onClose,
  onAdd,
}) => {
  const [boardName, setBoardName] = useState("");

  const handleAdd = () => {
    if (boardName.trim()) {
      onAdd(boardName);
      setBoardName("");
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Adicione um novo quadro</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Nome do quadro"
          type="text"
          fullWidth
          variant="standard"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleAdd}>Adicionar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddBoardModal;
