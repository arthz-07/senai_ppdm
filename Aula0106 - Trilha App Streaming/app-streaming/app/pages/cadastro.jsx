import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <ScrollView
      contentContainerStyle={estilos.container}
      showsVerticalScrollIndicator={false}
    >

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
          Criar Conta
        </Text>

        <Text style={estilos.subtitulo}>
          Comece sua jornada pela Route 66
        </Text>

        <TextInput
          placeholder="Nome completo"
          placeholderTextColor="#8A8A8A"
          value={nome}
          onChangeText={setNome}
          style={estilos.input}
        />

        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#8A8A8A"
          value={email}
          onChangeText={setEmail}
          style={estilos.input}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#8A8A8A"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          style={estilos.input}
        />

        <TextInput
          placeholder="Confirmar senha"
          placeholderTextColor="#8A8A8A"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          style={estilos.input}
        />

        <TouchableOpacity
          style={estilos.botao}
        >
          <Text style={estilos.textoBotao}>
            CRIAR CONTA
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text style={estilos.link}>
            Já possui uma conta? Entrar
          </Text>
        </TouchableOpacity>

      </View>

      <Text style={estilos.rodape}>
        Inspired by Lightning McQueen ❤️ & Sally Carrera 💙
      </Text>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#121212',
    paddingHorizontal: 25,
    paddingVertical: 40,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 35,
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