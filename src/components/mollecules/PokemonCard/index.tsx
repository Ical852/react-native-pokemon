import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import tw from 'twrnc';

import Badge from '../../atoms/Badge';
import { getPokeColors, getPokeImg } from '../../../utils';
import { styles } from './styles';

interface PokemonCardProps {
  pokemon: any;
  onDetail: (pokemon: any) => void;
}
const PokemonCard = (props: PokemonCardProps) => {
  const { pokemon: { item }, onDetail } = props;
  const color = getPokeColors(item.detail.types[0].type.name);

  return (
    <TouchableOpacity
      style={[
        tw`rounded-md mb-3 p-3`,
        styles.container(color),
      ]}
      onPress={() => onDetail(item)} 
      activeOpacity={0.5}>
      <Text style={[tw`text-base capitalize text-white font-semibold`]}>
        {item.nickname ?? item.name}
      </Text>
      <View style={[tw`flex-1 flex-row mt-1.5`]}>
        <View>
          {item.detail.types.map((type: any, idx: number) => {
            return <Badge key={idx} type={type}  />
          })}
        </View>
        <Image
          resizeMode='contain'
          style={[tw`flex-1 ml-1`, styles.pokeImg]}
          source={{ uri: getPokeImg(item.detail) }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;
