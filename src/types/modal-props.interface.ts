interface IModalProps {
  isOpen: boolean;
  onClose: (params?: any) => void;
  onConfirm: (params?: any) => void;
  title: string;
  description: string;
  confirmButtonText?: string;
}

export default IModalProps;
