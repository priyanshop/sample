import { Image as ExpoImage } from 'expo-image';
import React, { ComponentProps } from 'react';
import { DimensionValue, ImageStyle } from 'react-native';

interface CustomImageProps extends ComponentProps<typeof ExpoImage> {
   width?: DimensionValue | undefined;
   height?: DimensionValue | undefined;
   rounded?: boolean;
   fullSize?: boolean;
}

export const Image: React.FC<CustomImageProps> = ({
   width = '100%',
   height = 200,
   style,
   rounded,
   fullSize,
   ...props
}) => {
   const borderRadius = rounded ? 15 : 0;
   const fullSizeStyle = fullSize
      ? ({ width: '100%', height: '100%' } as ImageStyle)
      : { width, height };

   return (
      <ExpoImage style={[fullSizeStyle, { borderRadius }, style]} transition={100} {...props} />
   );
};
