import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={estilos.container}>

      <StatusBar
        backgroundColor="#121212"
        barStyle="light-content"
      />

      <View style={estilos.logoContainer}>
        <Text style={estilos.logo}>
          ROUTE 66
        </Text>

        <Text style={estilos.logoSubtitulo}>
          MUSIC STREAMING
        </Text>
      </View>

      <View style={estilos.card}>

        <Text style={estilos.titulo}>
          Bem-vindo de volta
        </Text>

        <Text style={estilos.subtitulo}>
          Continue sua jornada sonora
        </Text>

        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#8A8A8A"
          value={usuario}
          onChangeText={setUsuario}
          style={estilos.input}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#8A8A8A"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          style={estilos.input}
        />

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => navigation.replace('Principal')}
        >
          <Text style={estilos.textoBotao}>
            ENTRAR
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={estilos.link}>
            Criar nova conta
          </Text>
        </TouchableOpacity>

      </View>

      <Text style={estilos.rodape}>
        Inspired by Lightning McQueen ❤️ & Sally Carrera 💙
      </Text>

    </View>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },

  logo: {
    color: '#F8F9FA',
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: 4,
  },

  logoSubtitulo: {
    color: '#4EA8DE',
    fontSize: 13,
    letterSpacing: 3,
    marginTop: 5,
    fontWeight: '600',
  },

  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 25,
    padding: 25,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.3,

    shadowRadius: 10,

    elevation: 10,
  },

  titulo: {
    color: '#F8F9FA',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitulo: {
    color: '#A0A0A0',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#2A2A2A',

    borderWidth: 1,
    borderColor: '#3A3A3A',

    borderRadius: 16,

    padding: 16,

    color: '#F8F9FA',

    fontSize: 16,

    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#D62828',

    paddingVertical: 18,

    borderRadius: 16,

    alignItems: 'center',

    marginTop: 10,

    elevation: 8,
  },

  textoBotao: {
    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

    letterSpacing: 1.5,
  },

  link: {
    color: '#4EA8DE',

    textAlign: 'center',

    marginTop: 20,

    fontSize: 15,

    fontWeight: '600',
  },

  rodape: {
    color: '#666',

    textAlign: 'center',

    marginTop: 25,

    fontSize: 12,
  },

});