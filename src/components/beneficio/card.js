import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'  


export default function Card({cupom, texto, pontos}) {
   return(
    <View style={[stylesBody.containerBeneficio]}>
      <View style={[stylesBody.containerImg, stylesPrincipal.centralizar]}>
        <Image source={cupom} />
      </View>
      <Text style={[stylesBody.texto]}>{texto}</Text>
      <Text style={[stylesBody.texto]}>{pontos} pontos</Text>
    </View>
  )
}

const stylesBody = StyleSheet.create({
  containerBeneficio: {
    width: '47%',
    height: 190,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 10,
    marginRight: 20,
    marginTop: 20,
  },
  containerImg: {
    height: 100,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  texto: {
    color: '#fff',
    marginTop: 10,
  }
})

const stylesPrincipal = StyleSheet.create({
  centralizar: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})