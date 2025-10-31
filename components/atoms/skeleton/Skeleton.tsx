import { useSiliconUIContext } from '@/theme';
import { View, ViewStyle } from 'react-native';

interface SkeletonProps {
   width?: number | `${number}%`;
   height?: number | `${number}%`;
   borderRadius?: number;
   style?: ViewStyle;
}

export function Skeleton({
   width = '100%',
   height = 20,
   borderRadius = 4,
   style,
}: SkeletonProps): React.ReactElement {
   const { colors } = useSiliconUIContext();

   return (
      <View
         style={{
            width,
            height,
            borderRadius,
            backgroundColor: colors.skeleton.main,
            overflow: 'hidden',
            ...style,
         }}
      />
   );
}
