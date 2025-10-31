import React from 'react';
import { useDialog } from '../hooks/useDialog';
import DialogContext from './DialogContext';
import DialogContent from '../components/DialogContent';

export function DialogWrapper({ children }: { children: React.ReactNode }): React.ReactElement {
   const { showDialog, hideDialog, config } = useDialog();

   return (
      <DialogContext.Provider value={{ showDialog, hideDialog, config }}>
         <DialogContent />
         {children}
      </DialogContext.Provider>
   );
}
