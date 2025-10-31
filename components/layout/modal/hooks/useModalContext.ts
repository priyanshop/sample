import { useContext } from 'react';
import ModalContext, { ModalContextType } from '../provider/ModalContext';

export const useModalContext = (): ModalContextType => {
   const context = useContext(ModalContext);

   if (!context) {
      throw new Error('useModal must be used within a ModalProvider');
   }
   return context;
};
