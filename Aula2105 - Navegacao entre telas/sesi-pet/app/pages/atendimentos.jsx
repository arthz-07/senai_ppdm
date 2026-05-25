import React from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

import { atendimentos } from '../dados/atendimentos';

export default function AtendimentosScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Atendimentos
      </Text>

      <FlatList
        data={atendimentos}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text style={styles.nome}>
              {item.pet}
            </Text>

            <Text style={styles.info}>
              Serviço: {item.servico}
            </Text>

            <Text style={styles.info}>
              Horário: {item.horario}
            </Text>

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    padding: 15,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#1e1e1e',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,

    borderLeftWidth: 5,
    borderLeftColor: '#ff3b3b',
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },

  info: {
    fontSize: 15,
    color: '#d9d9d9',
    marginBottom: 3,
  },
});