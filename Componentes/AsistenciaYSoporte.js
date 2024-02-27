import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AsistenciaYSoporte = () => {

  const solicitarAsistencia = () => {
   
    console.log('Solicitud de asistencia enviada');
  };

 
  const contactarSoporte = () => {

    console.log('Contactando con soporte técnico');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Asistencia y Soporte</Text>
      <TouchableOpacity
        style={[styles.button, styles.solicitarButton]}
        onPress={solicitarAsistencia}
      >
        <Text style={styles.buttonText}>Solicitar Asistencia</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.contactarButton]}
        onPress={contactarSoporte}
      >
        <Text style={styles.buttonText}>Contactar Soporte Técnico</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', 
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', 
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  solicitarButton: {
    backgroundColor: '#FF6347', 
  },
  contactarButton: {
    backgroundColor: '#4682B4', 
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', 
  },
});

export default AsistenciaYSoporte;
