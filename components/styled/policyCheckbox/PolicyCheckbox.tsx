import { useSiliconUIContext } from '@/theme';
import { Linking, View } from 'react-native';
import { Text } from 'react-native-paper';

interface LinkProps {
   text: string;
   url: string;
}

interface PolicyCheckboxProps {
   label: string;
   links: LinkProps[];
   required?: boolean;
}

export const PolicyCheckbox: React.FC<PolicyCheckboxProps> = ({
   label,
   links,
   required = false,
}) => {
   const { colors } = useSiliconUIContext();

   const onPressLink = (url: string) => {
      Linking.openURL(url);
   };

   return (
      <View style={{ flexDirection: 'column', backgroundColor: 'transparent', gap: 10 }}>
         <Text variant="labelSmall" style={{ color: colors.common.black.main, padding: 5 }}>
            {required && (
               <Text variant="labelSmall" style={{ color: colors.error }}>
                  *{' '}
               </Text>
            )}
            {label}
         </Text>
         <View
            style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 5, paddingTop: 0, gap: 10 }}
         >
            {links.map((link, index) => (
               <Text
                  key={index}
                  variant="labelSmall"
                  style={{
                     color: colors.common.black.main,
                     marginRight: 5,
                     textDecorationLine: 'underline',
                  }}
                  onPress={() => onPressLink(link.url)}
               >
                  {`${link.text} `}
               </Text>
            ))}
         </View>
      </View>
   );
};
