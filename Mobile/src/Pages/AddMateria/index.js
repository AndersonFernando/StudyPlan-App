import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet

} from 'react-native';

import Constants from 'expo-constants';

import api from '../../services/api';


export default function AddMateria({ navigation }) {
  const [nomeMateria, setNomeMateria] = useState('');
  const [areaMateria, setAreaMateria] = useState('');

  function getMaterias() {
    api.get('/materias/1').then((res) => {}).catch((err) => {console.log(err)});
  }

  function returnToMaterias() {
    navigation.navigate('Screens Main', {
      screen: 'Materias',

    });
  };

  function addMateria() {
    let dataRequest = [
      {
        'materia': nomeMateria,
        'area': areaMateria,
        'usuario_id': 1
      }];

    api.post('/materias/adicionar/', dataRequest).then((res) => {
      console.info('Materia Cadastrada com Sucesso.');
      returnToMaterias();
    }).catch((err) => {
      console.error('Não foi possível adicionar essa Matéria, confira os dados e tente novamente.')
      console.log(err);
    });
  }


  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.header} >
        <Text style={styles.textHeader}>CADASTRAR NOVA MATÉRIA</Text>
      </View>

      <View style={styles.fieldsAddMateria} >
        <Text style={styles.title}>Nome da Materia</Text>
        <TextInput
          style={styles.input}
          placeholder='Informe um nome para sua matéria'
          placeholderTextColor="rgb(0,0,0)"
          autoCapitalize='none'
          autoCorrect={false}
          value={nomeMateria}
          onChangeText={(text) => setNomeMateria(text)}
        />

        <Text style={styles.title}>Area</Text>
        <TextInput
          style={styles.input}
          placeholder='Adicione sua área'
          placeholderTextColor="rgb(0,0,0)"
          autoCapitalize='none'
          autoCorrect={false}
          value={areaMateria}
          onChangeText={(text) => setAreaMateria(text)}
        />

        <TouchableOpacity style={styles.buttonAddMateria} onPress={addMateria}>
          <Text style={styles.buttonAddText}>Adicionar Materia</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
    paddingTop: Constants.statusBarHeight + 20

  },

  header: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e02041',
    paddingBottom: 20
  },

  fieldsAddMateria: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingStart: '5%',
    paddingEnd: '5%',

  },

  title: {
    fontSize: 20,
    marginTop: 28,
    color: '#e02041',
    fontWeight: 'bold'
  },

  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 10,
    fontSize: 16

  },

  buttonAddMateria: {
    backgroundColor: '#e02041',
    width: '100%',
    height: '5.5%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center'

  },

  buttonAddText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 15
  }
});