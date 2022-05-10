import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity

} from 'react-native';

import Constants from 'expo-constants';

import api from '../../services/api';

export default function AddLembrete({ navigation }) {
  //const quantLembrete = route.param?.quantLembrete;

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [agenda_id, setAgenda_id] = useState('');
  const [usuario_id, setUsuario_id] = useState('');

  const dataAdd = [];

  function returnToLembretes() {
    navigation.navigate('Screens Main', {
      screen: 'Lembretes',
    });
  }

  function addLembrete() {
    let date = [
      {
        'nome': nome,
        'descricao': descricao,
        'data': data,
        'agenda_id': 1,
        'usuario_id': 1
      }];


    api.post('/lembretes/adicionar/', date).then((res) => {
      returnToLembretes();
      //console.log(res.data)
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.textHeader}>CADASTRAR NOVO LEMBRETE</Text>
      </View>

      <View style={styles.fieldsAddLembrete} >
        <Text style={styles.title}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder='Informe o titulo para seu lembrete...'
          placeholderTextColor="rgb(0,0,0)"
          autoCapitalize='none'
          autoCorrect={false}
          value={nome}
          onChangeText={(text) => setNome(text)}
        />

        <Text style={styles.title}>Descrição</Text>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma descrição'
          placeholderTextColor="rgb(0,0,0)"
          autoCapitalize='none'
          autoCorrect={false}
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
        />

        <Text style={styles.title}>Data</Text>
        <TextInput
          style={styles.input}
          placeholder='Informe a data do lembrete...'
          placeholderTextColor="rgb(0,0,0)"
          autoCapitalize='none'
          autoCorrect={false}
          value={data}
          onChangeText={(text) => setData(text)}
        />

        <TouchableOpacity style={styles.buttonAddLembrete} onPress={addLembrete}>
          <Text style={styles.buttonAddText} >Adicionar Lembrete</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 15
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

  fieldsAddLembrete: {
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

  buttonAddLembrete: {
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