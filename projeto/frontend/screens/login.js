import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import imgSuperior from '../src/images/login/detalheSuperior.png'
import imgInferior from '../src/images/login/detalheInferior.png'
import imgLogo from '../src/images/login/logo.png'
import imgPerfil from '../src/images/login/info-pessoal.png'
import imgSenha from '../src/images/login/senha.png'
import InputLogin from '../src/components/input/inputLogin.js'
import { useFonts } from 'expo-font';
import ButtonEntrar from '../src/components/button/buttonEntrar.js'

export default function Login(props){

  let cpf;
  let senha;

  let getLogin = ({cpf, senha}) => {
    fetch("https://soamer-api.onreader.com/login?cpf=111.111.111-11&password=123456");
    props.navigation.navigate("Home");
  }

  return(
    <View style={styles.principal}>
      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        backgroundColor = {corBackground}
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      <View style={stylesHeader.principal}>
        <Image source={imgSuperior} style={stylesHeader.imgSuperior}/>
        <Image source={imgLogo} style={stylesHeader.logo}/>
      </View>
      <View style={stylesBody.principal}>
        <View style={stylesBody.containerTitulo}> 
          <Text style={stylesBody.textoTitulo}>Bem Vindo !</Text>
          <Text style={stylesBody.textoSubTitulo}>Aqui cada venda vale cashback</Text>
        </View>
        <View>
          <InputLogin icone={imgPerfil} texto={'CPF'} teclado="numeric" value={cpf}/>
        </View>
        <View style={{marginTop: 30}}>
          <InputLogin icone={imgSenha} texto={'Senha'} senha={true} value={senha}/>
        </View>
        <View style={{marginTop: 50}}>
          <ButtonEntrar texto='Entrar' login={cpf} password={senha} />
        </View>
      </View>
      <Image source={imgInferior} style={stylesBody.imgInferior}/>
    </View>
  )
}
const corBackground = '#1e1e1e';

const stylesBody = StyleSheet.create({
  principal:{
    height: '100%', 
    width: '100%',
    width: '91%',
  },
  containerTitulo:{
    width: '100%',
    height: '18%',
  },
  textoTitulo: {
    fontWeight:'bold',
    fontSize: 25,
    color: '#fff'
  },
  textoSubTitulo: {
    color: '#fff'
  },
  containerEntrar:{
    width: '100%',
    height: 45,
    backgroundColor: '#2A59C2',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  imgInferior:{
    position:'absolute',
    marginTop: 514,
  }
})

const stylesHeader = StyleSheet.create({
  principal: {
    height:'25%',
    width:'100%',
  },
  imgSuperior: {
    flex: 1,
    marginLeft: '43%',
    height: 194,
    position: 'absolute'
  },
  logo:{
    marginTop: 70,
    height: 22,
    width: 100
  },
})

const styles = StyleSheet.create({
  principal: {
    backgroundColor: corBackground,
    height:'100%',
    width:'100%',
    paddingLeft: '9%',
  }
})