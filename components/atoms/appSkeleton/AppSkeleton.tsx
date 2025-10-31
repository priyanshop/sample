import { useSiliconUIContext } from '@/theme';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export function AppSkeleton(): React.ReactElement {
   const { colors } = useSiliconUIContext();

   return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
         <Text>Loading</Text>
      </View>
   );
}
