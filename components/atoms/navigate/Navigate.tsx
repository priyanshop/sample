import { Children } from '@/types';
import { Href, router } from 'expo-router';
import { Pressable, View } from 'react-native';

export function Navigate({ children, to }: { children: Children; to: string }): React.ReactElement {
   return (
      <Pressable onPress={() => router.push(to as Href)}>
         <View pointerEvents="none">{children}</View>
      </Pressable>
   );
}
