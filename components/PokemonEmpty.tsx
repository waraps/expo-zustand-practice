import { Image, Text, View } from "react-native";
import React from "react";

const PokemonEmpty = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
      }}
    >
      <Image
        source={require("@/assets/images/pokeball-gray.jpg")}
        style={{
          height: 200,
          width: 200,
        }}
      />
      <Text style={{ marginTop: 20, fontWeight: "bold", color: "#4682B4" }}>
        {`Pokemon not found :(`}
      </Text>
    </View>
  );
};

export default PokemonEmpty;
