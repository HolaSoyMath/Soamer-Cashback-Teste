import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const ButtonCard = () => {
  return (
    <View style={styles.buttonStyleCard}>
      <TouchableOpacity style={styles.buttonCardStyle}>
        <Text style={styles.buttonCardText}>Saiba mais</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonStyleCard:{
        flex: 1,
        paddingTop: 30,
        paddingStart: 15,
    },

    buttonCardStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2A59C2',
        borderRadius: 100,
        height: 30,
        width: 100,
    },

    buttonCardText:{
        padding: 5,
        color: '#f6f6f6'
    }
});

export default ButtonCard;