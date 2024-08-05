export interface CatchPokemonRequest {
  nickname: string;
  url: string;
}

export interface FindPokemonRequest {
  url: string;
}

export interface ReleasePokemonRequest {
  id: number;
}

export interface RenamePokemonRequest {
  id: number;
  nickname: string;
}
