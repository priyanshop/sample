import { FlatListProps, FlatList as List, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   listContent: {
      gap: 16,
      paddingBottom: 40,
   },
   emptyContainer: {
      flex: 1,
      padding: 0,
      justifyContent: 'center',
      alignItems: 'center',
   },
   emptyText: {
      textAlign: 'center',
   },
});

export function FlatList(props: FlatListProps<any>): React.ReactElement {
   return (
      <List
         style={styles.container}
         contentContainerStyle={styles.listContent}
         showsVerticalScrollIndicator={false}
         keyExtractor={(item, i) => item?.id?.toString() ?? i?.toString()}
         {...props}
         renderItem={props.renderItem}
      ></List>
   );
}
