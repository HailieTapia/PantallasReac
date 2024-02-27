import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const PerfilUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [notificaciones, setNotificaciones] = useState(true); 


  const guardarPerfil = () => {
    
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Teléfono:', telefono);
    console.log('Dirección:', direccion);
    console.log('Notificaciones:', notificaciones);
  };


  useEffect(() => {

    setNombre('Usuario Ejemplo');
    setEmail('usuario@example.com');
    setTelefono('1234567890');
    setDireccion('Calle Ejemplo, Ciudad');
    setNotificaciones(true);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil de Usuario</Text>
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
      <View style={styles.parametro}>
        <Text style={styles.label}>Notificaciones:</Text>
        <Button
          title={notificaciones ? 'Activado' : 'Desactivado'}
          onPress={() => setNotificaciones(!notificaciones)}
          color={notificaciones ? '#008000' : '#FF0000'} 
        />
      </View>
      <Button
        title="Guardar Perfil"
        onPress={guardarPerfil}
        color="#FFA500"
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

export default PerfilUsuario;
