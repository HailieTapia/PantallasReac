import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const RegistroItem = ({ fecha, evento }) => (
  <View style={styles.item}>
    <Text style={styles.fecha}>{fecha}</Text>
    <Text>{evento}</Text>
  </View>
);

const HistorialYRegistro = () => {

  const historial = [
    { id: '1', fecha: '2024-02-24 10:30', evento: 'Cambio de temperatura: 38°C' },
    { id: '2', fecha: '2024-02-25 09:45', evento: 'Inicio de incubación' },
    { id: '3', fecha: '2024-02-26 11:20', evento: 'Fin de incubación' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Historial y Registro</Text>
      <Button title="Registrar Evento" onPress={() => {}} />
      <FlatList
        data={historial}
        renderItem={({ item }) => (
          <RegistroItem fecha={item.fecha} evento={item.evento} />
        )}
        keyExtractor={item => item.id}
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
  item: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  fecha: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default HistorialYRegistro;
