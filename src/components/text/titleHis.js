import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  styleTitle:{
    fontSize: 13, 
    fontWeight: '600'
  }
});

const TitleComponent = ({ title, style }) => {
  return (
    <Text style={styles.styleTitle}>{title}</Text>
  );
};

export default TitleComponent;
