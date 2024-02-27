import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');


  const registrarUsuario = () => {

    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Teléfono:', telefono);
    console.log('Dirección:', direccion);
    console.log('¡Usuario registrado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de Usuario</Text>
      <View style={styles.parametro}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={text => setNombre(text)}
        />
      </View>
      <View style={styles.parametro}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address" 
        />
      </View>
      <View style={styles.parametro}>
        <Text style={styles.label}>Teléfono:</Text>
        <TextInput
          style={styles.input}
          value={telefono}
          onChangeText={text => setTelefono(text)}
          keyboardType="phone-pad" 
        />
      </View>
      <View style={styles.parametro}>
        <Text style={styles.label}>Dirección:</Text>
        <TextInput
          style={styles.input}
          value={direccion}
          onChangeText={text => setDireccion(text)}
        />
      </View>
      <Button
        title="Registrar Usuario"
        onPress={registrarUsuario}
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
  button: {
    marginTop: 20,
  },
});

export default Registro;
