import React from 'react';

import {
  StyleSheet,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import materias from './assets/materias.png';
import lembretes from './assets/lembretes.png';
import linksUteis from './assets/ligacao.png';
import metas from './assets/objetivo.png';

import ButtonCalendar from './components/ButtonCalendar';

import Agenda from './Pages/Agenda';
import Lembretes from './Pages/Lembretes';
import LinksUteis from './Pages/LinksUteis';
import Materias from './Pages/Materias';
import Metas from './Pages/Metas';

import AddLembrete from './Pages/AddLembrete';

//import { Agenda } from 'react-native-calendars';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ScreenAddLembrete() {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Add Lembrete"
        component={AddLembrete}
        options={{
          headerShown:false
        }}
      />

    </Stack.Navigator>
  );
}

function ScreensMainTab() {
  return (
    <Tab.Navigator
      initialRouteName='Agenda'
      screenOptions={{
        tabBarActiveTintColor: 'rgba(102,255,240,1)',
        tabBarInactiveTintColor: 'rgba(255,255,255,255)',

        tabBarStyle: {
          paddingTop: 2,
          paddingLeft: 5,
          paddingBottom: '3%',
          paddingRight: 5,
          borderColor: 'transparent',
          backgroundColor: '#121212',
          position: 'absolute',
          minHeight: 65
        },

        headerStyle: {
          height: 80
        },

        headerShown: false
      }}
    >
      <Tab.Screen
        name="Materias"
        component={Materias}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image style={styles.logo} source={materias} />
          )
        }}
      />

      <Tab.Screen
        name="Lembretes"
        component={Lembretes}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image style={styles.logo} source={lembretes} />
          )
        }}
      />

      <Tab.Screen
        name="Agenda"
        component={Agenda}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, size, color }) => (
            <ButtonCalendar />
          ),
          tabBarBadge: 0
        }}
      />

      <Tab.Screen
        name="Links"
        component={LinksUteis}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image style={styles.logo} source={linksUteis} />
          )
        }}
      />

      <Tab.Screen
        name="Metas"
        component={Metas}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image style={styles.logo} source={metas} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Screens Main"
        component={ScreensMainTab}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen 
        name="Screen Stack Add Lembrete"
        component={ScreenAddLembrete}
        options={{
          headerShown: false
        }}
      />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    height: 30
  }
});