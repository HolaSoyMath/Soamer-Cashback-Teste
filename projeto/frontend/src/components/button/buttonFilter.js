import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  
  button: {
    backgroundColor: '#F6F6F6',
    borderColor: '#B4B4B4',
    borderWidth: 1,
    minWidth: 150,
    height: 38,
    borderRadius: 7,
    justifyContent: 'center'
  },
  buttonClicked: {
    backgroundColor: '#2A59C2',
    height: 38,
    borderRadius: 7,
    justifyContent: 'center'
  },
  text: {
    color: '#979797',
    fontSize: 13,
    textAlign: 'center',
  },
  textClicked: {
    color: '#F6F6F6', 
    fontSize: 13,
    textAlign: 'center',
  }
});

const ButtonFilter = ({ title, onPress, style }) => {
  const [clicked, setClicked] = useState(false);

  const handlePress = () => {
    setClicked(!clicked);
    if (onPress) {
      onPress();
    }
  };

  return (
    <View style={styles.button}>
      <TouchableOpacity 
          style={[style, clicked ? styles.buttonClicked : null]}
          onPress={handlePress}>
        <Text style={[styles.text, clicked ? styles.textClicked : null]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonFilter;
