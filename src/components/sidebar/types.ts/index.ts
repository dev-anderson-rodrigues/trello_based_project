export interface AddBoardModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (name: string) => void;
}
