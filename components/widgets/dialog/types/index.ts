export type DialogConfig = {
   title: string;
   message: string;
   confirmLabel?: string;
   cancelLabel?: string;
   variant?: 'primary' | 'secondary' | 'danger';
   isVisible?: boolean;
   onConfirm: () => void;
   onCancel?: () => void;
} | null;

export interface DialogContextType {
   showDialog: (config: DialogConfig) => void;
   hideDialog: () => void;
   config: DialogConfig;
}
