import { NavigationProp } from "@react-navigation/native";
import { GetAllMyPokemonResponse } from "../http";

export interface MyPokemonPageProps {
  getAllMyPokemons: () => void;
  getAllMyPokemonsLoading: boolean,
  getAllMyPokemonsError: boolean,
  getAllMyPokemonsResponse: GetAllMyPokemonResponse,
  getAllMyPokemonsReset: () => void;

  navigation: NavigationProp<any>;
}
