import { AxiosResponse } from "axios";
import api from "@/api/api";
import { IPokemon } from "@/interface";

interface IPokemonService {
  getPokemon: (name: string) => Promise<AxiosResponse<IPokemon>>;
}

const pokemonService: IPokemonService = {
  getPokemon(name: string) {
    return api.get<IPokemon>(`/pokemon/${name}`);
  },
};

export default pokemonService;
