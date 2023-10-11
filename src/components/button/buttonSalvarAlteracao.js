import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity } from 'react-native';

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