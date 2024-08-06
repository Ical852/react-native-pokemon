import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { pokemonApis } from "../../redux/pokemon/apis";
import { HomePageProps } from "../../types";

export const useHome = (props: HomePageProps) => {
  const { navigation } = props;

  const [loading, setLoading] = useState(false);
  const [extending, setExtending] = useState(false);
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons]:
  [any, React.Dispatch<React.SetStateAction<any>>] = useState({});

  const getPokemonData = useCallback(
    async (
      setLoading: React.Dispatch<React.SetStateAction<boolean>>,
      url = null,
      results = [],
    ) => {
      setLoading(true);
      const response = await pokemonApis.getAllPokemons({
        url,
        setCount,
        results,
      });

      if (url) {
        setPokemons({
          ...response,
          results: [
            ...pokemons.results,
            ...response.results,
          ]
        })
      } else {
        setPokemons(response);
      }

      setCount(0);
      setLoading(false);
    }, [pokemons]
  );

  const onExtend = useCallback(() => {
    getPokemonData(setExtending, pokemons?.next, pokemons?.results);
  }, [pokemons]);

  const onClick = useCallback((pokemon: any) => {
    return navigation.navigate('Detail', { ...pokemon });
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      getPokemonData(setLoading);
    }, []),
  );

  return {
    loading,
    extending,
    pokemons,
    count,
    onExtend,
    onClick
  };
};
