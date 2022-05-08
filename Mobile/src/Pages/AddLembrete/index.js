import React from 'react';

import { 
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image

 } from 'react-native';

import Constants from 'expo-constants';

export default function AddLembrete(){
  return(
    <SafeAreaView style={styles.container}>
      <Text>Cadastrar Lembrete</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20
  },
});