import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Bienvenida from './Componentes/Bienvenida';
import AjustesYConfiguracion from './Componentes/AjustesYConfiguracion';
import Login from './Componentes/Login';
import RegistroItem from './Componentes/RegistroItem';
import PerfilUsuario from './Componentes/PerfilUsuario';
import AsistenciaYSoporte from './Componentes/AsistenciaYSoporte';
import Registro from './Componentes/Registro';
import ControlIncubadora from './Componentes/ControlIncubadora';

const imgLogo = require('./Componentes/Img/incono.png');
const imgFb = require('./Componentes/Img/fb.png');
const imgInst = require('./Componentes/Img/inst.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
      <Pie/>
    </View>
  );
}

export const Encabezado = () => {
  return (
    <View style={styles.encabezado}>
      {/* Menú desplegable a la izquierda */}
      <View style={styles.menu}>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {/* Nombre de la empresa en el centro */}
      <Text style={styles.texto}>Huevitos Felices</Text>
      {/* Logo en la parte derecha */}
      <Image source={imgLogo} style={styles.logo} />
    </View>
  );
};

export const Cuerpo = () => {
  return (
    <View style={styles.cuerpo}>
      <AjustesYConfiguracion/>
    </View>
  );
};

export const Pie = () => {
  return (
    <View style={styles.pie}>
      <View style={styles.footer}>
        <Text style={styles.titleFooter}>Información de Contacto</Text>
        <View style={styles.contactDetails}>
          <Text style={styles.contactText}>Dirección: Col.Centro Calle:Centro Huejutla de Reyes.</Text>
          <Text style={styles.contactText}>Teléfono: 123-456-7890</Text>
        </View>
        <View style={styles.footerImage}>
          <Text style={styles.socialMedia}>Redes sociales:</Text>
          <Image source={imgFb} style={styles.socialIcon} />
          <Image source={imgInst} style={styles.socialIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7d9f3',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    marginTop:25,
    fontSize: 30,
    fontWeight: 'bold',
  },
  encabezado: {
    flex: .9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },
  cuerpo: {
    flex: 4,
  },
  logo: {
    width: 50,
    height: 60,
  },
  pie: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#666666',
  },
  footer: {
    backgroundColor: '#666666',
    padding: 8,
  },
  titleFooter: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  footerImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  socialMedia: {
    color: '#fff',
    marginRight: 10,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  contactDetails: {
    marginTop: 2,
  },
  contactText: {
    color: '#fff',
    marginBottom: 1,
  },
  menu: {
    marginRight: 10,
  },
});
