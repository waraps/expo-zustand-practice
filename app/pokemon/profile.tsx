import { SafeAreaView, Text, View } from "react-native";
import React, { useCallback } from "react";
import PokemonProfileCard from "@/components/PokemonProfile";

import { Stack, useGlobalSearchParams } from "expo-router";
import { useStore } from "@/store";

type PokemonProfileUrlParams = {
  id?: string;
};

const PokemonProfile = () => {
  const { id } = useGlobalSearchParams<PokemonProfileUrlParams>();

  // pokemons states
  const pokemons = useStore((state) => state.pokemonsCatcheds);

  const renderPokemonCard = useCallback(() => {
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id));

    if (pokemon) {
      return <PokemonProfileCard pokemon={pokemon} addPokemon={undefined} />;
    }
  }, [id]);

  return (
    <>
      <Stack.Screen options={{ title: "Pokemon", headerBackTitle: "" }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
        <View style={{ padding: 16 }}>
          <View
            style={{
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {renderPokemonCard()}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default PokemonProfile;
