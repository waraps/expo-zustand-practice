import { Text, TouchableOpacity, Image, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface IPokemonCard {
  id: number;
  img: string;
  name: string;
  removePokemon: () => void;
}

const PokemonCard = (props: IPokemonCard) => {
  const { id, img, name, removePokemon } = props;
  return (
    <View
      style={{
        backgroundColor: "#fff",
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
      <Link href={`/pokemon/profile?id=${id}`}>
        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: img }}
            style={{
              height: 100,
              width: 100,
              resizeMode: "contain",
            }}
          />
          <Text style={{ textTransform: "capitalize", fontWeight: "bold" }}>
            {name}
          </Text>
        </View>
      </Link>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "#4169E1",
          width: "100%",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        onPress={removePokemon}
      >
        <Text
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PokemonCard;
