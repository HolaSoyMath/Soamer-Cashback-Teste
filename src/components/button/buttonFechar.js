import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: 110,
    borderRadius: 7,
    backgroundColor: '#E1E1E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#8E8E8E',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  }
});

const ButtonFechar = ({title, style, destino}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.button]} onPress={destino}>
        <Text style={styles.text2}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonFechar;