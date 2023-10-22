import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Image } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import iconCalendarioWhite from '../../images/historico/calendario_white.png'
import iconCalendarioBlack from '../../images/historico/calendario_black.png'
import iconSetaWhite from '../../images/historico/seta_baixo_white.png'
import iconSetaBlack from '../../images/historico/seta_baixo_black.png'

export default function CalendarioHistorico({option}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  function getIcon(option) {
    if (option == 1) {
      return iconCalendarioWhite;
    } else {
      return iconCalendarioBlack;
    }
  }

  function getSeta(option) {
    if (option == 1) {
      return iconSetaWhite;
    } else {
      return iconSetaBlack;
    }
  }

  function formatarData(date) {
    const day = String(date.getDate()).padStart(2, '0'); // Dia com dois dígitos
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês com dois dígitos
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }


  return (
    <View>
      <Pressable style={calendario.containerCalendario} onPress={showDatePicker}>
        <Image source={getIcon(option)} style={calendario.icone} />
        <TextInput 
        style={[calendario.input, { color: option == 1 ? "#FFF" : "#000" }]} 
        editable={false}
        value={selectedDate ? formatarData(selectedDate) : ''}
        />
        <Image source={getSeta(option)} style={calendario.icone}/>
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const calendario = StyleSheet.create({
  containerCalendario: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  icone: {
    height: 20,
    width: 20,
  },
  input: {
    justifyContent: 'center',
  }
});
