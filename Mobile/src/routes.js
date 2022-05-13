import React from 'react';

import {
  StyleSheet,
  Image
} from 'react-native';

// Importação da biblioteca de navegação entre telas
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import materias from './assets/materias.png';
import lembretes from './assets/lembretes.png';
import linksUteis from './assets/ligacao.png';
import metas from './assets/objetivo.png';

import ButtonCalendar from './components/ButtonCalendar';

// Importação das Telas Principais da Aplicação
import Agenda from './pages/Agenda';
import Lembretes from './pages/Lembretes';
import LinksUteis from './pages/LinksUteis';
import Materias from './pages/Materias';
import Metas from './pages/Metas';

// Importação das Telas para Adicionar novos dados
import AddLembrete from './pages/AddLembrete';
import AddMateria from './pages/AddMateria';
import AddLink from './pages/AddLink';
import AddMeta from './pages/AddMeta';

// Importação das Telas para editar dados
import EditLink from './pages/EditLink'; 


//import { Agenda } from 'react-native-calendars';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


// Componete de navegação para as telas de Adicionar dados
function ScreensAdd() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Add Lembrete"
        component={AddLembrete}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Add Materia"
        component={AddMateria}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Add Link"
        component={AddLink}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Add Meta"
        component={AddMeta}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

// Componente de navegação para as Telas de Editar dados
function ScreensEdit() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Edit Link"
        component={EditLink}
        options={{
          headerShown: false
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
        name="Screens Stack Add"
        component={ScreensAdd}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen 
        name="Screens Stack Edit"
        component={ScreensEdit}
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