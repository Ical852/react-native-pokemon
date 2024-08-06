import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { connect } from "react-redux";
import tw from 'twrnc';

import {
  findPokemon,
  findPokemonReset,
  catchPokemon,
  catchPokemonReset,
  releasePokemon,
  releasePokemonReset,
  renamePokemon,
  renamePokemonReset,
} from '../../redux/rest/actions';
import {
  CatchPokemonRequest,
  DetailPageProps,
  FindPokemonRequest,
  ReleasePokemonRequest,
  RenamePokemonRequest,
} from '../../types';

import { AppDispatch, RootState } from "../../redux/store";
import { DetailModal } from './Sections';
import { styles } from './styles';
import { useDetail } from './useDetail';

const DetailPage: React.FC<DetailPageProps> = (props) => {
  const dtl = useDetail(props);

  const _renderModal = useMemo(() => {
    return (
      <DetailModal
        modalVisible={dtl.modalVisible}
        setModalVisible={dtl.setModalVisible}
        onConfirm={dtl.onConfirm}
        nickname={dtl.nickname}
        setNickname={dtl.setNickname}
      />
    )
  }, [dtl.pokemon, dtl.modalVisible, dtl.nickname]);

  return (
    <View style={[tw``, styles.container]}>
      {_renderModal}
      <Text>DetailPage</Text>
    </View>
  );
}

const mapStateToProps = (state: RootState) => ({
  findPokemonLoading: state.myPokemon.findPokemonLoading,
  findPokemonResponse: state.myPokemon.findPokemonResponse,
  findPokemonError: state.myPokemon.findPokemonError,

  catchPokemonLoading: state.myPokemon.catchPokemonLoading,
  catchPokemonResponse: state.myPokemon.catchPokemonResponse,
  catchPokemonError: state.myPokemon.catchPokemonError,

  releasePokemonLoading: state.myPokemon.releasePokemonLoading,
  releasePokemonResponse: state.myPokemon.releasePokemonResponse,
  releasePokemonError: state.myPokemon.releasePokemonError,

  renamePokemonLoading: state.myPokemon.renamePokemonLoading,
  renamePokemonResponse: state.myPokemon.renamePokemonResponse,
  renamePokemonError: state.myPokemon.renamePokemonError,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  findPokemon: (payload: FindPokemonRequest) => dispatch(findPokemon(payload)),
  findPokemonReset: () => dispatch(findPokemonReset()),
  catchPokemon: (payload: CatchPokemonRequest) => dispatch(catchPokemon(payload)),
  catchPokemonReset: () => dispatch(catchPokemonReset()),
  releasePokemon: (payload: ReleasePokemonRequest) => dispatch(releasePokemon(payload)),
  releasePokemonReset: () => dispatch(releasePokemonReset()),
  renamePokemon: (payload: RenamePokemonRequest) => dispatch(renamePokemon(payload)),
  renamePokemonReset: () => dispatch(renamePokemonReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
