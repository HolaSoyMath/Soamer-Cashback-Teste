import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, Image } from 'react-native'

const { height } = Dimensions.get('window')


const Modal = ({ show, close, imgPonteira }) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  })

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: false }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: false }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
    ]).start()
  }

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: false }),
      Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: false })
    ]).start()
  }

  useEffect(() => {
    if(show){
      openModal()
    }else{
      closeModal()
    }
  }, [show])

  return( 
    <Animated.View 
      style={[styles.container, {
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }]}
    >
      <Animated.View 
        style={[styles.modal, {
          transform: [
            { translateY: state.modal }
          ]
        }]}
      >
        <View style={styles.indicator} />
       
        <Text style={styles.text}>Ganhe +2 pontos</Text>
        <View style={styles.ponteira}>
           <View style={styles.cardPonteira}> 
            <Image style={styles.img1} source={require("../../../assets/ponteira.png")}/>
                <View style={styles.textStyle}>
                    <Text style={styles.titleCard}>Dupla Polida</Text>
                    <Text style={styles.textCard}>Jeep Compass Diesel</Text>
                </View>
              </View>
              <View style={styles.comoFunc}>
              <View style={styles.img}>
                <Image source={require("../../../assets/icon_list.png")}/>
              </View>
                  <Text style={styles.text1}>Como funciona</Text>
                  <Text style={styles.text2}>Na venda de uma ponteira dupla para Jeep Compass Diesel você acumula +2 pontos.</Text>
              </View>
              
              <View style={styles.comoFunc}>
              <View style={styles.img}>
                <Image source={require("../../../assets/icon_calendario.png")}/>
              </View>
                  <Text style={styles.text1}>Validade</Text>
                  <Text style={styles.text2}>Essa campanha é temporaria e válida até 29/09.</Text>
              </View>
        </View>

        <TouchableOpacity style={styles.btn} onPress={close}>
          <Text style={{ color: '#fff', fontWeight: 500 }}>Fechar</Text>
        </TouchableOpacity>

      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute'
  },

  modal: {
    bottom: 0,
    position: 'absolute',
    height: '65%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 30,
  },


  text: {
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 30,
    textAlign: 'center',
  },

  btn: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    backgroundColor: '#2A59C2',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },

  cardPonteira:{
    backgroundColor: '#1e1e1e',
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 9,
  },

  textStyle:{
    marginStart: 10,
  },
  
  titleCard:{
    color: '#f6f6f6',
    fontWeight: '600',
    fontSize: 18,
  },

  textCard:{
    color: '#f6f6f6',
  },

  img1:{
    height: 60,
    width: 60,
    marginStart: 20,
  },

  comoFunc:{
    paddingTop: 30,
  },

  img:{
    backgroundColor: '#1e1e1e',
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  
  text1:{
    fontWeight: '700',
    fontSize: 16,
  },

  text2:{
    fontSize: 15,
    marginTop: 12,
    textAlign: 'justify'
  }
})

export default Modal;