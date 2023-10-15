import React from 'react'
import {Image, TextInput, StyleSheet, Pressable } from 'react-native'
import iconCalendarioWhite from '../../images/historico/calendario_white.png'
import iconCalendarioBlack from '../../images/historico/calendario_black.png'
import iconSetaWhite from '../../images/historico/seta_baixo_white.png'
import iconSetaBlack from '../../images/historico/seta_baixo_black.png'


export default function CalendarioHistorico({option}){

  function getIcon(option) {
    if (option == 1) {
      return iconCalendarioWhite;
    } else {
      return iconCalendarioBlack;
    }
  }

  function getSeta(option) {
    if (option == 1) {
      return iconSetaWhite;
    } else {
      return iconSetaBlack;
    }
  }

  return(
    <Pressable style={calendario.containerCalendario}>
      {/* style={[option == 1 ? [stylesMenuBar.selecionado, stylesMenuBar.espacoIcones] : stylesMenuBar.espacoIcones]} */}
      <Image source={getIcon(option)} style={calendario.icone} />
      <TextInput style={calendario.input} placeholder={'11/09/2023'} placeholderTextColor={option == 1 ? "#FFF" : "#000"}/>
      <Image source={getSeta(option)} style={calendario.icone}/>
    </Pressable>
  )
}

const calendario = StyleSheet.create({
  containerCalendario: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  icone: {
    height: 20,
    width: 20,
  },
  input: {
    color: '#fff',
    justifyContent: 'center',
  }
})