import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import calendario from '../assets/calendario.png';

export default function ButtonCalendar({ size }) {
  return(
    <View>
      <Image
        style={styles.logo}
        size={size}
        source={calendario}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },

  logo: {
    resizeMode: 'contain',
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  }
});
