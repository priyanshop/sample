import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';
import loading from './loading.json';

export function LoadingSpinner(): React.ReactElement {
   return (
      <View
         style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
         }}
      >
         <LottieView source={loading} autoPlay loop style={{ width: 150, height: 210 }} />
      </View>
   );
}
