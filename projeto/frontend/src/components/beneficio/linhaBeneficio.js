import React from 'react'
import {View, StyleSheet} from 'react-native'


export default function LinhaBeneficio(props) {
   return(
    <View style={[stylesBody.linhaBeneficio]} />
  )
}

const stylesBody = StyleSheet.create({
  linhaBeneficio: {
    flexDirection: 'row'
  }
})