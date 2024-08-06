import React from 'react';
import { Text, View } from 'react-native';
import { connect } from "react-redux";
import tw from 'twrnc';

import { AppDispatch, RootState } from "../../redux/store";
import {
  getAllMyPokemons,
  getAllMyPokemonsReset,
} from '../../redux/rest/actions';

import { MyPokemonPageProps } from '../../types';
import { styles } from './styles';
import { useMyPokemon } from './useMyPokemon';

const MyPokemonPage: React.FC<MyPokemonPageProps> = (props) => {
  const myPoke = useMyPokemon(props);

  return (
    <View style={[tw``, styles.container]}>
      <Text>MyPokemonPage</Text>
    </View>
  );
}

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
