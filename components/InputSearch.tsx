import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

// icons
import { Ionicons } from "@expo/vector-icons";

interface IInputSearch {
  value: string;
  onChangeText: (term: string) => void;
}

export function InputSearch(props: IInputSearch) {
  const { value, onChangeText } = props;

  const clearText = (): void => onChangeText("");

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <View style={{ marginLeft: 10 }}>
          <Ionicons name="search" size={20} color="#4682B4" />
        </View>
        <TextInput
          style={styles.input}
          cursorColor={"#4682B4"}
          onChangeText={onChangeText}
          value={value}
          placeholder="type a location .."
        />
      </View>
      {value.length > 0 ? (
        <TouchableOpacity style={{ marginRight: 18 }} onPress={clearText}>
          <Ionicons name="close" size={25} color="#4682B4" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F0F8FF",
    borderRadius: 10,
    padding: 5,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    width: "92%",
  },
  input: {
    height: 45,
    padding: 5,
    width: "98%",
    margin: 0,
    color: "#4682B4",
  },
});
