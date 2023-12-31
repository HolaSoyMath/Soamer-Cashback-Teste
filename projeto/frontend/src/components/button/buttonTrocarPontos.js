import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: 195,
    borderRadius: 7,
    backgroundColor: '#2A59C2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#F6F6F6',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  }
});

const ButtonTrocar = ({title, trocar, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={trocar}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonTrocar;