import {Text, View} from 'react-native';
import React from 'react';

interface MovesSectionProps {
  pokemon: any;
}
const MovesSection = (props: MovesSectionProps) => {
  const {pokemon} = props;

  return (
    <View>
      <Text>MovesSection</Text>
    </View>
  );
};

export default MovesSection;
