import React, { useEffect, useState } from 'react'
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

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function LinksUteis({ navigation }) {

  const [infoLinks, setInfoLinks] = useState([{}]);

  function navigateToAddLink(){
    navigation.navigate('Screens Stack Add', {
      screen: 'Add Link',
    
    });
  };

  function navigateToEditLink(){
    navigation.navigate('Screens Stack Edit', {
      screen: 'Edit Link',
    
    });
  };

  async function getLinks() {
    const { data } = await api.get('/links/1');

    setInfoLinks(data);

    console.log(infoLinks);
  }

  useEffect(() => {
    getLinks();

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LINKS UTEIS</Text>
        <TouchableOpacity>
          <MaterialIcons onPress={navigateToAddLink} name="add-link" size={30} color="red" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={infoLinks}
        style={styles.linkList}
        showsVerticalScrollIndicator={false}
        keyExtractor={itemsLinks => itemsLinks.id}
        renderItem={({ item }) => (
          <View style={styles.link} >
            <View style={styles.headerLink}>
              <Text style={styles.linkTitle}>{item.titulo}</Text>
            </View>

            <Text style={styles.linkPropety}>Link: </Text>
            <Text style={styles.linkValue} >{item.link}</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToEditLink}
            >
              <Text style={styles.detailsButtonText}>Editar LINK</Text>
              <AntDesign name="edit" size={18} color="red" />
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
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '0.5%',
    marginRight: '0.5%',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e2020f',
  },

  linkList: {
    marginTop: 30,
    marginLeft: '0.5%',
    marginRight: '0.5%',
    maxHeight: '83.3%'
  },

  link: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
  },

  linkPropety: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#41414d'
  },

  linkTitle: {
    marginTop: 15,
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#41414d'
  },

  linkValue: {
    marginTop: 15,
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'rgba(6,37,203, 255)',
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerLink: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  },
});