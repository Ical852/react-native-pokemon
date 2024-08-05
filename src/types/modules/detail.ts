import { NavigationProp } from "@react-navigation/native";
import { 
  CatchPokemonRequest,
  CatchPokemonResponse,
  FindPokemonRequest,
  FindPokemonResponse,
  ReleasePokemonRequest,
  ReleasePokemonResponse,
  RenamePokemonRequest,
  RenamePokemonResponse,
} from "../http";

export interface DetailPageProps {
  findPokemon: (payload: FindPokemonRequest) => void;
  findPokemonLoading: boolean,
  findPokemonError: boolean,
  findPokemonResponse: FindPokemonResponse,
  findPokemonReset: () => void;

  catchPokemon: (payload: CatchPokemonRequest) => void;
  catchPokemonLoading: boolean,
  catchPokemonError: boolean,
  catchPokemonResponse: CatchPokemonResponse,
  catchPokemonReset: () => void;

  releasePokemon: (payload: ReleasePokemonRequest) => void;
  releasePokemonLoading: boolean,
  releasePokemonError: boolean,
  releasePokemonResponse: ReleasePokemonResponse,
  releasePokemonReset: () => void;

  renamePokemon: (payload: RenamePokemonRequest) => void;
  renamePokemonLoading: boolean,
  renamePokemonError: boolean,
  renamePokemonResponse: RenamePokemonResponse,
  renamePokemonReset: () => void;

  navigation: NavigationProp<any>;
  route: {
    params: any,
  }
}
