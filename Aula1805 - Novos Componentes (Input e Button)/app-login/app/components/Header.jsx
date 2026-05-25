import { View, Text, StyleSheet } from "react-native";

export default function Header({ titulo }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>{titulo}</Text>

      <Text style={estilos.subtitulo}>
        Organize as suas atividades diárias
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    paddingVertical: 25,
    paddingHorizontal: 16,
    alignItems: "center",

    borderBottomWidth: 3,
    borderBottomColor: "#ca0000",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: 1,
  },

  subtitulo: {
    fontSize: 14,
    color: "#ca0000",
    marginTop: 5,
    fontWeight: "600",
  },
});