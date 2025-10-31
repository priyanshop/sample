import { Context, createContext } from 'react';
import { DialogContextType } from '../types';

const DialogContext: Context<DialogContextType> = createContext<DialogContextType>({
   showDialog: () => {},
   hideDialog: () => {},
   config: null,
});

export default DialogContext;
