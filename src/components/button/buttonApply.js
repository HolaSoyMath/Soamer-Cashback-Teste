import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  
  button: {
    height: 45,
    minWidth: 230,
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

const ButtonApply = ({title,onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonApply;