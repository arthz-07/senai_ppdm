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
        backgroundColor="#0a0a0a"
        barStyle="light-content"
      />

      <Text style={estilos.logo}>
        🐾
      </Text>

      <Text style={estilos.titulo}>
        SESI PET
      </Text>

      <Text style={estilos.subtitulo}>
        Tecnologia e cuidado!
      </Text>

      <TextInput
        placeholder="Digite seu e-mail"
        placeholderTextColor="#888"
        value={usuario}
        onChangeText={setUsuario}
        style={estilos.input}
      />

      <TextInput
        placeholder="Digite sua senha"
        placeholderTextColor="#888"
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
          Crie sua conta
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    padding: 25,
  },

  logo: {
    fontSize: 70,
    textAlign: 'center',
    marginBottom: 10,
  },

  titulo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 2,
  },

  subtitulo: {
    fontSize: 15,
    color: '#c77dff',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
  },

  input: {
    backgroundColor: '#1a1a1a',

    borderWidth: 2,
    borderColor: '#7b2cbf',

    borderRadius: 14,

    padding: 16,

    color: '#ffffff',

    fontSize: 16,

    marginBottom: 18,
  },

  botao: {
    backgroundColor: '#7b2cbf',

    padding: 17,

    borderRadius: 14,

    alignItems: 'center',

    marginTop: 10,

    shadowColor: '#c77dff',

    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 0.8,

    shadowRadius: 10,

    elevation: 10,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  link: {
    color: '#c77dff',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15,
  },
});