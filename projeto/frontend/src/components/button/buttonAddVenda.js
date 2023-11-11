import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const ButtonVenda = () => {
  return (
    <View style={styles.buttonStyle}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 55,
      },
      button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2A59C2',
        borderRadius: 100,
        height: 60,
        width: 310,
        borderColor: '#191919',
        borderWidth: 8,
      },
      buttonText: {
        color: '#F2F2F2',
        fontSize: 25,
        fontWeight: '200'
      }
});

export default ButtonVenda;