import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ButtonD({navigation}) {
  const pagTeste = () => {
    navigation.navigate("Principal")
  }

    return (
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => pagTeste()}>
          <Text style={styles.textButton}>Salvar alterações</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
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