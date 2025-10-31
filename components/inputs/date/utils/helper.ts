import { DateFormat } from '@/types';
import { TextInput } from 'react-native';

const DATE_PARTS = {
   DD: 'Day',
   MM: 'Month',
   YYYY: 'Year',
};

export const getPartsFromFormat = (
   format: DateFormat,
): { parts: ('DD' | 'MM' | 'YYYY')[]; labels: string[]; placeholders: string[] } => {
   const parts = format.split('/') as ('DD' | 'MM' | 'YYYY')[];
   const labels = parts.map(part => DATE_PARTS[part]);
   const placeholders = parts;
   return { parts, labels, placeholders };
};

export const handleInputChange = (
   index: number,
   text: string,
   onChange: (value: any) => void,  
   value: any,  
   parts: ('DD' | 'MM' | 'YYYY')[],
   inputRefs: React.MutableRefObject<(TextInput | null)[]>,
): void => {
   const part = parts[index];
   const maxLength = part === 'YYYY' ? 4 : 2;

   // If we've reached maxLength, clamp the value if needed
   if (text.length === maxLength) {
      let numValue = parseInt(text);
      const currentYear = new Date().getFullYear();

      switch (part) {
         case 'MM':
            numValue = Math.min(Math.max(1, numValue), 12);
            text = numValue.toString().padStart(2, '0');
            break;
         case 'DD':
            numValue = Math.min(Math.max(1, numValue), 31);
            text = numValue.toString().padStart(2, '0');
            break;
         case 'YYYY':
            numValue = Math.min(Math.max(1900, numValue), currentYear);
            text = numValue.toString();
            break;
      }

      // Update with clamped value
      onChange({ ...value, [part.toLowerCase()]: text });

      // Auto-advance if there's a next input
      if (index < parts.length - 1) {
         inputRefs.current[index + 1]?.focus();
      }
   } else {
      // Just update the value while typing
      onChange({ ...value, [part.toLowerCase()]: text });
   }
};