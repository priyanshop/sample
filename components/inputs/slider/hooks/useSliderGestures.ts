import { useCallback } from 'react';
import { Animated, PanResponder, View } from 'react-native';

interface UseSliderGesturesProps {
   sliderRef: React.RefObject<View | null>;
   position: Animated.Value;
   sliderWidth: number;
   THUMB_PADDING: number;
   getValueFromPosition: (pos: number) => number;
   onValueChange: (value: number) => void;
}

export const useSliderGestures = ({
   sliderRef,
   position,
   sliderWidth,
   THUMB_PADDING,
   getValueFromPosition,
   onValueChange,
}: UseSliderGesturesProps) => {
   const updatePositionFromTouch = useCallback(
      (pageX: number) => {
         sliderRef.current?.measure((_x, _y, _width, _height, pageXStart) => {
            const touchPosition = Math.max(
               THUMB_PADDING,
               Math.min(pageX - pageXStart, sliderWidth - THUMB_PADDING),
            );
            position.setValue(touchPosition);
            onValueChange(Math.round(getValueFromPosition(touchPosition)));
         });
      },
      [sliderRef, position, sliderWidth, THUMB_PADDING, getValueFromPosition, onValueChange],
   );

   return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: evt => {
         updatePositionFromTouch(evt.nativeEvent.pageX);
      },
      onPanResponderMove: evt => {
         updatePositionFromTouch(evt.nativeEvent.pageX);
      },
   });
};
