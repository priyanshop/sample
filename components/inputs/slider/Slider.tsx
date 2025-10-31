import { useSiliconUIContext } from '@/theme';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './SliderStyles';
import { useSliderCalculations } from './hooks/useSliderCalculations';
import { useSliderGestures } from './hooks/useSliderGestures';

const THUMB_WIDTH = 20;

interface SliderProps {
   value: number;
   onValueChange: (value: number) => void;
   min?: number;
   max?: number;
   showLabels?: boolean;
   minimumTrackTintColor?: string;
   maximumTrackTintColor?: string;
}

export const Slider: React.FC<SliderProps> = ({
   value,
   onValueChange,
   min = 100,
   max = 500,
   showLabels = true,
   minimumTrackTintColor,
   maximumTrackTintColor,
}) => {
   const { colors } = useSiliconUIContext();
   const [sliderWidth, setSliderWidth] = useState(0);
   const position = useRef(new Animated.Value(0)).current;
   const sliderRef = useRef<View>(null);

   const { THUMB_PADDING, getValueFromPosition, getPositionFromValue } = useSliderCalculations({
      min,
      max,
      sliderWidth,
      THUMB_WIDTH,
   });

   const panResponder = useSliderGestures({
      sliderRef,
      position,
      sliderWidth,
      THUMB_PADDING,
      getValueFromPosition,
      onValueChange,
   });

   useEffect(() => {
      position.setValue(getPositionFromValue(value));
   }, [value, sliderWidth]);

   const onLayout = (event: LayoutChangeEvent) => {
      setSliderWidth(event.nativeEvent.layout.width);
   };

   return (
      <View style={styles.container}>
         <View
            ref={sliderRef}
            style={styles.sliderContainer}
            onLayout={onLayout}
            {...panResponder.panHandlers}
         >
            <View style={[styles.track, { backgroundColor: maximumTrackTintColor || '#E0E0E0' }]}>
               <Animated.View
                  style={[
                     styles.activeTrack,
                     {
                        width: position,
                        backgroundColor: minimumTrackTintColor || colors.primary,
                     },
                  ]}
               />
            </View>
            <Animated.View
               style={[
                  styles.thumb,
                  {
                     transform: [{ translateX: position }],
                  },
               ]}
            />
         </View>
         {showLabels && (
            <View style={styles.labels}>
               <Text variant="bodySmall" style={{ color: colors.text.light }}>
                  {min}km/day
               </Text>
               <Text variant="bodySmall" style={{ color: colors.text.light }}>
                  {max}km/day
               </Text>
            </View>
         )}
      </View>
   );
};
