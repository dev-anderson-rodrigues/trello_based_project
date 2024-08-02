export interface CardsContextType {
  cards: ICards[];
  setCards: React.Dispatch<React.SetStateAction<ICards[]>>;
}

export interface ICards {
  id?: number;
  title?: string;
  description?: string;
  columnIndex?: number;
}
