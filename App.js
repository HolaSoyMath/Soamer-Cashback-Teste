import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Perfil from './screens/perfil';
import Historico from './screens/historico';
import Login from './screens/login'
import AlterarSenha from './screens/alterarSenha'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
      }} />
      <Stack.Screen 
        name="AlterarSenha" 
        component={AlterarSenha}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
      }} />
      <Stack.Screen 
        name="Historico" 
        component={Historico}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
      }} />
      <Stack.Screen 
        name="Perfil" 
        component={Perfil}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
      }} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  // Tpo da página
  containerHeader: {
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 200,
  },
})