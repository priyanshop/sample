import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

export const KeyboardDismissableView: React.FC<{ children: React.ReactNode }> = ({ children }) => (
   <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ height: 'auto' }}>{children}</View>
   </TouchableWithoutFeedback>
);
