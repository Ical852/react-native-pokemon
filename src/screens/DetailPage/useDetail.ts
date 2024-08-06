import { useCallback, useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { DetailPageProps } from "../../types";
import { getGifList } from "../../utils";

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
  const [modalVisible, setModalVisible] = useState(false);
  const [nickname, setNickname] = useState("");

  const isDisabled = useMemo(() => {
    return isCaught && !params.id;
  }, [isCaught]);
  const getGifs = useMemo(() => {
    return getGifList(params?.detail);
  }, [params]);

  const onBtnClick = useCallback(() => {
    if (isCaught) {
      Alert.alert(
        'Confirm',
        'Are you sure want to release?',
        [
          {
            text: "Cancel",
            onPress: () => {},
            style: 'cancel',
          },
          { text: "Ok", onPress: () => releasePokemon({ id: params.id }), }
        ],
        { cancelable: true },
      );
    } else {
      setModalVisible(true);
    }
  }, [isCaught, params]);
  const onConfirm = useCallback(() => {
    setModalVisible(false);
    if (isCaught) {
      return renamePokemon({ id: params.id, nickname });
    }
    return catchPokemon({ nickname, url: params.url });
  }, [nickname, params, isCaught]);
  const onRename = useCallback(() => {
    setModalVisible(true);
  }, []);

  useEffect(() => {
    if (renamePokemonError) {
      alert('Failed to rename pokemon');
      renamePokemonReset();
    }
    if (renamePokemonResponse?.status === 200) {
      alert('Success to rename pokemon');
      renamePokemonReset();
      navigation.navigate('Main');
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
      navigation.navigate('Main');
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
      navigation.navigate('Main');
    }
  }, [releasePokemonResponse]);
  useEffect(() => {
    findPokemon({ url: params.url });
  }, []);
  useEffect(() => {
    if (findPokemonError) {
      setIsCaught(false);
      findPokemonReset();
    }
    if (findPokemonResponse?.status === 200) {
      setIsCaught(true);
      findPokemonReset();
    }
  }, [findPokemonResponse]);

  return {
    loading:
      findPokemonLoading ||
      catchPokemonLoading ||
      releasePokemonLoading ||
      renamePokemonLoading,
    pokemon: params,
    gifs: getGifs,
    isCaught,
    onBtnClick,
    onRename,
    onConfirm,
    isDisabled,
    isMine: params.id,
    nickname,
    setNickname,
    modalVisible,
    setModalVisible,
  };
}