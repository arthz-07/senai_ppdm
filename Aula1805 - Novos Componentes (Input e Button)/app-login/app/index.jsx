import {useState} from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import Logo from '../assets/logo.png';

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function Login() {
      console.log('Dados do Login');
      console.log(email, senha);
      
    }

  return (
    <ScrollView>
      <Image
        source={Logo}
        resizeMode="contain"
      />

      <Text style={estilos.titulo}> Login </Text>
      <Text style={estilos.subtitulo}> Para Proseguir insira seus dados </Text>
    </ScrollView>
  );
}


const estilos = StyleSheet.create({
  
})