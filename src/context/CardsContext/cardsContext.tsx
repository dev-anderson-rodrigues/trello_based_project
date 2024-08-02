import { createContext, useState } from "react";
import { CardsContextType, ICards } from "./types";

export const CardsContext = createContext<CardsContextType | undefined>(
  undefined
);

export const CardsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cards, setCards] = useState<ICards[]>([]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
};
