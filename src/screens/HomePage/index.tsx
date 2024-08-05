import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

import { HomePageProps } from '../../types';
import { styles } from './styles';
import { useHome } from './useHome';

const HomePage: React.FC<HomePageProps> = (props) => {
  const home = useHome(props);

  return (
    <View style={[tw``, styles.container]}>
      <Text>HomePage</Text>
    </View>
  );
};

export default HomePage;
