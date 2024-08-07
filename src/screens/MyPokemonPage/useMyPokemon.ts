import {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {pokemonApis} from '../../redux/pokemon/apis';
import {copyData} from '../../utils';
import {MyPokemonPageProps} from '../../types';

export const useMyPokemon = (props: MyPokemonPageProps) => {
  const {
    getAllMyPokemons,
    getAllMyPokemonsLoading,
    getAllMyPokemonsResponse,
    getAllMyPokemonsError,
    getAllMyPokemonsReset,

    navigation,
  } = props;

  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [pokemons, setPokemons]: [
    any,
    React.Dispatch<React.SetStateAction<any>>,
  ] = useState({});

  const onClick = useCallback(
    (pokemon: any) => {
      return navigation.navigate('Detail', {...pokemon.item});
    },
    [navigation],
  );

  const setupPokemon = useCallback(
    async (data: any) => {
      const copy = copyData(data, []);
      setMaxCount(copy.length);
      setLoading(true);
      const response = await pokemonApis.getAllMyPokemons({
        data: copy,
        setCount,
      });
      setLoading(false);
      setPokemons(response);
      getAllMyPokemonsReset();
    },
    [getAllMyPokemonsResponse],
  );

  useFocusEffect(
    useCallback(() => {
      getAllMyPokemons();
    }, []),
  );

  useEffect(() => {
    if (getAllMyPokemonsError) {
      getAllMyPokemonsReset();
    }
    if (getAllMyPokemonsResponse?.status === 200) {
      setupPokemon(getAllMyPokemonsResponse?.data);
    }
  }, [getAllMyPokemonsResponse]);

  return {
    loading: getAllMyPokemonsLoading || loading,
    pokemons,
    count,
    maxCount,
    onClick,
  };
};
