import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ButtonD() {

    return (
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Salvar alterações</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    containerButton:{
        marginTop: 10,
        
      },
      button: {
        width: 200,
        height: 45,
        backgroundColor: "#2a59c2",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 20
      },
      textButton:{
        justifyContent: 'center',
        alignItems: 'center',
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 20,
      },
})