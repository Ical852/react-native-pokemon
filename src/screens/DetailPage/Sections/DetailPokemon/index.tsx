import React, { useCallback, useRef, useState } from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import tw from 'twrnc';

import { getGifList, getPokeColors } from '../../../../utils';
import { styles } from './styles';

interface DetailPokemonProps {
  pokemon: any;
}
const DetailPokemon = (props: DetailPokemonProps) => {
  const { pokemon } = props;
  const { width: viewportWidth } = Dimensions.get('window');

  const carouselRef = useRef(null);
  const color = getPokeColors(pokemon.detail?.types[0]?.type?.name);
  const [index, setIndex] = useState(0);

  const renderItem = useCallback(({ item }) => {
    return (
      <Image
        resizeMode='contain'
        source={{ uri: item }}
        style={[tw``, styles.image]}
      />
    );
  }, []);

  return (
    <View style={[tw`mt-5`]}>
      <Carousel
        loop
        ref={carouselRef}
        data={getGifList(pokemon.detail)}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth - 60}
        onSnapToItem={(index) => setIndex(index)}
      />
      <View style={[tw`flex-row items-center justify-center mt-5 gap-1`]}>
        {getGifList(pokemon.detail).map((data, idx) => {
          return idx === index ? 
            (
              <View style={[
                tw`h-2 w-6 rounded-full border border-white`,
                { backgroundColor: color }
              ]} />
            ) : (
              <View style={[tw`h-2 w-2 rounded-full bg-white`]}/>
            )
        })}
      </View>
    </View>
  );
};

export default DetailPokemon;
