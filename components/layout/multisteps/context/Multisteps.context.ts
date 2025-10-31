import { Context, createContext } from 'react';
import { Step } from '../types';

export interface MultistepsContextType {
   steps: Step[];
   currentStepIndex: number;
   goNext: () => void;
   goBack: () => void;
   jump: (index: number) => void;
   onComplete?: () => void | undefined;
}

export const MultistepsContext: Context<MultistepsContextType> =
   createContext<MultistepsContextType>({
      steps: [],
      currentStepIndex: 1,
      goBack: () => {},
      jump: () => {},
      goNext: () => {},
      onComplete: () => {},
   });
