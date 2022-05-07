import React from 'react';

import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image
} from 'react-native'


export default function SignIn() {
  return (
    <SafeAreaView>
      <View style={styles.container} >
        <Text>StudyPLAN Calendar</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})