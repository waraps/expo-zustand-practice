import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IPokemon } from "@/interface";
import { getPokemonColors } from "@/helpers";

interface IPokemonProfile {
  pokemon: IPokemon;
  addPokemon?: (pokemon: IPokemon) => void;
}

const PokemonProfile = ({ pokemon, addPokemon }: IPokemonProfile) => {
  const { primary, secondary, tertiary, text, textButton } = getPokemonColors(
    pokemon.types[0].type.name.toLowerCase()
  );

  const doCatchPokemon = () => {
    if (addPokemon) {
      addPokemon(pokemon);
    }
  };

  return (
    <View
      style={{
        backgroundColor: primary,
        width: "100%",
        padding: 16,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          textTransform: "capitalize",
          color: text,
          fontWeight: "bold",
        }}
      >
        {pokemon.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ color: text, fontWeight: "bold", marginVertical: 2 }}>
            Weight:{" "}
            <Text style={{ fontWeight: "normal" }}>{pokemon.weight}</Text>
          </Text>
          <Text style={{ color: text, fontWeight: "bold", marginVertical: 2 }}>
            Height:{" "}
            <Text style={{ fontWeight: "normal" }}>{pokemon.height}</Text>
          </Text>
          <Text style={{ color: text, fontWeight: "bold", marginVertical: 2 }}>
            Moves:{" "}
            <Text style={{ fontWeight: "normal" }}>{pokemon.moves.length}</Text>
          </Text>
        </View>
        <Image
          source={
            pokemon?.sprites?.front_default
              ? { uri: `${pokemon.sprites.front_default}` }
              : require("@/assets/images/pokeball-gray.jpg")
          }
          style={{
            height: 200,
            width: 200,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
        {pokemon.types.map((type, index) => (
          <View
            key={index}
            style={{
              borderRadius: 40,
              backgroundColor: secondary,
              borderColor: tertiary,
              borderWidth: 0.5,
              paddingVertical: 8,
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                textTransform: "capitalize",
                color: textButton,
                fontWeight: "bold",
              }}
            >
              {type.type.name}
            </Text>
          </View>
        ))}
      </View>
      {addPokemon ? (
        <TouchableOpacity
          onPress={doCatchPokemon}
          style={{
            backgroundColor: secondary,
            padding: 10,
            borderRadius: 5,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: textButton,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Cacth it
          </Text>
        </TouchableOpacity>
      ) : undefined}
    </View>
  );
};

export default PokemonProfile;
