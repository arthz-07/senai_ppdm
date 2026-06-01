import React from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { musicas } from '../dados/musicas';

export default function Home() {

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.bemVindo}>
          Bem-vindo à Route 66
        </Text>

        <Text style={styles.subtitulo}>
          Continue sua jornada sonora
        </Text>

      </View>

      <View style={styles.destaque}>

        <Text style={styles.destaqueTitulo}>
          Música em destaque
        </Text>

        <Text style={styles.destaqueMusica}>
          Life is a Highway
        </Text>

        <Text style={styles.destaqueArtista}>
          Rascal Flatts
        </Text>

      </View>

      <Text style={styles.secao}>
        Suas músicas
      </Text>

      <FlatList
        data={musicas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (

          <TouchableOpacity style={styles.card}>

            <View style={styles.capa}>
              <Text style={styles.icone}>
                ♪
              </Text>
            </View>

            <View style={styles.info}>

              <Text style={styles.musica}>
                {item.titulo}
              </Text>

              <Text style={styles.artista}>
                {item.artista}
              </Text>

              <Text style={styles.album}>
                {item.album}
              </Text>

            </View>

          </TouchableOpacity>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  header: {
    marginBottom: 25,
  },

  bemVindo: {
    color: '#F8F9FA',
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#A0A0A0',
    fontSize: 15,
    marginTop: 5,
  },

  destaque: {
    backgroundColor: '#D62828',

    borderRadius: 22,

    padding: 25,

    marginBottom: 30,

    elevation: 8,
  },

  destaqueTitulo: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.8,
  },

  destaqueMusica: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },

  destaqueArtista: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5,
  },

  secao: {
    color: '#4EA8DE',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#1E1E1E',

    borderRadius: 18,

    padding: 15,

    marginBottom: 14,

    elevation: 5,
  },

  capa: {
    width: 60,
    height: 60,

    borderRadius: 15,

    backgroundColor: '#D62828',

    justifyContent: 'center',
    alignItems: 'center',
  },

  icone: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },

  info: {
    marginLeft: 15,
    flex: 1,
  },

  musica: {
    color: '#F8F9FA',
    fontSize: 18,
    fontWeight: 'bold',
  },

  artista: {
    color: '#4EA8DE',
    fontSize: 14,
    marginTop: 4,
  },

  album: {
    color: '#A0A0A0',
    fontSize: 13,
    marginTop: 2,
  },

});