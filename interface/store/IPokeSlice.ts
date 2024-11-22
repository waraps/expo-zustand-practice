import { IPokemon } from "../network";

export interface IPokeSlice {
  loading: boolean;
  error?: string;
  pokemon?: IPokemon;
  pokemonsCatcheds: IPokemon[];
  errorCatch?: string;
  successCatch: boolean;
  successRemove: boolean;
  count: number;
  getPokemons: (name: string) => void;
  addPokemon: (pokemon: IPokemon) => void;
  removePokemon: (id: number) => void;
  resetCatchError: () => void;
  resetSuccessCatch: () => void;
  resetSuccessRemove: () => void;
}
