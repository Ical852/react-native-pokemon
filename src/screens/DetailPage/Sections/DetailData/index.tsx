import React, {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';

import {
  AboutSection,
  BaseStatSection,
  EvolutionsSection,
  MovesSection,
} from './Sections';
import {styles} from './styles';
import {useDetailData} from './useDetailData';

interface DetailDataProps {
  dtl: any;
}
const DetailData = (props: DetailDataProps) => {
  const {dtl} = props;
  const hook = useDetailData();
  const pokemon = dtl.pokemon;

  const _renderContent = useMemo(() => {
    switch (hook.current) {
      case 'About':
        return <AboutSection pokemon={pokemon} />;
      case 'Base Stat':
        return <BaseStatSection pokemon={pokemon} />;
      case 'Evolutions':
        return <EvolutionsSection pokemon={pokemon} />;
      case 'Moves':
        return <MovesSection pokemon={pokemon} />;
      default:
        return <AboutSection pokemon={pokemon} />;
    }
  }, [hook.current, pokemon]);

  return (
    <View style={[tw`bg-white my-3 mx-3 rounded-xl p-5`, styles.container]}>
      <View style={[tw`border-b border-gray-200 flex-row justify-between`]}>
        {hook.tabs.map((text: string) => {
          const isCurrent = hook.current === text;
          return (
            <TouchableOpacity
              onPress={() => hook.setCurrent(text)}
              activeOpacity={0.5}
              style={[tw`${isCurrent ? 'border-b border-black' : ''} pb-2`]}>
              <Text style={[tw`text-black text-xs font-semibold`]}>{text}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {_renderContent}
    </View>
  );
};

export default DetailData;
