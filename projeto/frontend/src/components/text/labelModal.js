import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  styleLabel:{
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 15,
    marginTop: 35,
  }
});

const LabelComponent = ({ title, style }) => {
  return (
    <Text style={styles.styleLabel}>{title}</Text>
  );
};

export default LabelComponent;
