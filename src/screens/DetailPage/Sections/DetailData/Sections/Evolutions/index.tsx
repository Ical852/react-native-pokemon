import React, { useCallback, useRef } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';
import { Badge } from '../../../../../../components';
import { getGifList } from '../../../../../../utils';
import { styles } from './styles';

interface EvolutionsSectionProps {
  pokemon: any;
  bg: string;
}
const EvolutionsSection = (props: EvolutionsSectionProps) => {
  const {pokemon, bg} = props;
  const {width: viewportWidth} = Dimensions.get('window');
  const refs = [
    useRef(),
    useRef(),
    useRef(),
  ];

  const reformat = useCallback((stat: any) => {
    if (stat === 'special-attack' || stat === 'special-defense') {
      const split = stat.split('-')[1];
      return `Sp. ${split[0]}${split[1]}${split[2]}`;
    }
    return stat;
  }, []);

  const getValue = useCallback((value: number) => {
    if (value === 100) return value;
    return value;
  }, []);

  const getTotal = useCallback((evo: any) => {
    let total = 0;
    evo.stats.map((stat: any) => (total += stat.base_stat));
    return total;
  }, []);

  const renderItem = useCallback(({ item }) => {
    return (
      <Image
        resizeMode="contain"
        source={{ uri: item }}
        style={[tw``, styles.image]}
      />
    );
  }, []);

  const _renderEvoDesc = useCallback((evo: any, idx) => {
    return (
      <>
        <Text
          style={[
            tw`text-base capitalize font-semibold px-5`,
            { color: bg }
          ]}>
          {idx + 1}. {evo.name}
        </Text>
        <View style={[tw`flex-row items-center mt-2 px-5 mb-3`]}>
          {evo.types.map((type: any) => (
            <Badge type={type} />
          ))}
        </View>
      </>
    )
  }, []);

  const _renderCarouselAction = useCallback((ref: any) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => ref.current.snapToPrev()}
          activeOpacity={0.5}
          style={[tw`absolute h-full justify-center left-2`]}>
          <Icon name={'arrow-left'} size={24} color={bg} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => ref.current.snapToNext()}
          activeOpacity={0.5}
          style={[tw`absolute h-full justify-center right-2`]}>
          <Icon name={'arrow-right'} size={24} color={bg} />
        </TouchableOpacity>
      </>
    );
  }, []);

  const _renderCarousel = useCallback((evo: any, ref: any) => {
    return (
      <View>
        <Carousel
          loop
          ref={ref}
          data={getGifList(evo)}
          renderItem={renderItem}
          sliderWidth={viewportWidth - 24}
          itemWidth={viewportWidth - 60}
        />
        {_renderCarouselAction(ref)}
      </View>
    )
  }, [_renderCarouselAction]);

  const _renderEvoBaseStat = useCallback((evo: any) => {
    return (
      <View style={[tw`flex-row items-center mt-5 mx-5`]}>
        <View style={[tw`w-20`]}>
          {evo.stats?.map((stat: any) => {
            return (
              <Text style={[tw`text-gray-300 mb-2 text-sm capitalize`]}>
                {reformat(stat.stat.name)}
              </Text>
            );
          })}
          <Text style={[tw`text-gray-300 mb-2 text-sm capitalize`]}>Total</Text>
        </View>
        <View style={[tw`w-10`]}>
          {evo.stats?.map((stat: any) => {
            return (
              <Text
                style={[tw`text-black mb-2 text-sm font-semibold capitalize`]}>
                {reformat(stat.base_stat)}
              </Text>
            );
          })}
          <Text style={[tw`text-black mb-2 text-sm font-semibold capitalize`]}>
            {getTotal(evo)}
          </Text>
        </View>
        <View style={[tw`justify-between items-start flex-1`, { height: 200 }]}>
          <View style={[tw`flex flex-col w-full h-full`]}>
            {evo.stats?.map((stat: any) => {
              return (
                <View style={[tw`h-7 justify-center`]}>
                  <View style={[tw`h-1 bg-gray-300`]} />
                  <View
                    style={[tw`h-1 bg-blue-300 rounded-full`,
                    {
                      marginTop: -4,
                      backgroundColor: bg,
                      width: `${getValue(stat.base_stat)}%`
                    }]}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </View>
    )
  }, []);

  return (
    <View style={[tw`mt-5`, { marginHorizontal: -20 }]}>
      {pokemon.detail.evolutions.map((evo: any, idx: number) => {
        return (
          <View style={[tw`mb-5`]}>
            {_renderEvoDesc(evo, idx)}
            {_renderCarousel(evo, refs[idx])}
            {_renderEvoBaseStat(evo)}
          </View>
        )
      })}
    </View>
  );
};

export default EvolutionsSection;
