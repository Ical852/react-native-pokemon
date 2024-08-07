import React, {useMemo} from 'react';
import {ActivityIndicator, FlatList, Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import tw from 'twrnc';

import {AppDispatch, RootState} from '../../redux/store';
import {
  getAllMyPokemons,
  getAllMyPokemonsReset,
} from '../../redux/rest/actions';

import {MyPokemonPageProps} from '../../types';
import {styles} from './styles';
import {useMyPokemon} from './useMyPokemon';
import {PokemonCard} from '../../components';

const MyPokemonPage: React.FC<MyPokemonPageProps> = props => {
  const mypoke = useMyPokemon(props);

  const _renderList = useMemo(() => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={mypoke.pokemons}
        renderItem={item => (
          <PokemonCard pokemon={item} onDetail={() => mypoke.onClick(item)} />
        )}
        keyExtractor={item => item.url}
        numColumns={2}
        extraData={mypoke.pokemons}
        contentContainerStyle={styles.listContainer}
      />
    );
  }, [mypoke.pokemons]);

  const _renderContent = useMemo(() => {
    if (mypoke.loading) {
      return (
        <View style={[tw`flex-1 justify-center items-center`]}>
          <ActivityIndicator color={'#0EA5E9'} size={36} />
          <Text style={[tw`text-sm text-black font-semibold mt-3`]}>
            Loading Pokemon Data ...
          </Text>
          <Text style={[tw`text-sm text-black font-semibold`]}>
            {mypoke.count} / {mypoke.maxCount}
          </Text>
        </View>
      );
    }

    if (mypoke.pokemons.length < 1) {
      return (
        <View style={[tw`flex-1 justify-center items-center`]}>
          <Image
            resizeMode="contain"
            style={[tw`w-60 h-60`]}
            source={require('../../assets/illustrations/no_data.png')}
          />
          <Text style={[tw`text-black font-semibold`]}>
            You have not caught any pokemon yet.
          </Text>
        </View>
      );
    }

    return _renderList;
  }, [mypoke.loading, mypoke.count, mypoke.maxCount, _renderList]);

  return (
    <View style={[tw`flex flex-col bg-white flex-1`]}>
      <Image
        resizeMode="contain"
        style={[tw`h-12 w-36 mx-6 my-4`]}
        source={require('../../assets/images/pokemon_logo.png')}
      />
      {_renderContent}
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  getAllMyPokemonsLoading: state.myPokemon.getAllMyPokemonsLoading,
  getAllMyPokemonsResponse: state.myPokemon.getAllMyPokemonsResponse,
  getAllMyPokemonsError: state.myPokemon.getAllMyPokemonsError,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getAllMyPokemons: () => dispatch(getAllMyPokemons()),
  getAllMyPokemonsReset: () => dispatch(getAllMyPokemonsReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemonPage);
