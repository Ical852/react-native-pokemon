import axios from 'axios';
import {restBaseUrl} from '../../utils';
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

export const myPokemonApis = {
  getAllMyPokemons: async (): Promise<
    GetAllMyPokemonResponse | FailedResponse
  > => {
    const response = await axios.get(restBaseUrl + 'pokemon');
    return response.data;
  },
  findPokemon: async (
    payload: FindPokemonRequest,
  ): Promise<FindPokemonResponse | FailedResponse> => {
    const response = await axios.post(restBaseUrl + 'pokemon/find', payload);
    return response.data;
  },
  catchPokemon: async (
    payload: CatchPokemonRequest,
  ): Promise<CatchPokemonResponse | FailedResponse> => {
    const response = await axios.post(restBaseUrl + 'pokemon/catch', payload);
    return response.data;
  },
  releasePokemon: async (
    payload: ReleasePokemonRequest,
  ): Promise<ReleasePokemonResponse | FailedResponse> => {
    const response = await axios.post(
      restBaseUrl + 'pokemon/release/' + payload.id,
    );
    return response.data;
  },
  renamePokemon: async (
    payload: RenamePokemonRequest,
  ): Promise<RenamePokemonResponse | FailedResponse> => {
    const response = await axios.post(
      restBaseUrl + 'pokemon/rename/' + payload.id,
      payload,
    );
    return response.data;
  },
};
