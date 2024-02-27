import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ControlIncubadora = () => {

  const [temperatura, setTemperatura] = useState(37.5);
  const [humedad, setHumedad] = useState(50);
  const [tiempoRestante, setTiempoRestante] = useState(24); 

 
  const iniciarIncubacion = () => {

    console.log('Iniciando incubación...');
  };

 
  const detenerIncubacion = () => {

    console.log('Deteniendo incubación...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Control de Incubadora</Text>
      <View style={styles.parametro}>
        <Text style={styles.label}>Temperatura (°C):</Text>
        <TextInput
          style={styles.input}
          value={temperatura.toString()}
          onChangeText={text => setTemperatura(parseFloat(text))}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.parametro}>
        <Text style={styles.label}>Humedad (%):</Text>
        <TextInput
          style={styles.input}
          value={humedad.toString()}
          onChangeText={text => setHumedad(parseFloat(text))}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.parametro}>
        <Text style={styles.label}>Tiempo Restante (horas):</Text>
        <Text style={styles.valor}>{tiempoRestante}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Iniciar Incubación"
          onPress={iniciarIncubacion}
          color="#008000" 
        />
        <Button
          title="Detener Incubación"
          onPress={detenerIncubacion}
          color="#FF0000" 
        />
      </View>
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
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  valor: {
    fontSize: 20,
    paddingVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ControlIncubadora;
