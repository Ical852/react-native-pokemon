import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { styles } from './styles';
import { getPokeColors } from '../../../utils';

interface BadgeProps {
  type: any;
}
const Badge = (props: BadgeProps) => {
  const { type } = props;
  const color = getPokeColors(type.type.name);

  return (
    <View style={[
      tw` border border-white rounded-full px-2 py-0.5 mb-1`,
      styles.container(color)
    ]}>
      <Text style={[tw`text-center text-white`]}>{type.type.name}</Text>
    </View>
  );
};

export default Badge;
