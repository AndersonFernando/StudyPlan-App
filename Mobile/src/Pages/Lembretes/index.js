import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import api from '../../services/api'


export default function Lembretes({ navigation }) {

  const [infoLembrete, setInfoLembrete] = useState([{}]);

  async function getLembretes() {
    const { data } = await api.get('/lembretes/1');

    //const data = respose.data;

    setInfoLembrete(data);
    //console.log(infoLembrete);
  }

  useEffect(() => {
    getLembretes();

  }, []);

  function navigateToAgenda() {
    navigation.navigate('Screens Main', {
      screen: 'Agenda',

    });
  };

  function navigateToAddLembrete() {
    navigation.navigate('Screen Stack Add Lembrete', {
      screen: 'Add Lembrete',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LEMBRETES</Text>
        <TouchableOpacity onPress={navigateToAddLembrete}>
          <MaterialCommunityIcons name="bell-plus" size={30} color="red" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={infoLembrete}
        style={styles.lembretesList}
        showsVerticalScrollIndicator={false}
        keyExtractor={itemsLembrete => itemsLembrete.id}
        renderItem={({ item }) => (
          <View style={styles.lembrete} >
            <Text style={styles.lembretePropety}>Nome: </Text>
            <Text style={styles.lembreteValue}>{item.nome}</Text>

            <Text style={styles.lembretePropety}>Descrição: </Text>
            <Text style={styles.lembreteValue} >{item.descricao}</Text>

            <Text style={styles.lembretePropety}>Data: </Text>
            <Text style={styles.lembreteValue} >{item.data}</Text>


            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToAgenda}
            >
              <Text style={styles.detailsButtonText}>Ver na Agenda</Text>
              <Feather name="arrow-right" size={16} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
    paddingTop: Constants.statusBarHeight + 20

  },

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '5%',
    marginRight: '5%',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e2020f',
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

  lembretesList: {
    marginTop: 30,
    marginLeft: '5%',
    marginRight: '5%',
    maxHeight: '80.8%'
  },

  lembrete: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
  },

  lembretePropety: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#41414d'
  },

  lembreteValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 20,
    color: '#737380'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  },
});