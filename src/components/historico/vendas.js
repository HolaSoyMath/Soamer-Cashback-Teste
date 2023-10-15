import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import iconVendaOK from '../../images/historico/aprovado.png'
import iconVendaNOK from '../../images/historico/reprovado.png'
import iconCarteira from '../../images/historico/carteira.png'
import imgDetalhe from '../../images/historico/detalhe.png'


export default function BlocoVendas({ponteira, veiculo, status}){

  function getIcon(status) {
    if (status == 1) {
      return iconVendaOK;
    } else {
      return iconVendaNOK;
    }
  }

  function getColor(status) {
    if (status == 1) {
      return '#2A59C2';
    } else {
      return '#C22A33';
    }
  }

  function getTexto(status) {
    if (status == 1) {
      return 'aprovada';
    } else {
      return 'reprovada';
    }
  }

  return(
    <View style={styleBody.containerVenda}>
      <ImageBackground source={imgDetalhe} style={styleStatusVenda.imgDetalhe} />
      <View style={styleStatusVenda.containerSobreporImagem}> 
        <Text style={styleStatusVenda.ponteira}>{ponteira}</Text>
        <Text style={styleStatusVenda.veiculo}>{veiculo}</Text>
        <View style={[styleStatusVenda.containerStatusVenda, {backgroundColor: getColor(status) }]}>
          <View style={styleStatusVenda.blocoStatus}>
            <Image source={getIcon(status)} style={styleStatusVenda.icon} />
            <Text style={styleStatusVenda.textoStatusVenda} >Venda {getTexto(status)}</Text>
          </View>
          <View style={styleStatusVenda.blocoValor}>
            <Image source={iconCarteira} style={styleStatusVenda.icon} />
            <Text style={styleStatusVenda.textoStatusVenda}>$ 10.00</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const corBackground = '#1e1e1e';

const styleStatusVenda = StyleSheet.create({
  containerSobreporImagem: {
    position: 'absolute',
    zIndex: 1,
  },
  containerStatusVenda: {
    flexDirection: 'row',
    width: 260,
    height: 30,
    borderRadius: 7,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 30,
    marginTop: 15,
  },
  ponteira: {
    marginTop: 20,
    fontSize: 20,
    color: '#fff',
    fontWeight:'bold',
    marginLeft: 30
  },
  veiculo: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 30
  },
  blocoStatus: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  blocoValor: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 110,
  },
  textoStatusVenda: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  icon:{
    height: 20,
    width: 20,
    marginRight: 5
  },
  imgDetalhe: {
    height: 100,
    width: 100,
    marginLeft: 213,
  }
})

const styleBody = StyleSheet.create({
  containerVenda: {
    height: 120,
    width: '100%',
    backgroundColor: corBackground,
    borderRadius: 10,
    paddingLeft: 20,
    marginBottom: 20
  },
})