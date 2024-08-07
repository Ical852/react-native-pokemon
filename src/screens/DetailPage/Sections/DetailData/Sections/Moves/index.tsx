import {Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

interface MovesSectionProps {
  pokemon: any;
  bg: string;
}
const MovesSection = (props: MovesSectionProps) => {
  const {pokemon, bg} = props;

  return (
    <View style={[tw`mt-5`]}>
      {pokemon.detail.moves.map((move: any, idx: number) => {
        return (
          <View style={[tw`mb-3`]}>
            <Text style={[tw`text-base capitalize font-semibold`, { color: bg }]}>
              {idx + 1}. {move.move.name}
            </Text>
            <Text style={[tw`ml-5 mt-1 text-black font-semibold`]}>
              - Move version group
            </Text>
            {move.version_group_details.map((det: any) => {
              return (
                <View style={[tw`ml-7 flex-row mt-0.5`]}>
                  <Text style={[tw`text-sm font-medium capitalize`, { color: bg }]}>
                    {det.move_learn_method.name}
                  </Text>
                  <Text style={[tw`text-gray-400 capitalize`]}> - {det.version_group!.name}</Text>
                </View>
              )
            })}
          </View>
        )
      })}
    </View>
  );
};

export default MovesSection;
