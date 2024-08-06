import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { styles } from './styles';

interface MainButtonProps {
  title: string;
  onPress: () => void;
  bg?: string;
}
const MainButton = (props: MainButtonProps) => {
  const { title, onPress, bg } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[tw`py-3 rounded-md`, styles.container(bg)]}
      activeOpacity={0.5}>
      <Text style={[tw`text-white font-semibold text-center`]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MainButton;
