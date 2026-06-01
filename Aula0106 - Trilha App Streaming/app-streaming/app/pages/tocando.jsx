import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function Tocando() {

  return (
    <View style={styles.container}>

      <StatusBar
        backgroundColor="#121212"
        barStyle="light-content"
      />

      <Text style={styles.titulo}>
        Tocando Agora
      </Text>

      <Text style={styles.subtitulo}>
        Route 66 Music
      </Text>

      <View style={styles.capa}>

        <Text style={styles.capaIcone}>
          🚗
        </Text>

      </View>

      <View style={styles.infoMusica}>

        <Text style={styles.musica}>
          Life Is a Highway
        </Text>

        <Text style={styles.artista}>
          Rascal Flatts
        </Text>

      </View>

      <View style={styles.tempoContainer}>

        <Text style={styles.tempo}>
          1:42
        </Text>

        <Text style={styles.tempo}>
          3:58
        </Text>

      </View>

      <View style={styles.barra}>

        <View style={styles.progresso} />

      </View>

      <View style={styles.controles}>

        <TouchableOpacity>
          <Text style={styles.controle}>
            ⏮
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playIcon}>
            ▶
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.controle}>
            ⏭
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.acoes}>

        <TouchableOpacity style={styles.botaoAcao}>
          <Text style={styles.textoAcao}>
            ❤️ Favoritar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAcao}>
          <Text style={styles.textoAcao}>
            🔁 Repetir
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  titulo: {
    color: '#F8F9FA',
    fontSize: 30,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#4EA8DE',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 35,
  },

  capa: {
    width: 280,
    height: 280,

    backgroundColor: '#1E1E1E',

    borderRadius: 30,

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 3,
    borderColor: '#D62828',

    elevation: 10,

    marginBottom: 35,
  },

  capaIcone: {
    fontSize: 120,
  },

  infoMusica: {
    alignItems: 'center',
    marginBottom: 25,
  },

  musica: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  artista: {
    color: '#4EA8DE',
    fontSize: 18,
    marginTop: 8,
  },

  tempoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  tempo: {
    color: '#A0A0A0',
    fontSize: 13,
  },

  barra: {
    width: '100%',
    height: 8,

    backgroundColor: '#2C2C2C',

    borderRadius: 20,

    marginBottom: 35,
  },

  progresso: {
    width: '45%',
    height: '100%',

    backgroundColor: '#D62828',

    borderRadius: 20,
  },

  controles: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 35,

    marginBottom: 35,
  },

  controle: {
    color: '#FFFFFF',
    fontSize: 35,
  },

  playButton: {
    width: 85,
    height: 85,

    borderRadius: 50,

    backgroundColor: '#D62828',

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 8,
  },

  playIcon: {
    color: '#FFFFFF',
    fontSize: 35,
    marginLeft: 4,
  },

  acoes: {
    flexDirection: 'row',
    gap: 15,
  },

  botaoAcao: {
    backgroundColor: '#1E1E1E',

    paddingVertical: 12,
    paddingHorizontal: 18,

    borderRadius: 15,

    borderWidth: 1,
    borderColor: '#4EA8DE',
  },

  textoAcao: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

});