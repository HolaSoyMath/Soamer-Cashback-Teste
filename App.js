import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Perfil from './projeto/frontend/screens/perfil'
import Historico from './projeto/frontend/screens/historico'
import Login from './projeto/frontend/screens/login'
import AlterarSenha from './projeto/frontend/screens/alterarSenha'
import Home from './projeto/frontend/screens/home'
import ScannerScreen from './projeto/frontend/screens/scannerScreen'
import Beneficios from './projeto/frontend/screens/beneficios'
import BeneficioPix from './projeto/frontend/screens/beneficioPix'
import VendaRegistrada from './projeto/frontend/screens/vendaRegistrada'
import BeneficioInfo from './projeto/frontend/screens/beneficioInfo'
import PontosTrocados from './projeto/frontend/screens/pontosTrocados'


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
        name="Home" 
        component={Home}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
      }} />
      <Stack.Screen 
        name="Beneficios" 
        component={Beneficios}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
      }} /> 
      <Stack.Screen 
        name="BeneficioInfo" 
        component={BeneficioInfo}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
      }} /> 
      <Stack.Screen 
        name="PontosTrocados" 
        component={PontosTrocados}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
      }} /> 
      <Stack.Screen 
        name="beneficioPix" 
        component={BeneficioPix}
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
      <Stack.Screen 
        name="ScannerScreen" 
        component={ScannerScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
      }} />
      <Stack.Screen 
        name="VendaRegistrada" 
        component={VendaRegistrada}
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