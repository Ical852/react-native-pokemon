import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {styles} from './styles';

interface MainButtonProps {
  title: string;
  onPress: () => void;
  bg?: string;
  loading?: boolean;
  disabled?: boolean;
}
const MainButton = (props: MainButtonProps) => {
  const {title, onPress, bg, loading, disabled} = props;

  return (
    <TouchableOpacity
      disabled={loading || disabled}
      onPress={onPress}
      style={[
        tw`py-3 rounded-md flex-row items-center justify-center gap-2 flex-1`,
        styles.container(bg),
        {opacity: loading || disabled ? 0.5 : 1},
      ]}
      activeOpacity={0.5}>
      {loading && <ActivityIndicator color={'white'} size={18} />}
      <Text style={[tw`text-white font-semibold text-center`]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
