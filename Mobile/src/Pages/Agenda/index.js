import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image
} from 'react-native'

import { Calendar, CalendarList } from 'react-native-calendars'

import Constants from 'expo-constants'

export default function Agenda() {

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.container_text} >
        <Text style={styles.title}>Agenda</Text>
      </View>
      <CalendarList
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        //onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={4}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={4}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20
  },

  container_text: {
    alignItems: 'center'
  },

  title: {
    paddingTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    paddingEnd: 5,
    color: '#111111'
  }
});