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

const ButtonFechar = ({title, style, props}) => {
  return (
    <View>
    <TouchableOpacity style={[styles.button, style]} onPress={()=>navigation.navigate('Beneficios')}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};

export default ButtonFechar;