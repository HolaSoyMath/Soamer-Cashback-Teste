import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  selectModelo:{
    borderColor: '#B4B4B4',
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    borderRadius: 7,
    minWidth: 200,
    height: 38,
    fontSize: 12,
    justifyContent: 'center'
  },

  selectText:{
    color: '#979797',
  }

});

const SelectModel = ({ title, onPress, style }) => {
  const [selectedModel, setSelectedModel] = useState("placeholder");
  return (
    <View style={styles.selectModelo}>
      <Picker style={styles.selectText} selectedValue={selectedModel}
        onValueChange={(itemValue) => setSelectedModel(itemValue)}>

          <Picker.Item label="Selecione" value="placeholder" />
          <Picker.Item label="Toyota Corolla Cross" value="Toyota Corolla Cross" />
          <Picker.Item label="Chevrolet Tracker 1.2" value="Chevrolet Tracker 1.2" />
          <Picker.Item label="Nissan Frontier " value="Nissan Frontier" />
      </Picker>
    </View>
  );
};

export default SelectModel;
