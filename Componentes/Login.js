import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (username === 'usuario' && password === 'contraseña') {
      Alert.alert('Inicio de sesión exitoso');
    } else {
      Alert.alert('Error', 'Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsername(text)}
        value={username}
        placeholder="Nombre de usuario"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      <Button
        title="Iniciar Sesión"
        onPress={handleLogin}
        color="#007bff" 
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 60, 
    width: 300, 
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    height: 90, 
    width: 500, 
  },
});

export default Login;
