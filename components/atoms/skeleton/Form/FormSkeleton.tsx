import { useSiliconUIContext } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { InputSkeleton } from '../Input/InputSkeleton';

interface FormSkeletonProps {
   fields: number;
}

const styles = StyleSheet.create({
   formContainer: {
      gap: 16,
   },
});

export const FormSkeleton = ({ fields }: FormSkeletonProps): React.ReactElement => {
   const { colors } = useSiliconUIContext();
   const borderColor = colors.surfaceVariant;

   return (
      <View style={styles.formContainer}>
         {Array.from({ length: fields }).map((_, index) => (
            <InputSkeleton key={index} borderColor={borderColor} />
         ))}
      </View>
   );
};
