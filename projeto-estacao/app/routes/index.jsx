import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';


// IMPORT DAS TELAS
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import Dashboard from '../pages/dashboard';
import Registro from '../pages/registro';
import Relatorio from '../pages/relatorio';




// NAVEGADORES
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();



// MENU LATERAL
function MenuSuperior() {
    return (
        <Draw.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                drawerActiveTintColor: '#FF914D',
                drawerInactiveTintColor: '#777',
                drawerIcon: ({ color, size, focused }) => {
                    let nomeIcone = 'menu-outline';

                    if (route.name === 'Início') {
                        nomeIcone = focused ? 'book' : 'book-outline';
                    }

                    if (route.name === 'Cadastro') {
                        nomeIcone = focused ? 'person-add' : 'persono-add-outline'
                    }
                    if (route.name === 'Relatorio') {
                        nomeIcone = focused ? 'people' : 'people-outline'
                    }
                    return <Ionicons name={nomeIcone} size={size} color={color} />
                }
            })}
        > 
            <Draw.Screen name='Estação Meteorológica' component={Dashboard} options={{headerTitleAlign: 'center'}} />
            <Draw.Screen name='Cadastro' component={Cadastro} />
            <Draw.Screen name='Relatório' component={Relatorio} />
        </Draw.Navigator>
    )
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
        name='Início'
        component={MenuSuperior}
        options={{
          title: 'Cadastro de usuário',
        }}
      />

      <Stack.Screen
        name='Registro'
        component={Registro}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}