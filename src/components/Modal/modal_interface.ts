export interface IModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}
