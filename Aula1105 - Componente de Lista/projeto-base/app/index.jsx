import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";

import Header from "./components/Header";
import tarefas from "./dados/tarefas";

function ItemTarefa({ item }) {
  return (
    <View style={estilos.card}>
      <Image source={item.photo} style={estilos.foto} />

      <View style={estilos.conteudo}>
        <Text style={estilos.titulo}>{item.title}</Text>

        <Text
          style={[
            estilos.status,
            item.status === "Concluída"
              ? estilos.concluida
              : estilos.pendente,
          ]}
        >
          {item.status}
        </Text>

        <Text style={estilos.desc}>{item.description}</Text>
      </View>
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      <Header titulo="SESI PRODUTIVIDADE" />

      <FlatList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ItemTarefa item={item} />}
        contentContainerStyle={estilos.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },

  lista: {
    paddingVertical: 10,
    paddingBottom: 30,
  },

  card: {
    backgroundColor: "#111111",
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 18,
    overflow: "hidden",

    borderWidth: 2,
    borderColor: "#ca0000",

    elevation: 8,
  },

  foto: {
    width: "100%",
    height: 200,
  },

  conteudo: {
    padding: 15,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 8,
  },

  status: {
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 10,
    overflow: "hidden",
  },

  concluida: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },

  pendente: {
    backgroundColor: "#ca0000",
    color: "#ffffff",
  },

  desc: {
    color: "#d9d9d9",
    fontSize: 15,
    lineHeight: 22,
  },
});