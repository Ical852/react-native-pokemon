import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

import { SplashPageProps } from '../../types';
import { styles } from './styles';
import { useSplash } from './useSplash';

const SplashPage: React.FC<SplashPageProps> = (props) => {
  const splash = useSplash(props);
  
  return (
    <View style={[tw``, styles.container]}>
      <Text>SplashPage</Text>
    </View>
  );
}

export default SplashPage;
