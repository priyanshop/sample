import { Context, createContext } from 'react';
import { UseModalProps } from '../hooks/useModal';

export interface ModalContextType extends UseModalProps {
   isVisible: boolean;
   onOpen: () => void;
   onClose: () => void;
}

const ModalContext: Context<ModalContextType> = createContext<ModalContextType>({
   height: 180,
   onOpen: () => {},
   isVisible: false,
   onClose: () => {},
});

export default ModalContext;
