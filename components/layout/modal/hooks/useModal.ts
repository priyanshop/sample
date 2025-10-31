import { ModalContextType } from '../provider/ModalContext';
import { useState } from 'react';

export interface UseModalProps {
   isVisible?: boolean;
   onClose?: () => void;
   height?: number;
}

export const useModal = ({ height = 550, onClose, isVisible }: UseModalProps): ModalContextType => {
   const [defaultIssVisible, setIsVisible] = useState(false);

   const LOCAL_IS_VISIBLE = isVisible ?? defaultIssVisible;

   const defaultOnClose = () => (onClose ? onClose() : setIsVisible(false));

   const onOpen = () => {
      setIsVisible(true);
   };

   return {
      isVisible: LOCAL_IS_VISIBLE,
      height,
      onClose: defaultOnClose,
      onOpen,
   };
};
