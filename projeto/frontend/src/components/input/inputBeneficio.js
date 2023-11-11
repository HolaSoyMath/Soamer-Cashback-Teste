import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

const styles = StyleSheet.create({
    styleInput:{
        flexDirection: 'row', 
        alignItems: 'center', 
        borderBottomWidth: 1,
        borderBottomColor: '#929292',
        marginBottom: 70,
    },
    
    image:{
        width: 15, 
        height: 15, 
        marginRight: 10
    },

    placeholder:{
        flex: 1, 
        height: 40, 
    }
  });

const InputText = ({ placeholder, imageSource }) => {
  return (
    <View style={styles.styleInput}>
      <Image source={imageSource} style={styles.image} />
      <TextInput
        placeholder={placeholder}
        style={styles.placeholder}
        keyboardType="numeric"
      />
    </View>
  );
};

export default InputText;
