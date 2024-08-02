import { useContext } from "react";
import { CardsContext } from "./cardsContext";

export const useCards = () => {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error("useCards must be used within an CardsProvider");
  }
  return context;
};
