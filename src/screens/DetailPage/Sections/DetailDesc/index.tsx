import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { Badge } from '../../../../components';

interface DetailDescProps {
  pokemon: any;
}
const DetaiLDesc = (props: DetailDescProps) => {
  const { pokemon } = props;

  return (
    <View style={[tw`mx-6 flex-row justify-between items-center`]}>
      <View>
        <Text style={[tw`text-3xl text-white font-semibold capitalize`]}>
          {pokemon?.nickname ?? pokemon?.name}
        </Text>
        <View style={[tw`flex-row mt-1.5 gap-1`]}>
          {pokemon.detail?.types?.map((type: any) => {
            return (
              <Badge
                isBig
                key={type.type.name}
                type={type}
              />
            )
          })}
        </View>
      </View>
      <Text style={[tw`text-2xl text-white font-semibold`]}>
        #{pokemon?.detail?.id}
      </Text>
    </View>
  );
};

export default DetaiLDesc;
