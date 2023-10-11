import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import MenuBar from './src/components/menu-bar' //Não consegui trazer pra cá
import detalheTopo from './src/images/perfil/detalhe-topo.png'
import foto from './src/images/perfil/foto.png'
import iconPerfil from './src/images/perfil/info-pessoal.png'
import iconEditar from './src/images/perfil/editar.png'
import iconEmail from './src/images/perfil/email.png'
import iconSenha from './src/images/perfil/senha.png'
import iconEndereco from './src/images/perfil/endereco.png'

export default function App() {
  return (


    <View>
      <View style={styles.containerHeader}>
        {/* <Image source={detalheTopo} />  */}
        <Text style={styles.textHeader}>Matheus Guimarães</Text>
      </View>
      <View style={styles.containerPerfil}>
        <View style={styles.containerFotoPerfil}>
          <Image source={foto} style={styles.fotoPerfil} />
        </View>
      </View>
      <View style={{paddingLeft: 15, paddingRight: 15}}>
        <View style={[styles.containerInput, {marginTop: 80}]}>
          <Image source={iconPerfil} style={styles.iconPerfil} />
          <TextInput style={styles.input} value='Nome completo'>

          </TextInput>
          <Image source={iconEditar} style={styles.iconEditar} />
        </View>

        <View style={[styles.containerInput]}>
          <Image source={iconPerfil} style={styles.iconPerfil} />
          <TextInput style={styles.input} value='CPF'>

          </TextInput>
        </View>

        <View style={[styles.containerInput]}>
          <Image source={iconEmail} style={[styles.iconEmail, styles.iconInicio, {height: 17}]} />
          <TextInput style={styles.input} value='Email'>

          </TextInput>
          <Image source={iconEditar} style={styles.iconEditar} />
        </View>

        <View style={[styles.containerInput]}>
          <Image source={iconSenha} style={[styles.iconSenha, styles.iconInicio]} />
          <TextInput style={styles.input} value='Senha'>

          </TextInput>
          <Image source={iconEditar} style={styles.iconEditar} />
        </View>

        <View style={[styles.containerInput]}>
          <Image source={iconEndereco} style={[styles.iconEndereco, styles.iconInicio]} />
          <TextInput style={styles.input} value='CNPJ'>

          </TextInput>

        </View>

        <View>
          <View style={[styles.containerInput, {width: "55%"}]}>
            <Image source={iconEndereco} style={[styles.iconEndereco, styles.iconInicio]} />
            <TextInput style={styles.input} value='Endereço'>

            </TextInput>
            <Image source={iconEditar} style={styles.iconEditar} />
            <View style={[styles.containerInput, {width: "71%", marginLeft: 10}]}>
              <TextInput style={styles.input} value='N°'>

              </TextInput>
              <Image source={iconEditar} style={styles.iconEditar} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 200,
  },
  containerPerfil:{
    width:"100%",
    height: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFotoPerfil: {
    width: 127,
    height: 127,
    backgroundColor: "#2a59c2",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  fotoPerfil:{
    height: 120,
    width: 120,
  },
  textHeader: {
    color: "#fff",
    fontWeight: 'bold',
    alignItems: 'center',
    paddingBottom: 80,
    fontSize: 30,
  },
  containerInput: {
    flex: 0,
    flexDirection: 'row',
    height: 60,
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingright: 10,
    borderBottomColor: 'rgba(0,0,0,0.22)',
    borderBottomWidth: 1,
    borderRadius:2,
  },
  input: {
    flex:0,
    paddingLeft: 10,
    paddingRight: 10,
    width: "80%",
    color: '#1e1e1e50'
  },
  iconPerfil: {
    width: 15,
    height: 20,
    marginRight: 22
  },
  iconInicio:{
    marginRight: 20
  },
  iconEmail: {
    width: 17,
    height: 10,
  },
  iconSenha: {
    width: 17,
    height: 19,
  },
  iconEndereco: {
    width: 17,
    height: 18,
  },
  iconEditar: {
    width: 14,
    height: 14,
  },
});