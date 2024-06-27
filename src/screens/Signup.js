import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import LoginButton from '../ui/components/buttons/LoginButton';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../ui/css/Signup';
import axios from 'axios';

export default function Signup({ navigation }) {

  const IP = '192.168.0.110'
  const PORT = '3001'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function SignUp() {
    const data = {
        name: name,
        email: email,
        password: password
    };
    await axios.post(`http://${IP}:${PORT}/user`, data)
        .then(res => {
            alert('Conta criada com sucesso!');
            navigation.navigate("Login");
        })
        .catch(err => {
            console.log(err);
            alert('Erro ao cadastrar');
        });
}

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <MaterialIcons style={styles.logo} name="device-hub" size={50} color="black" />
        <Text style={styles.textLogo}>DevBook</Text>
        <View style={styles.manualLogin}>
        <TextInput
            placeholder='Name'
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder='Email'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder='Password'
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <LoginButton value='Signup' onPress={SignUp} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
