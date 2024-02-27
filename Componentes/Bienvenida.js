import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Bienvenida = ({ onPressIniciar }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido a la Aplicación de Control de Incubadora</Text>
      <Image source={require('./Img/incubadora.jpg')} style={styles.imagen} />
      <Text style={styles.mensaje}>Controla y monitorea tus incubadoras de forma fácil y segura.</Text>
      <TouchableOpacity style={styles.boton} onPress={onPressIniciar}>
        <Text style={styles.textoBoton}>Comenzar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  imagen: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  mensaje: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  boton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Bienvenida;
