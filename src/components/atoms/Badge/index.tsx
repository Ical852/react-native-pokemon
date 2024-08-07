import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';

import {getPokeColors} from '../../../utils';
import {styles} from './styles';

interface BadgeProps {
  type: any;
  isBig?: boolean;
}
const Badge = (props: BadgeProps) => {
  const {type, isBig} = props;
  const color = getPokeColors(type.type.name);

  return (
    <View
      style={[
        tw`border border-white rounded-full ${
          isBig ? 'px-4' : 'px-2.5'
        } py-0.5 mb-1`,
        styles.container(color),
      ]}>
      <Text
        style={[
          tw`text-center text-white ${
            isBig ? 'capitalize text-base' : 'text-xs'
          }`,
        ]}>
        {type.type.name}
      </Text>
    </View>
  );
};

Badge.defaultProps = {
  isBig: false,
};

export default Badge;
