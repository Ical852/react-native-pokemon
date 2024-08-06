import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';

import { SplashPageProps } from '../../types';
import { styles } from './styles';
import { useSplash } from './useSplash';

const SplashPage: React.FC<SplashPageProps> = (props) => {
  const splash = useSplash(props);
  
  return (
    <View style={
      [tw`flex-1 bg-white justify-center items-center`, styles.container]
      }>
      <Image
        style={[tw``]} 
        source={require('../../assets/images/pokemon_logo.png')}
      />
    </View>
  );
}

export default SplashPage;
