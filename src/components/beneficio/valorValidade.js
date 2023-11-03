import React from 'react'
import {View, Text, StyleSheet} from 'react-native'  

export default function valorValidade({valor, validade}) {
   return(
    <View style={[stylesHeader.containerValidade, stylesPrincipal.centralizar]}>
      <View style={[stylesHeader.containerTexto, stylesPrincipal.centralizar]}>
        <Text style={[stylesHeader.valor]}>$ {valor}</Text>
        <Text style={[stylesHeader.validade]}>Validade: {validade}</Text>
      </View>
    </View>
  )
}

const stylesPrincipal = StyleSheet.create({
  centralizar: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const stylesHeader = StyleSheet.create({
  containerNome: {
    width: '100%',
    height: '20%',
    paddingTop: 15,
  },
  nome: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20
  },
  containerValidade: {
    width: '100%',
    height: '38%',
    backgroundColor: '#1e1e1e',
    borderRadius: 10
  },
  valor:{
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  validade:{
    color: '#fff',
    fontSize: 17
  },
})