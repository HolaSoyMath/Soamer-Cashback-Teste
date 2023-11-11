import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ButtonSair() {

    return (
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Sair</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    containerButton:{
        marginTop: 10,
      },
      button: {
        width: 100,
        height: 45,
        backgroundColor: "#FEE2E2",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 20
      },
      textButton:{
        justifyContent: 'center',
        alignItems: 'center',
        color: "#CF6868",
        fontWeight: 'bold',
        fontSize: 20,
      },
})