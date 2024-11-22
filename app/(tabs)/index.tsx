import { Image, StyleSheet, Text, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import PokemonCard from "@/components/PokemonCard";
import { Link } from "expo-router";
import { useEffect } from "react";
import Toast from "react-native-toast-message";

export default function HomeScreen() {
  // store states
  const { trainerName, pokemons, successRemove, taskState } = useStore(
    useShallow((state) => ({
      trainerName: state.user.name,
      pokemons: state.pokemonsCatcheds,
      successRemove: state.successRemove,
      taskState: state.taskState,
    }))
  );

  const countTask = taskState.count;

  // pokemons actions
  const { removePokemon, resetSuccessRemove } = useStore();

  useEffect(() => {
    if (successRemove) {
      Toast.show({
        type: "success",
        text1: "Pokemon removed successfully",
      });
      resetSuccessRemove;
    }
  }, [successRemove]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#DC143C", dark: "#8B0000" }}
      headerImage={
        <Image
          source={require("@/assets/images/poke-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{`Welcome ${
          trainerName || "Trainer"
        }!`}</ThemedText>
        <Image
          source={require("@/assets/images/pokeball.png")}
          style={{ width: 30, height: 30, marginBottom: 4 }}
        />
      </ThemedView>

      {pokemons.length > 0 ? (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <ThemedView>
            <ThemedText type="subtitle">Pokemons list catched</ThemedText>
          </ThemedView>
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              img={pokemon.sprites.front_default}
              removePokemon={() => removePokemon(pokemon.id)}
            />
          ))}
        </View>
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ marginTop: 30 }}>{`No pokemons catched yet :(`}</Text>
          <Link
            href="/explore"
            style={{
              textDecorationLine: "underline",
              color: "#4169E1",
              fontWeight: "bold",
              marginTop: 6,
            }}
          >
            Go to Explore
          </Link>
        </View>
      )}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reactLogo: {
    height: 150,
    width: 350,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
