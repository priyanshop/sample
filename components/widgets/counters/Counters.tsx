import { Counter } from '@/components/atoms';
import { CounterType } from '@/components/atoms/counter/CounterType';
import React from 'react';
import { View } from 'react-native';
import { styles } from './CountersStyles';

interface CountersProps {
   data: CounterType[];
}

export const Counters: React.FC<CountersProps> = ({ data }) => {
   return (
      <View style={styles.container}>
         {data.map((counter, index) => (
            <View key={index} style={styles.counterItem}>
               <Counter
                  value={counter.value}
                  icon={counter.icon}
                  activeColor={counter.activeColor}
                  color={counter.color}
                  isActive={counter.isActive}
                  isInteractive={counter.isInteractive}
                  onPress={counter.onPress}
                  onLongPress={counter.onLongPress}
               />
            </View>
         ))}
      </View>
   );
};
