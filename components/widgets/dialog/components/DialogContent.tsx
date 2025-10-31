import { Button } from '@/components/atoms';
import { useSiliconUIContext } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { Dialog, Text } from 'react-native-paper';
import { useDialogContext } from '../hooks/useDialogContext';

const styles = StyleSheet.create({
   dialog: {
      borderRadius: 16,
      marginHorizontal: 16,
   },
   title: {
      textAlign: 'center',
      marginBottom: 4,
      marginTop: -8,
   },
   message: {
      textAlign: 'center',
      marginBottom: 24,
   },
   content: {
      paddingHorizontal: 16,
      paddingTop: 16,
   },
   actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 8,
      paddingHorizontal: 16,
      paddingBottom: 16,
   },
   button: {
      flex: 1,
   },
});

export default function DialogContent(): React.ReactElement {
   const { hideDialog, config } = useDialogContext();
   const { colors } = useSiliconUIContext();

   return (
      <>
         {config?.isVisible && (
            <Dialog visible={true} onDismiss={hideDialog}>
               <View style={styles.content}>
                  <Text variant="titleLarge" style={[styles.title, { color: colors.common.black.main }]}>
                     {config?.title}
                  </Text>
                  <Text variant="bodySmall" style={[styles.message, { color: colors.text.light }]}>
                     {config?.message}
                  </Text>
               </View>
               <Button
                  label={config?.cancelLabel ?? 'Cancel'}
                  onPress={hideDialog}
                  variant="outlined"
                  style={styles.button}
                  fullWidth
               />
               <Button
                  label={config?.confirmLabel ?? 'Confirm'}
                  onPress={() => {
                     config?.onConfirm();
                     hideDialog();
                  }}
                  variant={config?.variant ?? 'primary'}
                  style={styles.button}
                  fullWidth
               />
            </Dialog>
         )}
      </>
   );
}
