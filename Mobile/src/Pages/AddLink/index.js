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


export default function AddLink({ navigation }) {

  const [titulo, setTitulo] = useState('');
  const [link, setLink] = useState('');

  function returnToLinksUteis() {
    navigation.navigate('Screens Main'), {
      Screen: 'Links',

    };

    setTitulo('');
    setLink('');
  };


  function addLink() {
    let dataRequest = [
      {
        'titulo': titulo,
        'link': link,
        'usuario_id': 1
      }];

    api.post('/links/adicionar/', dataRequest).then((res) => {
      console.info('Link Cadastrao com Sucesso.');
      returnToLinksUteis();
    }).catch((err) => {
      console.error('Não foi possível adicionar esse Link, confira os campo e tente novamente.');
      console.log(err);
    });
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.textHeader}>CADASTRAR UM LINK</Text>
      </View>

      <View style={styles.fieldsAddLink} >
        <Text style={styles.title}>Titulo do link</Text>
        <TextInput
          style={styles.input}
          placeholder='Informe um título para seu link...'
          placeholderTextColor="rgb(0,0,0)"
          autoCapitalize='none'
          autoCorrect={false}
          value={titulo}
          onChangeText={(text) => setTitulo(text)}
        />

        <Text style={styles.title}>Endereço Link</Text>
        <TextInput
          style={styles.input}
          placeholder='Endereço do link'
          placeholderTextColor="rgb(0,0,0)"
          autoCapitalize='none'
          autoCorrect={false}
          value={link}
          onChangeText={(text) => setLink(text)}
        />

        <TouchableOpacity style={styles.buttonAddLink} onPress={addLink}>
          <Text style={styles.buttonAddText}>Adicionar LINK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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

  fieldsAddLink: {
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

  buttonAddLink: {
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