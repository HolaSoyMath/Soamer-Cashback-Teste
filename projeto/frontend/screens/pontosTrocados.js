import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import imgSuperior from '../src/images/login/detalheSuperior.png'
import imgInferior from '../src/images/login/detalheInferior.png'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import VendaOK from '../src/images/vendaRegistrada/verificar.png'


export default function PontosTrocados(props){

  let [fontsLoaded] = useFonts({
    'Poppins': require('../src/fonts/poppins/Poppins-Black.ttf'),
  }); 

  return(
    <View style={styles.principal}>
      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        backgroundColor = {corBackground}
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      <View>
        <Image source={imgSuperior} style={stylesHeader.imgSuperior}/>
      </View>
      <View style={[styles.mesmalinha, styles.containerVoltar]} >
        <TouchableOpacity style={[styles.btnVoltar, styles.mesmalinha]}
          onPress={() => props.navigation.navigate('Beneficios')}>
          <AntDesign name="arrowleft" size={25}  color={'#fff'}/>
          <Text style={{color:'white', fontSize:15}}> Voltar </Text> 
        </TouchableOpacity>
      </View >
      <View style={stylesBody.principal}>
        <View style={stylesBody.containerTitulo}> 
          <Image source={VendaOK} style={styles.imagem}/>
          <Text style={stylesBody.textoTitulo}>Pontos Trocados</Text>
          <Text style={stylesBody.textoSubTitulo}>Seus pontos foram trocados com sucesso. Aproveite seu beneficio!</Text>
        </View>
      </View>
      <Image source={imgInferior} style={stylesBody.imgInferior}/>
    </View>
  )
}
const corBackground = '#1e1e1e';

const stylesHeader = StyleSheet.create({
  imgSuperior: {
    flex: 1,
    marginLeft: '43%',
    height: 194,
    position: 'absolute'
  },
})

const stylesBody = StyleSheet.create({
  principal:{
    height: '90%', 
    width: '100%',
    justifyContent: 'center',
  },
  containerTitulo:{
    width: '100%',
    height: '18%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoTitulo: {
    fontWeight:'bold',
    fontSize: 40,
    textAlign: 'center',
    color: '#fff',
    paddingBottom: 15
  },
  textoSubTitulo: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17
  },
  imgInferior:{
    position:'absolute',
    marginTop: 514,
  }
})

const styles = StyleSheet.create({
  principal: {
    backgroundColor: corBackground,
    height:'100%',
    width:'100%',
    paddingLeft: '9%',
    paddingRight: '9%',
  },
  mesmalinha :{
    flexDirection: 'row'
  },
  btnVoltar: {
    alignItems: 'center'
  },
  containerVoltar: {
    width:'100%',
    marginTop: 35,
  },
  imagem:{
    width: 100,
    height: 100,
    marginBottom: 40,
  }
})