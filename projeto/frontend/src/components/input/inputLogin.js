import React, {useState} from 'react'
import { StyleSheet, View, Image, TextInput, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function TesteLogin({icone, texto, teclado='default', senha=false}){

  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);

  return(
    <View style={stylesLogin.principal}>
      <Image source={icone} style={stylesLogin.icone}/>
      <TextInput 
      style={stylesLogin.input} 
      placeholder={texto} 
      placeholderTextColor={'#fff'} 
      keyboardType={teclado} 
      value={input} 
      onChangeText={(texto) => setInput(texto)} 
      secureTextEntry={senha ? hidePass : false}/>
      {senha == true && <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
        <Ionicons name='eye' color='#fff' size={25} marginRight={10}/>
      </TouchableOpacity>}
    </View>
  )
}

const stylesLogin = StyleSheet.create({
  principal:{
    width: '100%',
    height: 45,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20
  },
  icone:{
    height: 20,
    width: 20,
  },
  input:{
    color: '#fff',
    marginLeft: 10,
    marginRight: 5,
    width: '100%',
    height: '100%',
    flex: 1,
  }
})