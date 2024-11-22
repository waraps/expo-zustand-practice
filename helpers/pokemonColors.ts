import { PokemonColors } from "@/constants/PokemonColors";

interface IPokemonColors {
  primary: string;
  secondary: string;
  tertiary: string;
  text: string;
  textButton?: string;
}

export const getPokemonColors = (type?: string): IPokemonColors => {
  switch (type) {
    case PokemonColors.steel:
      return {
        primary: "#808080",
        secondary: "#F5F5DC",
        tertiary: "#2F4F4F",
        text: "white",
        textButton: "#000",
      };
    case PokemonColors.water:
      return {
        primary: "#00BFFF",
        secondary: "#4682B4",
        tertiary: "#000080",
        text: "white",
        textButton: "white",
      };
    case PokemonColors.ice:
      return {
        primary: "#1E90FF",
        secondary: "#87CEEB",
        tertiary: "#000080",
        text: "white",
        textButton: "white",
      };
    case PokemonColors.fire:
      return {
        primary: "#FA8072",
        secondary: "#FF4500",
        tertiary: "#FF0000",
        text: "white",
        textButton: "white",
      };
    case PokemonColors.electric:
      return {
        primary: "#FFFACD",
        secondary: "#FFD700",
        tertiary: "#FFA500",
        text: "#000",
        textButton: "#000",
      };
    case PokemonColors.grass:
      return {
        primary: "#90EE90",
        secondary: "#228B22",
        tertiary: "#556B2F",
        text: "#000",
        textButton: "white",
      };
    case PokemonColors.ground:
      return {
        primary: "#F4A460",
        secondary: "#8B4513",
        tertiary: "#A52A2A",
        text: "white",
        textButton: "white",
      };
    case PokemonColors.fairy:
      return {
        primary: "#FFC0CB",
        secondary: "#C71585",
        tertiary: "#FF1493",
        text: "#000",
        textButton: "white",
      };
    case PokemonColors.ghost:
    case PokemonColors.poison:
      return {
        primary: "#9370DB",
        secondary: "#8B008B",
        tertiary: "#4B0082",
        text: "white",
        textButton: "white",
      };
    case PokemonColors.dragon:
      return {
        primary: "#9932CC",
        secondary: "#6A5ACD",
        tertiary: "#4B0082",
        text: "white",
        textButton: "white",
      };
    case PokemonColors.bug:
      return {
        primary: "#9ACD32",
        secondary: "#556B2F",
        tertiary: "#4B0082",
        text: "#000",
        textButton: "white",
      };
    case PokemonColors.flying:
    case PokemonColors.normal:
      return {
        primary: "#F5F5DC",
        secondary: "#8B4513",
        tertiary: "#4B0082",
        text: "#000",
        textButton: "white",
      };
    case PokemonColors.psychic:
      return {
        primary: "#E6E6FA",
        secondary: "#6A5ACD",
        tertiary: "#4B0082",
        text: "#000",
        textButton: "white",
      };
    default:
      return {
        primary: "#DCDCDC",
        secondary: "#2F4F4F",
        tertiary: "#000000",
        text: "#000000",
        textButton: "#FFF",
      };
  }
};
