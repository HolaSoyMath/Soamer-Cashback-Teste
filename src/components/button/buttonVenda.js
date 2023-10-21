
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '13%',
  },
  
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A59C2',
    borderRadius: 100,
    height: 60,
    width: '100%',
    borderColor: '#191919',
    borderWidth: 8,
  },
  
  buttonText: {
    color: '#F2F2F2',
    fontSize: 25,
    fontWeight: '200'
  }
});

const ButtonVenda = ({onPress}) => {
  return (
    <View style={styles.buttonStyle}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonVenda;

