import React from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'

import Constants  from 'expo-constants';

export default function Materias() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Materias</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  }
});