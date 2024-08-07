import {takeLatest, call, put} from 'redux-saga/effects';
import {myPokemonApis} from './apis';
import {
  GET_ALL_MY_POKEMONS,
  FIND_POKEMON,
  CATCH_POKEMON,
  RELEASE_POKEMON,
  RENAME_POKEMON,
} from './constants';
import {
  getAllMyPokemonsSuccess,
  getAllMyPokemonsFailed,
  findPokemonSuccess,
  findPokemonFailed,
  catchPokemonSuccess,
  catchPokemonFailed,
  releasePokemonSuccess,
  releasePokemonFailed,
  renamePokemonSuccess,
  renamePokemonFailed,
} from './actions';
import {
  CatchPokemonRequest,
  CatchPokemonResponse,
  FindPokemonRequest,
  FindPokemonResponse,
  GetAllMyPokemonResponse,
  ReduxActionParams,
  ReleasePokemonRequest,
  ReleasePokemonResponse,
  RenamePokemonRequest,
  RenamePokemonResponse,
} from '../../types';
import {RESPONSE_STATUS} from '../../utils';

function* getAllMyPokemonsSaga(): Generator {
  try {
    const response: GetAllMyPokemonResponse = yield call(
      myPokemonApis.getAllMyPokemons,
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(getAllMyPokemonsSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(getAllMyPokemonsSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          getAllMyPokemonsFailed({message: `Error: ${response.message}`}),
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          getAllMyPokemonsFailed({message: `Error: ${response.message}`}),
        );
      default:
        return yield put(
          getAllMyPokemonsFailed({message: `Error: Something went wrong`}),
        );
    }
  } catch (error: any) {
    yield put(getAllMyPokemonsFailed({message: `Error: ${error.message}`}));
  }
}

function* findPokemonSaga(action: ReduxActionParams): Generator {
  try {
    const response: FindPokemonResponse = yield call(
      myPokemonApis.findPokemon,
      action.payload as FindPokemonRequest,
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(findPokemonSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(findPokemonSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          findPokemonFailed({message: `Error: ${response.message}`}),
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          findPokemonFailed({message: `Error: ${response.message}`}),
        );
      default:
        return yield put(
          findPokemonFailed({message: `Error: Something went wrong`}),
        );
    }
  } catch (error: any) {
    yield put(findPokemonFailed({message: `Error: ${error.message}`}));
  }
}

function* catchPokemonSaga(action: ReduxActionParams): Generator {
  try {
    const response: CatchPokemonResponse = yield call(
      myPokemonApis.catchPokemon,
      action.payload as CatchPokemonRequest,
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(catchPokemonSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(catchPokemonSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          catchPokemonFailed({message: `Error: ${response.message}`}),
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          catchPokemonFailed({message: `Error: ${response.message}`}),
        );
      default:
        return yield put(
          catchPokemonFailed({message: `Error: Something went wrong`}),
        );
    }
  } catch (error: any) {
    yield put(catchPokemonFailed({message: `Error: ${error.message}`}));
  }
}

function* releasePokemonSaga(action: ReduxActionParams): Generator {
  try {
    const response: ReleasePokemonResponse = yield call(
      myPokemonApis.releasePokemon,
      action.payload as ReleasePokemonRequest,
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(releasePokemonSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(releasePokemonSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          releasePokemonFailed({message: `Error: ${response.message}`}),
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          releasePokemonFailed({message: `Error: ${response.message}`}),
        );
      default:
        return yield put(
          releasePokemonFailed({message: `Error: Something went wrong`}),
        );
    }
  } catch (error: any) {
    yield put(releasePokemonFailed({message: `Error: ${error.message}`}));
  }
}

function* renamePokemonSaga(action: ReduxActionParams): Generator {
  try {
    const response: RenamePokemonResponse = yield call(
      myPokemonApis.renamePokemon,
      action.payload as RenamePokemonRequest,
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(renamePokemonSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(renamePokemonSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          renamePokemonFailed({message: `Error: ${response.message}`}),
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          renamePokemonFailed({message: `Error: ${response.message}`}),
        );
      default:
        return yield put(
          renamePokemonFailed({message: `Error: Something went wrong`}),
        );
    }
  } catch (error: any) {
    yield put(releasePokemonFailed({message: `Error: ${error.message}`}));
  }
}

export function* myPokemonSaga() {
  yield takeLatest(GET_ALL_MY_POKEMONS, getAllMyPokemonsSaga);
  yield takeLatest(FIND_POKEMON, findPokemonSaga);
  yield takeLatest(CATCH_POKEMON, catchPokemonSaga);
  yield takeLatest(RELEASE_POKEMON, releasePokemonSaga);
  yield takeLatest(RENAME_POKEMON, renamePokemonSaga);
}
