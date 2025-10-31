import { Children } from '@/types';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Step } from '../types';
import { MultistepsContext, MultistepsContextType } from './Multisteps.context';

interface MultiStepProviderProps {
   steps: Step[];
   children: Children;
   onComplete?: () => void | undefined;
   stepId?: string;
   initialStep?: number;
}

export function MultistepsProvider({
   children,
   steps,
   onComplete,
   stepId = 'main',
   initialStep = 1,
}: MultiStepProviderProps): React.ReactElement<MultistepsContextType> {
   const params = useLocalSearchParams<Record<string, string>>();
   const router = useRouter();

   const paramKey = `step_${stepId}`;
   const currentStepParam = params[paramKey];

   const index =
      Number(currentStepParam) > 0 && Number(currentStepParam) <= steps?.length
         ? Number(currentStepParam)
         : initialStep > 0 && initialStep <= steps?.length
           ? initialStep
           : 1;

   useEffect(() => {
      if (!currentStepParam) {
         router.setParams({ [paramKey]: String(index) });
      }
   }, []);

   const goNext = (): void => {
      if (index === steps.length) {
         onComplete?.();
      } else {
         router.setParams({ [paramKey]: String(index + 1) });
      }
   };

   const goBack = (): void => {
      const newIndex = index - 1 < 1 ? 1 : index - 1;
      router.setParams({ [paramKey]: String(newIndex) });
   };

   const jump = (jumpIndex: number): void => {
      if (jumpIndex < 1 || jumpIndex > steps.length) return;
      router.setParams({ [paramKey]: String(jumpIndex) });
   };

   return (
      <MultistepsContext.Provider
         value={{
            steps,
            currentStepIndex: index,
            goBack,
            jump,
            goNext,
            onComplete,
         }}
      >
         {children}
      </MultistepsContext.Provider>
   );
}
