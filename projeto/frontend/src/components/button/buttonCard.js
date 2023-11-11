import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  buttonStyleCard:{
        paddingStart: 15,
    },

    buttonCardStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2A59C2',
        borderRadius: 100,
        height: 30,
        width: 100,
    },

    buttonCardText:{
        padding: 5,
        color: '#f6f6f6',
        fontWeight: '600'
    }
});

const ButtonCard = ({onPress}) => {
  return (
    <View style={styles.buttonStyleCard}>
      <TouchableOpacity style={styles.buttonCardStyle} onPress={onPress}>
        <Text style={styles.buttonCardText}>Saiba mais</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonCard;


