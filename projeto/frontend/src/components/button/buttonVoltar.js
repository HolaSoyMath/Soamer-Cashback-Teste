import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import iconVoltar from '../../images/comum/voltar.png'
import Perfil from '../../../screens/perfil'
import { NavigationContainer } from '@react-navigation/native';

export default function ButtonVoltar({navigation, pagina}){
  
  function RetornoPerfil(){
    if (navigation && pagina === 'Perfil') {
      navigation.navigate('Perfil');
    }
  }
  
  return(
    <View>
      <TouchableOpacity style={styleVoltar.containerVoltar} onPress={() => RetornoPerfil()}>
        <Image source={iconVoltar} style={styleVoltar.iconVoltar}></Image>
        <Text style={styleVoltar.textVoltar}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}


const styleVoltar = StyleSheet.create({
  containerVoltar: {
    flexDirection: 'row',
    width: '100%',
    height: 20
  },
  iconVoltar: {
    height: 20,
    width: 20,
  },
  textVoltar: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 8,
  }
})