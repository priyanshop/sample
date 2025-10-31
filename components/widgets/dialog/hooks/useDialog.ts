import { useState } from 'react';
import { DialogConfig, DialogContextType } from '../types';

export const useDialog = (): DialogContextType => {
   const [config, setConfig] = useState<DialogConfig>(null);

   const showDialog = (dialogConfig: DialogConfig): void => {
      setConfig(dialogConfig);
   };

   const hideDialog = (): void => {
      setConfig(null);
   };

   return {
      showDialog,
      hideDialog,
      config,
   };
};
