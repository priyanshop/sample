import { useSiliconUIContext } from '@/theme';
import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { ThemedView } from '../themed-view/ThemedView';

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   contentContainer: {
      padding: 20,
      flexGrow: 1,
   },
   footer: {
      width: '100%',
      paddingBottom: 15,
   },
   footerContent: {
      padding: 16,
      paddingHorizontal: 20,
   },
   shadowContainer: {
      width: '100%',
   },
});

interface FooterSkeletonProps {
   children: React.ReactNode;
   footerContent?: React.ReactNode;
   contentContainerStyle?: StyleProp<ViewStyle>;
}

export const FooterSkeleton = ({
   children,
   footerContent,
   contentContainerStyle,
}: FooterSkeletonProps): React.ReactElement => {
   const { colors } = useSiliconUIContext();

   return (
      <ThemedView style={styles.container}>
         <ScrollView contentContainerStyle={[styles.contentContainer, contentContainerStyle]}>
            {children}
         </ScrollView>

         <Shadow
            style={styles.shadowContainer}
            distance={12}
            startColor="#0000000A"
            endColor="#00000000"
            offset={[0, -6]}
         >
            <View style={[styles.footer, { backgroundColor: colors.background }]}>
               <View style={styles.footerContent}>{footerContent}</View>
            </View>
         </Shadow>
      </ThemedView>
   );
};
