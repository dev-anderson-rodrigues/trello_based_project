import { useState } from "react";
import Input from "../input/Input";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ToggleButton from "../toogleTheme";
import { useCards } from "../../context/CardsContext/useCards";
import { ICards } from "../../context/CardsContext/types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { propsCards } from "./types";

const Cards = ({ children, indexColumn }: propsCards) => {
  const { cards, setCards } = useCards();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddCard = () => {
    const newCard: ICards = {
      id: cards.length + 1,
      title,
      description,
      columnIndex: indexColumn, // Adiciona a coluna ao novo card
    };
    setCards([...cards, newCard]);
    setTitle("");
    setDescription("");
  };

  return (
    <div
      style={{
        backgroundColor: "green",
        marginBottom: "10px",
      }}
    >
      {/* Exibe inputs apenas na coluna correta */}
      {indexColumn === 0 ? (
        <div>
          <Input
            label="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            label="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div
            style={{
              boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
              width: "37%",
              borderRadius: "10px",
            }}
          >
            <ToggleButton text="Enviar card" onClick={handleAddCard} />
          </div>
        </div>
      ) : null}

      {cards
        .filter((card) => card.columnIndex === indexColumn) // Filtra cards pela coluna
        .map((card) => (
          <Accordion key={card.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography>{card.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{card.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

      {children}
    </div>
  );
};

export default Cards;
