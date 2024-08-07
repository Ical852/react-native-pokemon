import React, {useMemo} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
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

import {
  DetailModal,
  DetailHeader,
  DetaiLDesc,
  DetailPokemon,
  DetailData,
  DetailAction,
} from './Sections';
import {AppDispatch, RootState} from '../../redux/store';
import {useDetail} from './useDetail';

const DetailPage: React.FC<DetailPageProps> = props => {
  const dtl = useDetail(props);

  const _renderModal = useMemo(() => {
    return (
      <DetailModal
        isMine={dtl.isMine}
        modalVisible={dtl.modalVisible}
        setModalVisible={dtl.setModalVisible}
        onConfirm={dtl.onConfirm}
        nickname={dtl.nickname}
        setNickname={dtl.setNickname}
      />
    );
  }, [dtl.pokemon, dtl.modalVisible, dtl.nickname, dtl.onConfirm]);

  return (
    <>
      {_renderModal}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[tw`flex-1 w-full h-full`, {backgroundColor: dtl.bgColor}]}>
        <DetailHeader onBack={dtl.onBack} />
        <DetaiLDesc pokemon={dtl.pokemon} />
        <DetailPokemon pokemon={dtl.pokemon} />
        <DetailAction dtl={dtl} />
        <DetailData dtl={dtl} />
      </ScrollView>
    </>
  );
};

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
  catchPokemon: (payload: CatchPokemonRequest) =>
    dispatch(catchPokemon(payload)),
  catchPokemonReset: () => dispatch(catchPokemonReset()),
  releasePokemon: (payload: ReleasePokemonRequest) =>
    dispatch(releasePokemon(payload)),
  releasePokemonReset: () => dispatch(releasePokemonReset()),
  renamePokemon: (payload: RenamePokemonRequest) =>
    dispatch(renamePokemon(payload)),
  renamePokemonReset: () => dispatch(renamePokemonReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
