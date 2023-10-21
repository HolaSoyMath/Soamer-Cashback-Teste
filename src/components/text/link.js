import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  textStyle:{
    color: '#696969',
    fontSize: 14,
    fontWeight: '500',
  }
});

const LinkComponent = ({ mudarTela }) => {
  return (
    <TouchableOpacity style={styles.linkStyle} onPress={mudarTela}>
        <Text style={styles.textStyle}>Ver mais</Text>
    </TouchableOpacity>
 
  );
};

export default LinkComponent;
