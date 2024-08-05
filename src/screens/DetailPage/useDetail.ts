import { useCallback, useMemo, useState } from "react";
import { DetailPageProps } from "../../types";
import { getGifList } from "../../utils";
import { Alert } from "react-native";

export const useDetail = (props: DetailPageProps) => {
  const {
    findPokemon,
    findPokemonLoading,
    findPokemonError,
    findPokemonResponse,
    findPokemonReset,

    catchPokemon,
    catchPokemonLoading,
    catchPokemonError,
    catchPokemonResponse,
    catchPokemonReset,

    renamePokemon,
    renamePokemonLoading,
    renamePokemonError,
    renamePokemonResponse,
    renamePokemonReset,

    releasePokemon,
    releasePokemonLoading,
    releasePokemonError,
    releasePokemonResponse,
    releasePokemonReset,

    navigation,
    route: {
      params,
    },
  } = props;
  const [isCaught, setIsCaught] = useState(false);

  const isDisabled = useMemo(() => {
    return isCaught && !params.id;
  }, [isCaught]);

  const getGifs = useMemo(() => {
    return getGifList(params?.detail);
  }, [params]);

  const onBtnClick = useCallback(() => {
    if (isCaught) {
      const confirmed = Alert.alert(('Are you sure want to release?'));
      if (confirmed) {
        releasePokemon({ id: params.id });
      }
    } else {
      const nickname = window.prompt('Put pokemon nickname');
      if (nickname) {
        catchPokemon({ nickname, url: params.url })
      }
    }
  }, [isCaught, params]);

  const onRename = useCallback(() => {
    const newName = prompt('Input new nicnname');
    if (newName) {
      renamePokemon({ id: paramState.id, nickname: newName });
    }
  }, [paramState]);

  useEffect(() => {
    if (renamePokemonError) {
      alert('Failed to rename pokemon');
      renamePokemonReset();
    }
    if (renamePokemonResponse?.status === 200) {
      alert('Success to rename pokemon');
      renamePokemonReset();
      navigate('/my-pokemons');
    }
  }, [renamePokemonResponse]);

  useEffect(() => {
    if (catchPokemonError) {
      alert('Failed to catch pokemon, try again');
      catchPokemonReset();
    }
    if (catchPokemonResponse?.status === 200) {
      alert('Success to catch pokemon');
      catchPokemonReset();
      navigate('/');
    }
  }, [catchPokemonResponse]);

  useEffect(() => {
    if (releasePokemonError) {
      alert('Release pokemon failed');
      releasePokemonReset();
    }
    if (releasePokemonResponse?.status === 200) {
      alert('Release pokemon success');
      releasePokemonReset();
      navigate('/my-pokemons')
    }
  }, [releasePokemonResponse]);

  useEffect(() => {
    findPokemon({ url: paramState.url });
  }, []);

  useEffect(() => {
    if (findPokemonError) {
      setIsCaught(false);
      findPokemonReset();
    }
    if (findPokemonResponse?.status === 200) {
      setIsCaught(true);
    }
  }, [findPokemonResponse]);

  return {
    loading: findPokemonLoading || catchPokemonLoading || releasePokemonLoading || renamePokemonLoading,
    pokemon: paramState,
    gifs: getGifs,
    isCaught,
    onBtnClick,
    onRename,
    isDisabled,
    isMine: paramState.id
  };
}