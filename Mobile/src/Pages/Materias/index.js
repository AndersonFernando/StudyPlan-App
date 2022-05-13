import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

import Constants from 'expo-constants';
import api from '../../services/api';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Materias({ navigation }) {

  const [infoMaterias, setInforMaterias] = useState([{}]);
  const [reloadPage, setReoladPage] = useState(false);

  async function getMaterias() {
    const { data } = await api.get('/materias/1');

    setInforMaterias(data);
   
  };

  useEffect(() => {
    getMaterias();

  }, []);

  function navigateToAddMateria() {
    navigation.navigate('Screens Stack Add', {
      screen: 'Add Materia',
      
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} >
        <TouchableOpacity onPress={getMaterias}>
          <Text style={styles.headerText}>MATÉRIAS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToAddMateria} style={styles.buttonHeader}>
          <Text style={styles.textButtonAddMateria}>+</Text>
          <MaterialCommunityIcons name="bookshelf" size={30} color="red" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={infoMaterias}
        style={styles.materiaList}
        showsVerticalScrollIndicator={false}
        keyExtractor={itemsMaterias => itemsMaterias.id}
        renderItem={({ item }) => (
          <View style={styles.materia} >
            <Text style={styles.materiaPropety}>Materia: </Text>
            <Text style={styles.materiaValue}>{item.materia}</Text>

            <Text style={styles.materiaPropety}>Area: </Text>
            <Text style={styles.materiaValue} >{item.area}</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => {}}
            >
              <Text style={styles.detailsButtonText}>Ver no Cronograma</Text>
              <Feather name="arrow-right" size={16} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '2.5%',
    marginRight: '2.5%',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e2020f'
  },

  buttonHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textButtonAddMateria: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 7,
    color: 'red'
  },

  materiaList: {
    marginTop: 30,
    marginLeft: '0.5%',
    marginRight: '0.5%',
    maxHeight: '83.8%'
  },

  materia: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
  },

  materiaPropety: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#41414d'
  },

  materiaValue: {
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