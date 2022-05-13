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


export default function EditLink() {
  return(
    <SafeAreaView style={styles.container}>
      <Text>EDIT Link</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
    paddingTop: Constants.statusBarHeight + 20

  },
});