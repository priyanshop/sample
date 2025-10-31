import { useCallback } from 'react';

interface UseSliderCalculationsProps {
   min: number;
   max: number;
   sliderWidth: number;
   THUMB_WIDTH: number;
}

export const useSliderCalculations = ({
   min,
   max,
   sliderWidth,
   THUMB_WIDTH,
}: UseSliderCalculationsProps) => {
   const THUMB_PADDING = THUMB_WIDTH / 2;

   const getValueFromPosition = useCallback(
      (pos: number) => {
         const ratio = (pos - THUMB_PADDING) / (sliderWidth - THUMB_WIDTH);
         return min + ratio * (max - min);
      },
      [min, max, sliderWidth, THUMB_WIDTH, THUMB_PADDING],
   );

   const getPositionFromValue = useCallback(
      (val: number) => {
         return THUMB_PADDING + ((val - min) / (max - min)) * (sliderWidth - THUMB_WIDTH);
      },
      [min, max, sliderWidth, THUMB_WIDTH, THUMB_PADDING],
   );

   return {
      THUMB_PADDING,
      getValueFromPosition,
      getPositionFromValue,
   };
};
