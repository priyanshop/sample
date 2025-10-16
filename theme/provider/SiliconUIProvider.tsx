import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
import { useSiliconUI } from '../hooks/useSiliconUI';
import { SiliconUIContext, SiliconUIContextType } from '../hooks/useSiliconUIContext';

interface SiliconUIProviderProps {
  children: React.ReactNode;
  context?: SiliconUIContextType;
}

export const SiliconUIProvider: React.FC<SiliconUIProviderProps> = ({ children, context }) => {
  const defaultTheme = useSiliconUI();

  return (
    <SiliconUIContext.Provider value={context ?? defaultTheme}>
      <PaperProvider
        settings={{ rippleEffectEnabled: false }}
        theme={context ? context : (defaultTheme as unknown as ThemeProp)}
      >
        {children}
      </PaperProvider>
    </SiliconUIContext.Provider>
  );
};
