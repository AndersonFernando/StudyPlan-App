import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native'

import api from '../../services/api'

import Constants from 'expo-constants';

export default function Lembretes() {

  const [infoLembrete, setInfoLembrete] = useState([{}]);

  async function getLembretes() {
    const { data } = await api.get('/lembretes/1')

    //const data = respose.data;

    setInfoLembrete(data);
    console.log(infoLembrete)

    console.log(infoLembrete[0]['nome'])
  }

  useEffect(() => {
    getLembretes();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container_button}>
        <TouchableOpacity onPress={getLembretes} style={styles.buttonLembretes} >
          <Text style={styles.buttonText}>Lembretes</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={infoLembrete}
        style={styles.container_infoLembretes}
        keyExtractor={itemsLembrete => itemsLembrete.id}
        renderItem={({item}) => (
          <View style={styles.view_text} >

            <Text style={styles.text}>Nome: {item.nome}</Text>

            <Text style={styles.text}>Descrição: {item.descricao}</Text>

            <Text style={styles.text}>Data: {item.data}</Text>

          </View>
        )}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  container_button: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  buttonLembretes: {
    backgroundColor: 'rgb(255, 0, 0)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: '80%',
    borderRadius: 2,
  },

  buttonText: {
    color: 'rgba(255,255,255, 2)',
    fontWeight: 'bold',
    fontSize: 15
  },

  container_infoLembretes: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10
  },

  view_text: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
  },

  text: {
    fontWeight: 'bold'
  },
});