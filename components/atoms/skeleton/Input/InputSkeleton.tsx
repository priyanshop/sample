import { StyleSheet, View } from 'react-native';
import { Skeleton } from '../Skeleton';

const styles = StyleSheet.create({
   inputContainer: {
      borderWidth: 1,
      borderRadius: 8,
      height: 70,
   },
});

export const InputSkeleton = ({ borderColor }: { borderColor: string }): React.ReactElement => (
   <View style={[styles.inputContainer, { borderColor }]}>
      <Skeleton
         width={60}
         height={12}
         style={{
            marginTop: 12,
            marginLeft: 12,
            opacity: 0.8,
         }}
      />
      <Skeleton
         width="85%"
         height={20}
         style={{
            marginTop: 8,
            marginLeft: 12,
            opacity: 0.4,
         }}
      />
   </View>
);
