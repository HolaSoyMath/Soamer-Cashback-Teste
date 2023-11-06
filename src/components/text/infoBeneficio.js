import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  styleLabel:{
    fontSize: 14,
    marginBottom: 30,
    color: '#929292',
    textAlign: 'justify',
    lineHeight: 20,
  }
});

const Texto = ({ title, style }) => {
  return (
    <Text style={styles.styleLabel}>{title}</Text>
  );
};

export default Texto;