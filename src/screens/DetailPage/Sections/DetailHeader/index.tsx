import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';

interface DetailHeaderProps {
  onBack: () => void;
}
const DetailHeader = (props: DetailHeaderProps) => {
  const { onBack } = props;

  return (
    <TouchableOpacity
      onPress={onBack}
      activeOpacity={0.5}
      style={[tw`m-6`]}>
      <Icon name={'chevron-left'} size={24} color={'white'} />
    </TouchableOpacity>
  );
};

export default DetailHeader;
