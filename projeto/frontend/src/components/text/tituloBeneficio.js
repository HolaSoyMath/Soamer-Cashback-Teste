import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  styleLabel:{
    fontWeight: '600',
    fontSize: 17,
    marginBottom: 5,
    color: '#1e1e1e'
  }
});

const Titulo = ({ title, style }) => {
  return (
    <Text style={styles.styleLabel}>{title}</Text>
  );
};

export default Titulo;