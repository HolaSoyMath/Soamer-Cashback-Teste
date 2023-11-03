import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, ScrollView, Image} from 'react-native'  
import MenuBar from '../src/components/menu-bar/index'
import Nome from '../src/components/beneficio/nome'
import ValorValidade from '../src/components/beneficio/valorValidade'
import Card from '../src/components/beneficio/card'
import iconLupa from '../src/images/beneficio/lupa.png'
import iconPix from '../src/images/beneficio/pix.png'
import cpnCB from '../src/images/beneficio/cupomCasasBahia.png'
import cpnUber from '../src/images/beneficio/cupomUber.png'
import cpnRappi from '../src/images/beneficio/cupomRappi.png'
import cpnRenner from '../src/images/beneficio/cupomRenner.png'
import cpnAmericanas from '../src/images/beneficio/cupomAmericanas.png'
import cpnHavan from '../src/images/beneficio/cupomHavan.png'


export default function Beneficios(props) {

  return(
    <View style={stylesPrincipal.principal}>
      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />

      <View style={[stylesHeader.header]}>
        <Nome texto='Matheus Guimarães' />

        <ValorValidade valor='100.00' validade='3m 2d' />

        <View style={[stylesHeader.containerFiltros]}>
          <View style={[stylesHeader.filtro]}>
            <Image source={iconLupa} style={[stylesHeader.icone]} />
            <TextInput style={[stylesHeader.input]} placeholder='Buscar por tipo' placeholderTextColor={'#979797'}></TextInput>
          </View>
          <View style={[stylesHeader.btnFiltro]}>
            <TouchableOpacity style={[stylesHeader.btnPix, stylesPrincipal.centralizar]}
            onPress={() => props.navigation.navigate('beneficioPix')}>
              <Image source={iconPix} style={[stylesHeader.iconePix]}/>
            </TouchableOpacity>
            <TouchableOpacity style={[stylesHeader.btn, stylesPrincipal.centralizar]}>
              <Text style={stylesBody.textoBtn}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[stylesHeader.btn, stylesPrincipal.centralizar]}>
              <Text style={stylesBody.textoBtn}>Popular</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={stylesBody.body}>
        <View style={[stylesBody.linhaBeneficio]}>
          <Card cupom={cpnCB} texto='Cartão presente' pontos='100'></Card>
          <Card cupom={cpnUber} texto='Gift Card' pontos='100'></Card>
        </View>
        <View style={[stylesBody.linhaBeneficio]}>
          <Card cupom={cpnRappi} texto='Cartão presente' pontos='150'></Card>
          <Card cupom={cpnRenner} texto='Cartão presente' pontos='100'></Card>
        </View>
        <View style={[stylesBody.linhaBeneficio]}>
          <Card cupom={cpnAmericanas} texto='Cartão presente' pontos='25'></Card>
        </View>
      </ScrollView>
      <View style={stylesFooter.footer}>
        <MenuBar option={2} props={props}/>
      </View>
    </View>
  )
}

const stylesBody = StyleSheet.create({
  body: {
    width: '100%',
    height: '51%',
  },
  linhaBeneficio: {
    flexDirection: 'row',
  },
  textoBtn: {
    color:'#989898',
  }
})

const stylesPrincipal = StyleSheet.create({
  principal: {
    width: '100%',
    height: '100%',
    paddingLeft: 30,
    paddingRight: 30
  },
  centralizar: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const stylesHeader = StyleSheet.create({
  header: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
  },
  containerFiltros: {
    width: '100%',
    height: '42%',
    paddingTop: 5
  },
  filtro: {
    width: '100%',
    height: 40,
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: '4%',
    paddingRight: '4%',
    alignItems: 'center',
    marginTop: 15,
  },
  icone: {
    width: '6%',
    height: '50%',
    marginRight: '3%',
  },
  input: {
    height: '100%',
    width: '90%',
  },
  btnFiltro: {
    width: '100%',
    height: '50%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnPix: {
    height: 40,
    width: '40%',
    // backgroundColor: '#37B5AA',
    borderRadius: 10,
    borderColor: '#E7E7E7',
    borderWidth: 1,
    marginRight: 10,
    backgroundColor: '#ececec'
  },
  iconePix: {
    width: 84,
    height: 30
  },
  btn: {
    height: 40,
    width: '27%',
    borderRadius: 10,
    borderColor: '#E7E7E7',
    borderWidth: 1,
    marginRight: 10,
    backgroundColor: '#ececec'
  },
})

const stylesFooter = StyleSheet.create({
  footer: {
    width: '100%',
    height: '9%',
  },
})