import {MyPokemon, Response} from '../../main';

export interface GetAllMyPokemonResponse extends Response {
  data: Array<MyPokemon>;
}
