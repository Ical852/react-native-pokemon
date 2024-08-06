import React, { useMemo } from 'react';
import { Text, View, Image, ActivityIndicator, FlatList } from 'react-native';
import tw from 'twrnc';

import { HomePageProps } from '../../types';
import { styles } from './styles';
import { useHome } from './useHome';
import { MainButton, PokemonCard } from '../../components';

const HomePage: React.FC<HomePageProps> = (props) => {
  const home = useHome(props);

  const _renderLoadMore = useMemo(() => {
    if (home.extending) {
      return (
        <View style={[tw`mx-2 mt-3 justify-center items-center`]}>
          <ActivityIndicator color={'#0EA5E9'} size={36} />
          <Text style={[tw`text-sm text-black font-semibold mt-3`]}>
            Loading More Pokemon Data ...
          </Text>
          <Text style={[tw`text-sm text-black font-semibold`]}>{home.count} / 20</Text>
        </View>
      )
    }

    return (
      <View style={[tw`mx-2 mt-3`]}>
        <MainButton
          title='Load More'
          onPress={home.onExtend}
        />
      </View>
    )
  }, [home.extending, home.onExtend, home.count]);

  const _renderList = useMemo(() => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={home.pokemons?.results}
        renderItem={(item) => (
          <PokemonCard
            pokemon={item}
            onDetail={() => home.onClick(item)}
          />
        )}
        keyExtractor={item => item.url}
        numColumns={2}
        extraData={home.pokemons?.results}
        contentContainerStyle={styles.listContainer}
        ListFooterComponent={_renderLoadMore}
      />
    );
  }, [home.pokemons, _renderLoadMore]);

  const _renderContent = useMemo(() => {
    if (home.loading) {
      return (
        <View style={[tw`flex-1 justify-center items-center`]}>
          <ActivityIndicator color={'#0EA5E9'} size={36} />
          <Text style={[tw`text-sm text-black font-semibold mt-3`]}>
            Loading Pokemon Data ...
          </Text>
          <Text style={[tw`text-sm text-black font-semibold`]}>{home.count} / 20</Text>
        </View>
      )
    }
    return _renderList;
  }, [home.loading, home.count, _renderList]);

  return (
    <View style={[tw`flex flex-col bg-white flex-1`]}>
      <Image
        resizeMode='contain'
        style={[tw`h-12 w-36 mx-6 my-4`]}
        source={require('../../assets/images/pokemon_logo.png')}
      />
      {_renderContent}
    </View>
  );
};

export default HomePage;
