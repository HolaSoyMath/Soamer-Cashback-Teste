import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Style} from 'react-native';
import Titulo from '../src/components/text/tituloBeneficio';
import Texto from '../src/components/text/infoBeneficio';
import InputText from '../src/components/input/inputBeneficio';
import ButtonTrocar from '../src/components/button/buttonTrocarPontos';
import ButtonFechar from '../src/components/button/buttonFechar';

export default function BeneficioInfo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require("../assets/casasBahia.png")} resizeMode="contain"/>
      </View>
      <View style={styles.main}>
        <View style={styles.text}>
            <Titulo title= "Cartão presente"/>
            <Texto title= "Casas Bahia"/> 
            <Titulo title= "Sobre"/>
            <Texto title= "Com o Cartão Presente Casas Bahia você compra tudo que precisa com segurança e com descontos exclusivos de até 25%! São diversas opções de eletrônicos, celulares e tablets, utilidades domésticas e muito mais."/>
            <Text style={{fontSize: 14, lineHeight: 20, fontWeight: '600', textAlign: 'justify', marginBottom: 30,}}>Basta digitar a quantidade de pontos que deseja trocar e seu cartão estará pronto para ser usado.</Text>
            <InputText
              placeholder="Digite seus pontos"
              imageSource={require('../assets/iconPontos.png')}
            />
            <View style={styles.buttons}>
              <ButtonTrocar title= "Trocar pontos" trocar={() => props.navigation.navigate('PontosTrocados')}/>
              <ButtonFechar title={'Fechar'} destino={() => props.navigation.navigate('Beneficios')}/>
            </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    
  },

  header: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    width: 140,
  },

  main:{
    backgroundColor: '#f6f6f6',
    borderTopLeftRadius: 57,
    height: '70%'
  },
  
  text:{
    marginTop: 60,
    marginStart: 40,
    marginEnd: 40,
  },

  buttons:{
    flexDirection: 'row',
    gap: 9,
    minWidth: '100%'
  },

  button: {
    height: 45,
    width: 110,
    borderRadius: 7,
    backgroundColor: '#E1E1E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    color: '#8E8E8E',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  }

});
