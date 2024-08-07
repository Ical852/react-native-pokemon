import React, {useCallback, useMemo} from 'react';
import {Text, View} from 'react-native';
import tw, {style} from 'twrnc';

interface BaseStatSectionProps {
  pokemon: any;
}
const BaseStatSection = (props: BaseStatSectionProps) => {
  const {pokemon} = props;

  const reformat = useCallback(stat => {
    if (stat === 'special-attack' || stat === 'special-defense') {
      const split = stat.split('-')[1];
      return `Sp. ${split[0]}${split[1]}${split[2]}`;
    }
    return stat;
  }, []);

  const getTotal = useMemo(() => {
    let total = 0;
    pokemon.detail.stats.map((stat: any) => (total += stat.base_stat));
    return total;
  }, [pokemon]);

  return (
    <View style={[tw`pb-5`]}>
      <View style={[tw`flex-row items-center mt-5`]}>
        <View style={[tw`w-20`]}>
          {pokemon.detail.stats?.map((stat: any) => {
            return (
              <Text style={[tw`text-gray-300 mb-2 text-sm capitalize`]}>
                {reformat(stat.stat.name)}
              </Text>
            );
          })}
          <Text style={[tw`text-gray-300 mb-2 text-sm capitalize`]}>Total</Text>
        </View>
        <View style={[tw`w-10`]}>
          {pokemon.detail.stats?.map((stat: any) => {
            return (
              <Text
                style={[tw`text-black mb-2 text-sm font-semibold capitalize`]}>
                {reformat(stat.base_stat)}
              </Text>
            );
          })}
          <Text style={[tw`text-black mb-2 text-sm font-semibold capitalize`]}>
            {getTotal}
          </Text>
        </View>
        <View style={[tw`justify-between items-start flex-1`, {height: 192}]}>
          <View style={[tw`flex flex-col w-full h-full`]}>
            {pokemon.detail.stats?.map((stat: any) => {
              return (
                <View style={[tw`h-7 justify-center bg-yellow-500`]}>
                  <View style={[tw`h-1 bg-gray-300`]} />
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default BaseStatSection;
