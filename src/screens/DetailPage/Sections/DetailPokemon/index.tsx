import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, Image, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import tw from 'twrnc';

import {getGifList, getPokeColors} from '../../../../utils';
import {styles} from './styles';

interface DetailPokemonProps {
  pokemon: any;
}
const DetailPokemon = (props: DetailPokemonProps) => {
  const {pokemon} = props;
  const {width: viewportWidth} = Dimensions.get('window');

  const carouselRef = useRef(null);
  const color = getPokeColors(pokemon.detail?.types[0]?.type?.name);
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    carouselRef.current.snapToNext();
  }, [carouselRef]);
  const prev = useCallback(() => {
    carouselRef.current.snapToPrev();
  }, [carouselRef]);

  const renderItem = useCallback(({item}) => {
    return (
      <Image
        resizeMode="contain"
        source={{uri: item}}
        style={[tw``, styles.image]}
      />
    );
  }, []);

  const _renderIndicator = useMemo(() => {
    return (
      <View style={[tw`flex-row items-center justify-center mt-5 gap-1`]}>
        {getGifList(pokemon.detail).map((data, idx) => {
          return idx === index ? (
            <View
              style={[
                tw`h-2 w-6 rounded-full border border-white`,
                {backgroundColor: color},
              ]}
            />
          ) : (
            <View style={[tw`h-2 w-2 rounded-full bg-white`]} />
          );
        })}
      </View>
    );
  }, [index]);

  const _renderAction = useMemo(() => {
    return (
      <>
        <TouchableOpacity
          onPress={prev}
          activeOpacity={0.5}
          style={[tw`absolute h-full justify-center left-2`]}>
          <Icon name={'arrow-left'} size={24} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={next}
          activeOpacity={0.5}
          style={[tw`absolute h-full justify-center right-2`]}>
          <Icon name={'arrow-right'} size={24} color={'white'} />
        </TouchableOpacity>
      </>
    );
  }, [carouselRef]);

  return (
    <View style={[tw`mt-5`]}>
      <Carousel
        loop
        ref={carouselRef}
        data={getGifList(pokemon.detail)}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth - 60}
        onSnapToItem={index => setIndex(index)}
      />
      {_renderIndicator}
      {_renderAction}
    </View>
  );
};

export default DetailPokemon;
