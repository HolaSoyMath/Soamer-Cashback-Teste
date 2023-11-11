import { Text, StyleSheet, ScrollView, Card, View } from 'react-native';

const styles = StyleSheet.create({
    text:{
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      marginBottom: 15,
    },
  
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#F6F6F6',
    },
  
    paragraph:{
      fontSize: 13,
      width: '100%',
      color: '#F6F6F6',
    },
});

const TextCard = ({ title, paragraph }) => {
  return (
    <View style={styles.text}>
        <Text style={styles.title}>
            {title}
        </Text>
        <Text style={styles.paragraph}>
            {paragraph}
        </Text>
    </View>
   
  );
};

export default TextCard;
