import { useStore } from "@/store";
import { SafeAreaView, Text, TextInput, View } from "react-native";

export default function SettingsScreen() {
  // pokemons states
  const user = useStore((state) => state.user);

  // pokemons actions
  const { setName, setRegion } = useStore();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontWeight: "bold", fontSize: 26 }}>Settings</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ marginBottom: 2 }}>Your Name</Text>
          <TextInput
            style={{
              height: 45,
              padding: 5,
              width: "100%",
              margin: 0,
              color: "#000",
              borderColor: "#4169E1",
              borderWidth: 1,
              borderRadius: 8,
            }}
            placeholder="Type your name ..."
            onChangeText={setName}
            value={user.name}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ marginBottom: 2 }}>Region Pokemon</Text>
          <TextInput
            style={{
              height: 45,
              padding: 5,
              width: "100%",
              margin: 0,
              color: "#000",
              borderColor: "#4169E1",
              borderWidth: 1,
              borderRadius: 8,
            }}
            placeholder="Type your region ..."
            onChangeText={setRegion}
            value={user.region}
          />
          {user.region ? (
            <Text style={{ marginTop: 2, fontStyle: "italic", fontSize: 16 }}>
              Your Region was setted to: {user.region}
            </Text>
          ) : undefined}
        </View>
      </View>
    </SafeAreaView>
  );
}
