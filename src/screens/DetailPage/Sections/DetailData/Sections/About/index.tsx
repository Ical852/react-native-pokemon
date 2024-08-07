import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';

interface AboutSectionProps {
  pokemon: any;
}
const AboutSection = (props: AboutSectionProps) => {
  const {pokemon} = props;

  return (
    <View style={[tw`pb-5`]}>
      <View style={[tw`flex-row items-center mt-5`]}>
        <View style={[tw`w-24`]}>
          <Text style={[tw`text-gray-300 mb-2 text-sm`]}>Species</Text>
          <Text style={[tw`text-gray-300 mb-2 text-sm`]}>Height</Text>
          <Text style={[tw`text-gray-300 mb-2 text-sm`]}>Weight</Text>
          <Text style={[tw`text-gray-300 mb-2 text-sm`]}>Abilities</Text>
        </View>
        <View>
          <Text style={[tw`text-black mb-2 text-sm font-semibold capitalize`]}>
            {pokemon.detail.name}
          </Text>
          <Text style={[tw`text-black mb-2 text-sm font-semibold`]}>
            {pokemon.detail.height} cm
          </Text>
          <Text style={[tw`text-black mb-2 text-sm font-semibold`]}>
            {pokemon.detail.weight} kg
          </Text>
          <Text style={[tw`text-black mb-2 text-sm font-semibold capitalize`]}>
            {pokemon.detail.abilities
              .map((abl: any) => abl.ability.name)
              .join(', ')}
          </Text>
        </View>
      </View>
      <View style={[tw`mt-5`]}>
        <Text style={[tw`text-base text-black font-semibold`]}>Breeding</Text>
        <View style={[tw`flex-row items-center mt-3`]}>
          <View style={[tw`w-24`]}>
            <Text style={[tw`text-gray-300 mb-2 text-sm`]}>Gender</Text>
            <Text style={[tw`text-gray-300 mb-2 text-sm`]}>Egg Groups</Text>
            <Text style={[tw`text-gray-300 mb-2 text-sm`]}>Egg Cycle</Text>
          </View>
          <View>
            <Text
              style={[tw`text-black mb-2 text-sm font-semibold capitalize`]}>
              Male, Female
            </Text>
            <Text
              style={[tw`text-black mb-2 text-sm font-semibold capitalize`]}>
              {pokemon.detail?.group?.name ?? 'none'}
            </Text>
            <Text
              style={[tw`text-black mb-2 text-sm font-semibold capitalize`]}>
              {pokemon.detail.types[0].type.name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutSection;
