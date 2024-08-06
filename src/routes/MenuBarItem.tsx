import React, { useMemo } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';

interface MenuBarItemProps {
  focused: boolean;
  type: string;
}
const MenuBarItem = (props: MenuBarItemProps) => {
  const { focused, type } = props;

  const getIcon = useMemo(() => {
    const icon = {
      color: '#737373',
      icon: 'home',
    }
    if (focused) icon.color = '#0EA5E9';
    if (type === 'caught') icon.icon = 'user';
    
    return icon;
  }, [type]);

  return (
    <View style={[tw``]}>
      <Icon name={getIcon.icon} size={24} color={getIcon.color} />
    </View>
  );
}

export default MenuBarItem;
