import {Text, View} from 'react-native';
import React from 'react';

interface EvolutionsSectionProps {
  pokemon: any;
}
const EvolutionsSection = (props: EvolutionsSectionProps) => {
  const {pokemon} = props;

  return (
    <View>
      <Text>EvolutionsSection</Text>
    </View>
  );
};

export default EvolutionsSection;
