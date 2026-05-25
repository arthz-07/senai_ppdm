import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';


// IMPORT DAS TELAS
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import Atendimentos from '../pages/atendimentos';
import Profissionais from '../pages/profissionais';


// NAVEGADORES
const Stack = createStackNavigator();

const Tabs = createBottomTabNavigator();

const Drawer = createDrawerNavigator();


// TABS INFERIORES
function AbasInferiores() {

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({

        headerShown: true,

        tabBarActiveTintColor: '#ff3b3b',

        tabBarInactiveTintColor: '#999',

        tabBarStyle: {
          backgroundColor: '#101010',
        },

        headerStyle: {
          backgroundColor: '#101010',
        },

        headerTintColor: '#fff',

        tabBarIcon: ({ color, size, focused }) => {

          let nomeIcone = 'ellipse-outline';

          if (route.name === 'Atendimentos') {
            nomeIcone = focused
              ? 'calendar'
              : 'calendar-outline';
          }

          if (route.name === 'Profissionais') {
            nomeIcone = focused
              ? 'people'
              : 'people-outline';
          }

          return (
            <Ionicons
              name={nomeIcone}
              size={size}
              color={color}
            />
          );
        },
      })}
    >

      <Tabs.Screen
        name='Atendimentos'
        component={Atendimentos}
      />

      <Tabs.Screen
        name='Profissionais'
        component={Profissionais}
      />

    </Tabs.Navigator>
  );
}


// MENU LATERAL
function MenuSuperior() {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#101010',
        },

        headerTintColor: '#fff',

        drawerStyle: {
          backgroundColor: '#101010',
        },

        drawerActiveTintColor: '#ff3b3b',

        drawerInactiveTintColor: '#fff',
      }}
    >

      <Drawer.Screen
        name='Início'
        component={AbasInferiores}
      />

      <Drawer.Screen
        name='Atendimentos'
        component={Atendimentos}
      />

      <Drawer.Screen
        name='Profissionais'
        component={Profissionais}
      />

    </Drawer.Navigator>
  );
}


// STACK PRINCIPAL
export default function Rotas() {

  return (
    <Stack.Navigator>

      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Cadastro'
        component={Cadastro}
        options={{
          title: 'Cadastro de usuário',
        }}
      />

      <Stack.Screen
        name='Principal'
        component={MenuSuperior}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}