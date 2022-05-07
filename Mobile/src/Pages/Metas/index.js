import React, { useState, useEffect } from 'react'
import { 
  StyleSheet, 
  SafeAreaView, 
  View, 
  Text,
  FlatList,
  TouchableOpacity 
} from 'react-native'

import Constants  from 'expo-constants';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

export default function Metas() {
  
  const [infoMetas, setInfoMetas] = useState([{}])
   
  async function getMetas() {
    const { data } = await api.get('/metas/1');

    setInfoMetas(data);
  }
  
  useEffect(() => {
    getMetas();

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} > 
        <Text style={styles.headerText}>Metas</Text>
      </View>
      <FlatList
        data={infoMetas}
        style={styles.metasList}
        showsVerticalScrollIndicator={false}
        keyExtractor={itemsMetas => itemsMetas.id}
        renderItem={({item}) => (
          <View style={styles.meta} >
            <Text style={styles.metaPropety}>Meta: </Text>
            <Text style={styles.metaValue}>{item.nome}</Text>

            <Text style={styles.metaPropety}>Descrição: </Text>
            <Text style={styles.metaValue} >{item.descricao}</Text>
            
            <Text style={styles.metaPropety}>Status: </Text>
            <Text style={styles.metaValue} >{item.status}</Text>

            <Text style={styles.metaPropety}>Data: </Text>
            <Text style={styles.metaValue} >{item.prazo}</Text>

            <TouchableOpacity
              style={styles.detailsButton} 
              onPress={() => {}}
            >
              <Text style={styles.detailsButtonText}>Ver na Agenda</Text>
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
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    alignItems: 'center',
    
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e2020f'
  },

  metasList: {
    marginTop: 30,
    marginLeft: '0.5%',
    marginRight: '0.5%',
    maxHeight: '85.7%'
  },

  meta: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
  },

  metaPropety: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#41414d'
  },

  metaValue: {
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

  detailsButtonText:{
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  },
});