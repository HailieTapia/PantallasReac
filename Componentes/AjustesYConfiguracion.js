import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const AjustesYConfiguracion = () => {

  const [temperaturaDeseada, setTemperaturaDeseada] = useState('');
  const [humedadObjetivo, setHumedadObjetivo] = useState('');
  const [duracionIncubacion, setDuracionIncubacion] = useState('');

  
  const guardarConfiguracion = () => {

    console.log('Temperatura Deseada:', temperaturaDeseada);
    console.log('Humedad Objetivo:', humedadObjetivo);
    console.log('Duración de Incubación:', duracionIncubacion);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ajustes y Configuración</Text>
      <View style={styles.parametro}>
        <Text style={styles.label}>Temperatura Deseada:</Text>
        <TextInput
          style={[styles.input, styles.inputGrande]}
          value={temperaturaDeseada}
          onChangeText={text => setTemperaturaDeseada(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.parametro}>
        <Text style={styles.label}>Humedad Objetivo:</Text>
        <TextInput
          style={styles.input}
          value={humedadObjetivo}
          onChangeText={text => setHumedadObjetivo(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.parametro}>
        <Text style={styles.label}>Duración de Incubación:</Text>
        <TextInput
          style={styles.input}
          value={duracionIncubacion}
          onChangeText={text => setDuracionIncubacion(text)}
          keyboardType="numeric"
        />
      </View>
      <Button
        title="Guardar Configuración"
        onPress={guardarConfiguracion}
        color="#007bff"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#DCDCDC',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  parametro: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18, 
    marginBottom: 5,
  },
  input: {
    height: 40, 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputGrande: {
    height: 40, 
  },
  button: {
    marginTop: 20,
  },
});

export default AjustesYConfiguracion;
