import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import CalendarioHistorico from '../src/components/historico/calendario_filtro.js'
import iconFiltro from '../src/images/historico/filtro.png'
import iconVoltar from '../src/images/comum/voltar.png'
import BlocoVendas from '../src/components/historico/vendas.js'
import MenuBar from '../src/components/menu-bar/index'



export default function Historico(props){
  return(
    <View style={styleHeader.principal}>
      <View style={styleHeader.containerHeader}>
        <View style={[styleHeader.centralizar, styleHeader.containerTitulo]}>
          <Text style={styleHeader.textoTitulo}>Histórico</Text>
          <Text style={styleHeader.textoSubTitulo}>Selecione o período que deseja visualizar</Text>
        </View>
        <View style={[styleHeader.centralizar, styleHeader.containerCalendario]}>
          <View style={[styleHeader.calendario, styleHeader.calendarioInicio]}>
            <CalendarioHistorico option={1}></CalendarioHistorico>
          </View>
          <View style={[styleHeader.calendario, styleHeader.calendarioFinal]}>
            <CalendarioHistorico option={0}></CalendarioHistorico>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styleBody.principal}>
            <View style={styleBody.containerFiltro}>
              <Text style={styleBody.textoVenda}>Suas vendas</Text>
              <Pressable style={styleBody.btnFiltro}>
                <Image source={iconFiltro} style={styleBody.imgFiltro}/>
                <Text style={styleBody.textoFiltro}>Filtrar</Text>
              </Pressable>
            </View>
            <BlocoVendas ponteira={'Ponteira de bocal duplo Polida'} veiculo={'TOYOTA COROLLA CROSS'} status={1}/>
            <BlocoVendas ponteira={'Ponteira de bocal único Polida'} veiculo={'CHEVROLET TRACKER 1.2'} status={0}/>
            <BlocoVendas ponteira={'Ponteira de bocal duplo Polida'} veiculo={'NISSAN FRONTIER'} status={1}/>
            <BlocoVendas ponteira={'Ponteira de bocal único Black Piano'} veiculo={'TOYOTA YARIS SEDAN'} status={1}/>
        </View>
      </ScrollView>
        <MenuBar option = {3} props={props}></MenuBar>
    </View>
  )
}
const corBackground = '#1e1e1e';

const stylesMenuBar = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
  },
});

const styleBody = StyleSheet.create({
  principal: {
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%',
    height: '100%',
  },
  containerFiltro: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  textoVenda: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnFiltro:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '72%',
    justifyContent: 'flex-end',
  },
  imgFiltro: {
    width: 15,
    height: 15,
    marginRight: 10
  },
  textoFiltro:{
    fontSize: 15
  },
  containerVenda: {
    height: 120,
    width: '100%',
    backgroundColor: corBackground,
    borderRadius: 10,
    paddingLeft: 20,
  },
})

const styleHeader = StyleSheet.create({
    // Tpo da página
    principal: {
      height: '100%',
      width: '100%',
      backgroundColor: '#f2f2f2',
    },
    centralizar: {
      alignItems: 'center', 
      justifyContent: 'center', 
    },
    containerHeader: {
      backgroundColor: corBackground,
      height: '25%',
      width: '100%',
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 10,
      alignItems: 'center',
    },
    containerTitulo: {
      width: '100%', 
      height: '50%', 
    },
    containerCalendario: {
      flexDirection: 'row',
      width: '90%', 
      height: '46%',
    },
    textoTitulo: {
      color: '#fff',
      justifyContent: 'center',
      fontSize: 25,
      fontWeight: 'bold',
    },
    textoSubTitulo: {
      color: '#fff',
      fontSize: 15,
      marginTop: 10,
    },
    calendario:{
      width: '50%',
      height: 50,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: 15,
      paddingRight: 15,
    },
    calendarioInicio: {
      backgroundColor: '#2A59C2',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    calendarioFinal: {
      backgroundColor: '#fff',
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    }
})