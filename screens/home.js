import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Button } from 'react-native';
import ButtonVenda from '../src/components/button/buttonAddVenda';
import ButtonCard from '../src/components/button/buttonSaibaMais';
import { Divider } from 'react-native-paper'; 
import MenuBar from '../src/components/menu-bar';

export default function PagInicial(props){
  return(
    <View style={styles.principal}>
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.header}>
              <View style={styles.perfil}>
                <Image style={styles.img} source={require("../src/images/home/foto-perfil.png")}/>
                <Text style={styles.nome}>Matheus Guimarães</Text>
              </View>
              <View style={styles.pontos}>
                <Text style={styles.labelPonto}>Seus pontos</Text>
                <Text style={styles.points}>$ 100.00</Text>
              </View>
              <View>
                <ButtonVenda />
              </View>
        </View>
        <View style={styles.main}>
              <View style={styles.labelHistorico}>
                <Text style={styles.textHist}>Histórico</Text>
                <Text style={styles.textVerMais}>Ver mais</Text>
              </View>
              <View style={styles.historico}>
                <View style={styles.imgHistorico}>
                <Image style={styles.img2} source={require("../src/images/home/imgHistorico.png")}/>
                </View>
                <View style={styles.infHist}>
                  <Text style={styles.ponteiraText}>Dupla polida</Text>
                  <Text style={styles.modeloCarro}>Toyota Corolla Cross</Text>
                </View>
                <Text style={styles.pontosHist}>$ 10</Text>
              </View>
              <Divider style={{marginTop: 10, height: 0.6}}></Divider>
              <View style={styles.labelCampanha}>
                <Text style={styles.textHist}>Campanhas</Text>
                <Text style={styles.textVerMais}>Ver mais</Text>
              </View>
              <View style={styles.saibaMais}>
                <View style={styles.card}>
                  <View style={styles.imgCard}>
                  <Image  style={styles.img3} source={require("../src/images/home/ponteira.png")}/>
                  </View>
                  <View style={styles.infCard}>
                  <Text style={styles.textCard}>Ganhe +2 pontos</Text>
                  <Text style={styles.textCard2}>Na venda de uma ponteira bocal único pólida.</Text>
                  </View>
                  <ButtonCard></ButtonCard>
                </View>
              </View>
        </View>
      </View> 
    </ScrollView>
      <MenuBar option={1} props={props} />
    </View>
  )
}

const styles = StyleSheet.create({
    saibaMais: {
      flexDirection: 'row'
    },

    principal: {
      width: '100%',
      height: '100%',
    },

    container:{
    flex: 1,
    backgroundColor: '#f6f6f6'
    },

    header:{
      padding: 40,
      paddingTop: 60,
      backgroundColor: '#1e1e1e',
      height: 320,
      width: "100%",
    },

    perfil:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 15,
    },

    img:{
      backgroundColor: '#2A59C2',
      borderRadius: 100,
      width: 40,
      height: 40
    },

    nome:{
      color: '#f6f6f6',
      fontSize: 16,
      fontWeight: '400',
    },

    pontos:{
      paddingTop: 30,
      flexDirection: 'collumn',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      gap: 7,
    },


    labelPonto:{
      color: '#f6f6f6',
      fontSize: 14,
    },

    points:{
      color: '#f6f6f6',
      fontSize: 30,
      fontWeight: '500',
    },
    
    main:{
      flex: 1,
      padding: 40,
      paddingTop: 40,
    },

    labelHistorico:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 187,
      paddingBottom: 25,
    },

    textHist:{
      color: '#1e1e1e',
      fontSize: 19,
      fontWeight: '600',
    },

    textVerMais:{
      color: '#696969',
      fontSize: 14,
      fontWeight: '500'
    },
    
    historico:{
      flexDirection: 'row', 
      alignItems: 'center',

    },

    infHist:{
      paddingStart: 15,
    },

    ponteiraText:{
      fontSize: 16,
      fontWeight: '600'
    },

    modeloCarro:{
      color: '#696969'
    },

    pontosHist:{
      paddingStart: 100,
      fontWeight: '600'
    },

    imgHistorico:{
      backgroundColor: '#1e1e1e',
      width: 45,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      
    },

    labelCampanha:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 166,
      paddingTop: 80,
      paddingBottom: 25,
    },

    card:{
      height: 245,
      width: 200,
      backgroundColor: '#1e1e1e',
      borderRadius: 15,
    },
    textCard:{
      color: '#f6f6f6',
      paddingBottom: 10,
      fontWeight: '600',
    },

    textCard2:{
      color: '#F2F2F2'
    },

    imgCard:{
      backgroundColor: '#DEDEDE',
      width: 200,
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },

    infCard:{
      flexDirection: 'column',
      paddingTop: 20,
      paddingStart: 15,
      paddingEnd: 15,
      textAlign:'right'
    },

    })
