import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  styleLabel:{
    color: '#1e1e1e',
    fontSize: 19,
    fontWeight: '600',
    maxWidth: '70%',
  }
});

const LabelComponent = ({ title, style }) => {
  return (
    <Text style={styles.styleLabel}>{title}</Text>
  );
};

export default LabelComponent;
