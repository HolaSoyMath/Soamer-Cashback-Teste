import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  selectAno: {
    borderColor: '#B4B4B4',
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    borderRadius: 7,
    minWidth: 110,
    height: 38,
    justifyContent: 'center'
  },
  selectText: {
    color: '#979797'
  }
});

const SelectAno = () => {
  const [selectedAno, setSelectedAno] = useState("ano");

  return (
    <View style={styles.selectAno}>
      <Picker 
        selectedValue={selectedAno}
        style={styles.selectText}
        onValueChange={(itemValue) => setSelectedAno(itemValue)}
      >
        <Picker.Item label="Ano" value="ano" />
        <Picker.Item label="2000-2009" value="2010-2017" />
        <Picker.Item label="2010-2017" value="2010-2017" />
        <Picker.Item label="2018-2023" value="2018-2023" />
      </Picker>
    </View>
  );
};

export default SelectAno;
