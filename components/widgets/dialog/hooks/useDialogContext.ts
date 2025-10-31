import { useContext } from 'react';
import DialogContext from '../provider/DialogContext';
import { DialogContextType } from '../types';

export const useDialogContext = (): DialogContextType => {
   const context = useContext(DialogContext);
   if (!context) {
      throw new Error('useDialogContext must be used within DialogWrapper');
   }
   return context;
};
