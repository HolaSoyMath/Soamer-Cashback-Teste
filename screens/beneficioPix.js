
import React from 'react'
import {Pressable, 
  View, 
  Text,
  StyleSheet,
  TextInput, 
  onPress,
  TouchableOpacity} from 'react-native'  
  import { AntDesign } from '@expo/vector-icons';


export default function BeneficioPix(props) {
   return(
    <View style={styles.container}>
      
      <View style={styles.topbox}> 
        
        <View style={styles.mesmalinha} >
            <TouchableOpacity style={[styles.btnVoltar, styles.mesmalinha]}
                onPress={() => props.navigation.navigate('Beneficios')}>
                <AntDesign name="arrowleft" size={25}  style={styles.arrow}/>
                <Text style={{color:'white', fontSize:15}}> Voltar </Text> 
            </TouchableOpacity>
        </View >
        <Text style={styles.titulo}>Trocar Pontos </Text>
        <Text style={styles.subtitulo}>Digite o valor que deseja resgatar </Text>
        <View style={styles.inputpix}>
          <Text style={styles.sifra}>$</Text>
          <TextInput style={styles.valor} placeholder='100' placeholderTextColor='rgba(242, 242, 242, 0.29)' keyboardType='numeric' />
        </View>
        
        <View>
          <TouchableOpacity style={styles.btnfinalizar}
            onPress={this._onPressButton}>
              <Text style={{color:'white', fontSize: 20, fontWeight: 'bold'}}> Finalizar </Text>
            </TouchableOpacity>
        </View>    

    </View>
      
  </View>
   
  )
}

const styles = StyleSheet.create({

  container:{
  
     flex:1 ,
    flexDirection:'column',
    backgroundColor:"#1E1E1E",
    padding:10
  },
  topbox:{
    flex:2,
    backgroundColor:"#1E1E1E",
  },
  arrow:{
    marginLeft:20,
    color:'white'
  },
  btnVoltar:{
   color:"white",
    marginTop:35,
    marginLeft:15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo:{
    color:"#F2F2F2",
    fontSize: 25,
    marginTop:50,
    marginLeft:20,
    textAlign:'center',
    paddingBottom:10
  },
  subtitulo:{
    color:"rgba(242, 242, 242, 0.74)",
    fontSize: 18,
    textAlign:'center',
    marginBottom: 50,
    marginLeft:10
  },
  sifra:{
    // $ 
    fontSize:70,
    color:"rgba(242, 242, 242, 0.29)",
    marginRight:10,
    paddingVertical:10,
     
  },
  //inputvalor
  valor:{
    
    flexDirection: 'row',
    color:"#F2F2F2",
    marginBottom:7,
    fontSize:70,
    marginTop:10,
  },
  //botao para finalizar
  btnfinalizar:{
    marginLeft:100,
    width: 200,
    height: 60,
    padding:10,
    marginTop:70,
    fontSize:30,
    alignItems:'center',
    justifyContent: 'center',
    color:'white',
    borderColor:"#2A59C2",
    borderWidth:5,
    borderCurve:'continuous',
    borderRadius:15,
    backgroundColor:"#2A59C2",
  },
  
  inputpix:{
    flexDirection:'row',
    alignContent:'space-between',
    // justifyContent: 'center',
    borderColor:'rgba(242, 242, 242, 0.4)',
    borderBottomWidth:2,
    paddingBottom:30,
    margin:20,
  },
  mesmalinha:{
  flexDirection:'row',
  }
  });