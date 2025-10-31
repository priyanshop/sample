import { Context, ContextType, useContext } from 'react';
import { MultistepsContext, MultistepsContextType } from '../context/Multisteps.context';

export const useMultistepsContext = (): ContextType<Context<MultistepsContextType>> => {
   const context = useContext(MultistepsContext);

   if (!context) {
      throw new Error('useMultisteps must be used within a MultistepsProvider');
   }

   return context;
};
