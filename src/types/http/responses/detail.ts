import { MyPokemon, Response } from '../../main';

export interface FindPokemonResponse extends Response {
  data: MyPokemon;
}

export interface CatchPokemonResponse extends FindPokemonResponse {}

export interface ReleasePokemonResponse extends FindPokemonResponse {}

export interface RenamePokemonResponse extends FindPokemonResponse {}
