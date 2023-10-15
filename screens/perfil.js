import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import MenuBar from '../src/components/menu-bar/index'
import ButtonSaveAlt from '../src/components/button/buttonSalvarAlteracao.js'
import InputPerfil from '../src/components/input/inputPerfil.js'
import detalheTopo from '../src/images/perfil/detalhe-topo.png'
import foto from '../src/images/perfil/foto-perfil.png'
import iconPerfil from '../src/images/perfil/info-pessoal.png'
import iconEditar from '../src/images/perfil/editar.png'
import iconEmail from '../src/images/perfil/email.png'
import iconSenha from '../src/images/perfil/senha.png'
import iconEndereco from '../src/images/perfil/endereco.png'
import { NavigationContainer } from '@react-navigation/native'

export default function Perfil(props) {

  return (


    <View>
      <View style={styles.containerHeader}>
        <Image source={detalheTopo} style={styles.image}/> 
        <Text style={styles.textHeader}>Matheus Guimarães</Text>
      </View>

      <View style={styles.containerPerfil}>
        <View style={styles.containerFotoPerfil}>
          <Image source={foto} style={styles.fotoPerfil} />
        </View>
      </View>

      <View style={{paddingLeft: 15, paddingRight: 15, marginTop: 80}}>

        <InputPerfil icone={iconPerfil} nome={'Nome Completo'} editar={1}></InputPerfil>

        <InputPerfil icone={iconPerfil} nome={'CPF'}></InputPerfil>

        <InputPerfil icone={iconEmail} nome={'Email'} editar={1}></InputPerfil>

        <InputPerfil icone={iconSenha} nome={'Senha'} editar={1}></InputPerfil>

        <InputPerfil icone={iconEndereco} nome={'CNPJ'}></InputPerfil>

        <View>
          <View style={[styles.containerInput, {width: "55%"}]}>
            <Image source={iconEndereco} style={[styles.iconEndereco, styles.iconInicio]} />
            <TextInput style={styles.input} placeholder='Endereço'>

            </TextInput>
            <Image source={iconEditar} style={styles.iconEditar} />
            <View style={[styles.containerInput, {width: "71%", marginLeft: 10}]}>
              <TextInput style={styles.input} placeholder='N°'>

              </TextInput>
              <Image source={iconEditar} style={styles.iconEditar} />
            </View>
          </View>
        </View>


      </View>

      <View style={stylesButton.container}>
        <ButtonSaveAlt> </ButtonSaveAlt>
      </View>

      <View style={stylesMenuBar.container}>
        <MenuBar option = {4}></MenuBar>
      </View>
        
    </View> 
  );
}



const styles = StyleSheet.create({
  // Tpo da página
  containerHeader: {
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 200,
  },
  textHeader: {
    color: "#fff",
    fontWeight: 'bold',
    alignItems: 'center',
    paddingBottom: 80,
    fontSize: 30,
  },
  //Foto do perfil
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
  // Campos para alteração
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

const stylesMenuBar = StyleSheet.create({
  container: {
    height: 10,
    marginTop: 50,
  },
});

const stylesButton = StyleSheet.create({
  container: {
    height: 115,
  },
});


const styles2 = StyleSheet.create({
    containerButton:{
        width:"100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      button: {
        width: 200,
        height: 45,
        backgroundColor: "#2a59c2",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
      },
      textButton:{
        justifyContent: 'center',
        alignItems: 'center',
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 20,
      },
})