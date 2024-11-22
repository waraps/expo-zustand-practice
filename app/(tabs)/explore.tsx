import { SafeAreaView, Text, View } from "react-native";
import { useShallow } from "zustand/react/shallow";
import Toast from "react-native-toast-message";

import { InputSearch } from "@/components/InputSearch";
import { useCallback, useEffect, useState } from "react";
import { useStore } from "@/store";
import PokemonProfile from "@/components/PokemonProfile";
import PokemonEmpty from "@/components/PokemonEmpty";
import Loading from "@/components/Loading";

export default function TabTwoScreen() {
  // pokemons states
  const { loading, error, pokemon, errorCatch, successCatch } = useStore(
    useShallow((state) => ({
      loading: state.loading,
      error: state.error,
      pokemon: state.pokemon,
      errorCatch: state.errorCatch,
      successCatch: state.successCatch,
    }))
  );

  // pokemons actions
  const { getPokemons, addPokemon, resetCatchError, resetSuccessCatch } =
    useStore();

  const [pokemonName, setPokemonName] = useState<string>("");

  useEffect(() => {
    // debouncing api calls to improve the request performance
    const timer = setTimeout(() => {
      if (pokemonName?.length > 0) {
        getPokemons(pokemonName);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [pokemonName]);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
        position: "bottom",
      });
    }
  }, [error]);

  useEffect(() => {
    if (errorCatch) {
      Toast.show({
        type: "info",
        text1: errorCatch,
      });
      resetCatchError();
    }
  }, [errorCatch]);

  useEffect(() => {
    if (successCatch) {
      Toast.show({
        type: "success",
        text1: "pokemon catched successfully",
      });
      resetSuccessCatch();
    }
  }, [successCatch]);

  const renderPokeContainer = useCallback(() => {
    if (loading) {
      return <Loading />;
    }

    if (pokemon) {
      return <PokemonProfile pokemon={pokemon} addPokemon={addPokemon} />;
    } else {
      return <PokemonEmpty />;
    }
  }, [loading, pokemon]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontWeight: "bold", fontSize: 26 }}>Seek Pokemons</Text>
        <View style={{ marginVertical: 10 }}>
          <InputSearch value={pokemonName} onChangeText={setPokemonName} />
        </View>
        <View
          style={{
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {renderPokeContainer()}
        </View>
      </View>
    </SafeAreaView>
  );
}
