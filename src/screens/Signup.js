import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import LoginButton from '../ui/components/buttons/LoginButton';
import { MaterialIcons } from '@expo/vector-icons';

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <MaterialIcons style={styles.logo} name="device-hub" size={50} color="black" />
        <Text style={styles.textLogo}>DevBook</Text>
        <View style={styles.manualLogin}>
          <TextInput
            placeholder='Name'
            style={styles.input}
          />
          <TextInput
            placeholder='Email'
            style={styles.input}
          />
          <TextInput
            placeholder='Password'
            style={styles.input}
            secureTextEntry={true}
          />
          <TextInput
            placeholder='Confirm Password'
            style={styles.input}
            secureTextEntry={true}
          />
          <LoginButton value='Signup' onPress={() => navigation.navigate('Feed')} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b0081',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    backgroundColor: '#fff',
    width: 300,
    height: 550,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  separate: {
    height: 1,
    margin: 10,
    width: '80%',
    backgroundColor: '#000',
    alignSelf: 'center',
  },
  textInput: {
    alignSelf: 'center',
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logo: {
    alignSelf: 'center',
    margin: 10,
  },
  textLogo: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginText: {
    alignSelf: 'center',
    marginTop: 10,
    color: '#0000FF',
  },
});