import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import imgSuperior from '../src/images/login/detalheSuperior.png'
import imgInferior from '../src/images/login/detalheInferior.png'
import imgLogo from '../src/images/login/logo.png'
import imgSenha from '../src/images/login/senha.png'
import InputLogin from '../src/components/input/inputLogin.js'
import ButtonEntrar from '../src/components/button/buttonEntrar.js'

export default function AlterarSenha(props){

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
          <Text style={stylesBody.textoTitulo}>Altere sua senha</Text>
          <Text style={stylesBody.textoSubTitulo}>Altere a senha fornecida para garantir a segurança da sua conta.</Text>
        </View>
        <View>
          <InputLogin 
          icone={imgSenha} 
          texto={'Senha'} 
          senha={true} 
          />
        </View>
        <View style={{marginTop: 30}}>
          <InputLogin 
            icone={imgSenha} 
            texto={'Confirme sua senha'} 
            senha={true}
          />
        </View>
        <View style={{marginTop: 50}}>
          <ButtonEntrar texto='Confirmar' props={props} nmTela='Home' />
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
  textoBotao:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
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