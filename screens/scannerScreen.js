import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScannerScreen(props) {
 const [hasPermission, setHasPermission] = useState(null);
 const [scanned, setScanned] = useState(false);

 React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
 }, []);

 const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Código de barras escaneado: ${data}`);
    props.navigation.navigate("VendaRegistrada");
 };

 if (hasPermission === null) {
    return <Text>Solicitando permissão para acessar a câmera</Text>;
 }
 if (hasPermission === false) {
    return <Text>Não temos permissão para acessar a câmera</Text>;
 }

 return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      
      <View style={styles.rectangleContainer}>
        <View style={styles.rectangle} />
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Digitar código de barras</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Coloque o código de barras na marcação</Text>
      </View>
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    width: '100%',
 },
 rectangleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    width: '20%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    position: 'absolute'
 },
 rectangle: {
    height: '90%',
    width: 1,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
 },
 button: {
    backgroundColor: '#2A59C2',
    padding: 10,
    borderRadius: 50,
    marginRight: 260,
    width: 250,
    height: 60,
    justifyContent: 'center',
    transform: [
      {
        rotate: "90deg",
      }
    ],
 },
 buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
 },
 text: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    position:'absolute',
    marginLeft: 270,
    width: 290,
    height: 40,
    transform: [
      {
        rotate: "90deg",
      }
    ],
 },
});