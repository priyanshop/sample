import { createContext, useContext } from 'react';
import { darkTheme } from '../constants/darkTheme';
import { lightTheme } from '../constants/lightTheme';

export type SiliconUIContextType = typeof darkTheme | typeof lightTheme;

export const SiliconUIContext = createContext<SiliconUIContextType | null>(null);

export const useSiliconUIContext = (): SiliconUIContextType => {
  const context = useContext(SiliconUIContext);
  if (!context) {
    throw new Error('useSiliconUIContext must be used within a SiliconUIProvider');
  }

  return context;
};
