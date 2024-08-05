import {
  CatchPokemonRequest,
  CatchPokemonResponse,
  FailedResponse,
  FindPokemonRequest,
  FindPokemonResponse,
  GetAllMyPokemonResponse,
  ReleasePokemonRequest,
  ReleasePokemonResponse,
  RenamePokemonRequest,
  RenamePokemonResponse,
} from '../../types';
import * as CONST from './constants';

export const getAllMyPokemons = () => {
  return {
    type: CONST.GET_ALL_MY_POKEMONS,
  };
};
export const getAllMyPokemonsSuccess = (payload: GetAllMyPokemonResponse) => {
  return {
    type: CONST.GET_ALL_MY_POKEMONS_SUCCESS,
    payload,
  };
};
export const getAllMyPokemonsFailed = (payload: FailedResponse) => {
  return {
    type: CONST.GET_ALL_MY_POKEMONS_FAILED,
    payload,
  };
};
export const getAllMyPokemonsReset = () => {
  return {
    type: CONST.GET_ALL_MY_POKEMONS_RESET,
  };
};

export const findPokemon = (payload: FindPokemonRequest) => {
  return {
    type: CONST.FIND_POKEMON,
    payload,
  };
};
export const findPokemonSuccess = (payload: FindPokemonResponse) => {
  return {
    type: CONST.FIND_POKEMON_SUCCESS,
    payload,
  };
};
export const findPokemonFailed = (payload: FailedResponse) => {
  return {
    type: CONST.FIND_POKEMON_FAILED,
    payload,
  };
};
export const findPokemonReset = () => {
  return {
    type: CONST.FIND_POKEMON_RESET,
  };
};

export const catchPokemon = (payload: CatchPokemonRequest) => {
  return {
    type: CONST.CATCH_POKEMON,
    payload,
  };
};
export const catchPokemonSuccess = (payload: CatchPokemonResponse) => {
  return {
    type: CONST.CATCH_POKEMON_SUCCESS,
    payload,
  };
};
export const catchPokemonFailed = (payload: FailedResponse) => {
  return {
    type: CONST.CATCH_POKEMON_FAILED,
    payload,
  };
};
export const catchPokemonReset = () => {
  return {
    type: CONST.CATCH_POKEMON_RESET,
  };
};

export const releasePokemon = (payload: ReleasePokemonRequest) => {
  return {
    type: CONST.RELEASE_POKEMON,
    payload,
  };
};
export const releasePokemonSuccess = (payload: ReleasePokemonResponse) => {
  return {
    type: CONST.RELEASE_POKEMON_SUCCESS,
    payload,
  };
};
export const releasePokemonFailed = (payload: FailedResponse) => {
  return {
    type: CONST.RELEASE_POKEMON_FAILED,
    payload,
  };
};
export const releasePokemonReset = () => {
  return {
    type: CONST.RELEASE_POKEMON_RESET,
  };
};

export const renamePokemon = (payload: RenamePokemonRequest) => {
  return {
    type: CONST.RENAME_POKEMON,
    payload,
  };
};
export const renamePokemonSuccess = (payload: RenamePokemonResponse) => {
  return {
    type: CONST.RENAME_POKEMON_SUCCESS,
    payload,
  };
};
export const renamePokemonFailed = (payload: FailedResponse) => {
  return {
    type: CONST.RENAME_POKEMON_FAILED,
    payload,
  };
};
export const renamePokemonReset = () => {
  return {
    type: CONST.RENAME_POKEMON_RESET,
  };
};
