import React from 'react'
import {View, Text, StyleSheet} from 'react-native'  

export default function Nome({texto}) {
   return(
    <View style={[stylesHeader.containerNome, stylesPrincipal.centralizar]}>
      <Text style={[stylesHeader.nome]}>{texto}</Text>
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
})
