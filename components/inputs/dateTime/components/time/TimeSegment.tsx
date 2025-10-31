import { useSiliconUIContext } from '@/theme';
import React, { useRef } from 'react';
import { TextInput, View } from 'react-native';
import { Text } from 'react-native-paper';
import { DisplayValue } from '../../DateTimeInput';
import { styles } from './timeStyles';

interface TimeSegmentProps {
   timeValue: string;
   onChange: (value: DisplayValue) => void;
   value: DisplayValue;
   error?: boolean;
   onFocusFirst?: () => void;
}

const TimeSegment: React.FC<TimeSegmentProps> = ({
   timeValue,
   onChange,
   value,
   error,
   onFocusFirst,
}) => {
   const inputRefs = useRef<TextInput[]>([]);
   const [hours = '', minutes = ''] = (timeValue || '').split(':');
   const { colors, dark } = useSiliconUIContext();
   const backgroundColor = dark ? colors.common.black.light : colors.common.grey.light;

   const handleTimeChange = (text: string, type: 'hours' | 'minutes') => {
      if (!/^\d*$/.test(text)) return;

      if (type === 'hours') {
         if (text.length === 2) {
            const hours = parseInt(text);
            if (hours < 0 || hours > 23) return;
         }
         const newTime = `${text}:${minutes}`;
         onChange({ ...value, time: newTime });

         if (text.length === 2) inputRefs.current[1]?.focus();
      } else {
         if (text.length === 2) {
            const minutes = parseInt(text);
            if (minutes < 0 || minutes > 59) return;
         }
         const newTime = `${hours}:${text}`;
         onChange({ ...value, time: newTime });
      }
   };

   const handleKeyPress = (e: any, index: number) => {
      if (e.nativeEvent.key === 'Backspace') {
         if (index === 1 && !minutes && inputRefs.current[0]) {
            inputRefs.current[0].focus();
         } else if (index === 0 && !hours && onFocusFirst) {
            onFocusFirst();
         }
      }
   };

   return (
      <View
         style={[
            styles.container,
            {
               borderColor: error ? colors.error : colors.common.grey.main,
               backgroundColor,
            },
         ]}
      >
         <TextInput
            ref={el => {
               inputRefs.current[0] = el as TextInput;
            }}
            style={[styles.input, { color: colors.common.black.main }]}
            placeholder="HH"
            placeholderTextColor={colors.text.light}
            value={hours}
            onChangeText={text => handleTimeChange(text, 'hours')}
            keyboardType="numeric"
            maxLength={2}
            onKeyPress={e => handleKeyPress(e, 0)}
         />
         <Text style={[styles.separator, { color: colors.text.light }]}>:</Text>
         <TextInput
            ref={el => {
               inputRefs.current[1] = el as TextInput;
            }}
            style={[styles.input, { color: minutes ? colors.common.black.main : colors.text.light }]}
            placeholder="MM"
            placeholderTextColor={colors.text.light}
            value={minutes}
            onChangeText={text => handleTimeChange(text, 'minutes')}
            keyboardType="numeric"
            maxLength={2}
            onKeyPress={e => handleKeyPress(e, 1)}
         />
      </View>
   );
};

export default TimeSegment;
