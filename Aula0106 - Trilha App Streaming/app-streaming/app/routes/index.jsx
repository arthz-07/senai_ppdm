import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';

import Login from '../pages/login';
import Cadastro from '../pages/cadastro';

import Home from '../pages/home';
import Favoritos from '../pages/favoritos';
import Tocando from '../pages/tocando';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function AbasInferiores() {

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({

        headerShown: true,

        headerStyle: {
          backgroundColor: '#121212',
        },

        headerTintColor: '#FFFFFF',

        headerTitleStyle: {
          fontWeight: 'bold',
        },

        tabBarStyle: {
          backgroundColor: '#1E1E1E',
          borderTopWidth: 0,
          height: 65,
        },

        tabBarActiveTintColor: '#D62828',

        tabBarInactiveTintColor: '#4EA8DE',

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 5,
        },

        tabBarIcon: ({ color, size, focused }) => {

          let nomeIcone;

          if (route.name === 'Home') {
            nomeIcone = focused
              ? 'home'
              : 'home-outline';
          }

          if (route.name === 'Favoritos') {
            nomeIcone = focused
              ? 'heart'
              : 'heart-outline';
          }

          if (route.name === 'Tocando') {
            nomeIcone = focused
              ? 'musical-notes'
              : 'musical-notes-outline';
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
        name="Home"
        component={Home}
        options={{
          title: 'Route 66',
        }}
      />

      <Tabs.Screen
        name="Favoritos"
        component={Favoritos}
      />

      <Tabs.Screen
        name="Tocando"
        component={Tocando}
      />

    </Tabs.Navigator>
  );
}

function MenuSuperior() {

  return (
    <Drawer.Navigator

      screenOptions={{

        headerStyle: {
          backgroundColor: '#121212',
        },

        headerTintColor: '#FFFFFF',

        headerTitleStyle: {
          fontWeight: 'bold',
        },

        drawerStyle: {
          backgroundColor: '#1A1A1A',
        },

        drawerActiveBackgroundColor: '#D62828',

        drawerActiveTintColor: '#FFFFFF',

        drawerInactiveTintColor: '#A0A0A0',

        drawerLabelStyle: {
          fontSize: 15,
        },

      }}
    >

      <Drawer.Screen
        name="Route 66 Music"
        component={AbasInferiores}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="car-sport"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="heart"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Tocando Agora"
        component={Tocando}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="musical-notes"
              size={size}
              color={color}
            />
          ),
        }}
      />

    </Drawer.Navigator>
  );
}

export default function Rotas() {

  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          title: 'Criar Conta',

          headerStyle: {
            backgroundColor: '#121212',
          },

          headerTintColor: '#FFFFFF',

          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name="Principal"
        component={MenuSuperior}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
}