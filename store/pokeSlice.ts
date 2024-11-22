import { StateCreator } from "zustand";
import { IError, IPokemon, IPokeSlice } from "../interface";
import pokemonService from "@/services/pokemonServices";

export const createPokeSlice: StateCreator<IPokeSlice, [], [], IPokeSlice> = (
  set
) => ({
  // states
  loading: false,
  error: undefined,
  errorCatch: undefined,
  successCatch: false,
  successRemove: false,
  pokemon: undefined,
  pokemonsCatcheds: [],
  count: 80,

  // actions
  getPokemons: async (name: string) => {
    try {
      set((state) => ({ ...state, pokemon: data, loading: true }));
      const { data } = await pokemonService.getPokemon(
        name.trim().toLocaleLowerCase()
      );
      set((state) => ({
        ...state,
        pokemon: data,
        loading: false,
        error: undefined,
      }));
    } catch (error: IError | any) {
      set((state) => ({
        ...state,
        loading: false,
        error:
          error?.message !== "Request failed with status code 404"
            ? "Oops something has been wrong"
            : undefined,
      }));
    }
  },
  addPokemon: (pokemon: IPokemon) =>
    set((state) => {
      if (!state.pokemonsCatcheds.find((item) => item.id === pokemon.id)) {
        return {
          ...state,
          pokemonsCatcheds: [...state.pokemonsCatcheds, pokemon],
          successCatch: true,
        };
      }
      return { ...state, errorCatch: "Pokemon already catched" };
    }),
  removePokemon: (id: number) =>
    set((state) => ({
      ...state,
      pokemonsCatcheds: state.pokemonsCatcheds.filter(
        (pokemon) => pokemon.id !== id
      ),
      successRemove: true,
    })),
  resetCatchError: () => set((state) => ({ ...state, errorCatch: undefined })),
  resetSuccessCatch: () => set((state) => ({ ...state, successCatch: false })),
  resetSuccessRemove: () =>
    set((state) => ({ ...state, successRemove: false })),
});
