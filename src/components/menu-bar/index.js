import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import home from '../../images/menu-bar/home.png'
import pix from '../../images/menu-bar/historico.png'
import ponteiras from '../../images/menu-bar/ponteiras.png'
import perfil from '../../images/menu-bar/perfil.png'


export default function MenuBar(option) {
  return (
    <View style={stylesMenuBar.container}>
      <View style={stylesMenuBar.containerMenuBar}>
        <TouchableOpacity style={[option == 1 ? [stylesMenuBar.selecionado, stylesMenuBar.espacoIcones] : stylesMenuBar.espacoIcones]}>
          <Image source={home} style={stylesMenuBar.iconeHome}/>
        </TouchableOpacity>

        <TouchableOpacity style={[option == 2 ? [stylesMenuBar.selecionado, stylesMenuBar.espacoIcones] : stylesMenuBar.espacoIcones]}>
          <Image source={pix} style={stylesMenuBar.iconePix}/>
        </TouchableOpacity>

        <TouchableOpacity style={[option == 3 ? [stylesMenuBar.selecionado, stylesMenuBar.espacoIcones] : stylesMenuBar.espacoIcones]}>
          <Image source={ponteiras} style={stylesMenuBar.iconeCar}/>
        </TouchableOpacity>

        <TouchableOpacity style={[option == 4 ? [stylesMenuBar.selecionado, stylesMenuBar.espacoIcones] : stylesMenuBar.espacoIcones]}>
          <Image source={perfil} style={stylesMenuBar.iconePerfil}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const stylesMenuBar = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 50,
  },
  containerMenuBar: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    width: 300,
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 30
  },
  espacoIcones:{
    padding: 1,
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selecionado:{
    backgroundColor: "#2A59C2",
  },
  iconeHome:{
    width: 20,
    height: 20,
  },
  iconePix: {
    width: 26,
    height: 25,
  },
  iconePerfil:{
    width: 15,
    height: 20,
  },
  iconeCar:{
    width: 23,
    height: 25,
  },
  
});
