import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import LoginButton from '../ui/components/buttons/LoginButton';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../ui/css/Login';
import axios from 'axios';

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const IP = '192.168.0.110'
  const PORT = '3001'

  async function handleSignIn() {
    const data = {
        email: email,
        password: password
    }
    await axios.post(`http://${IP}:${PORT}/user/login`, data)
    .then((res) => {
        const token = res.data.data.token
        axios.post(`http://${IP}:${PORT}/user/private`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(() => {
          navigation.navigate('Feed')
            alert('Login efetuado com sucesso')
        })
        .catch(err => {
            console.log(err)
            alert('Usuario ou senha invalida')
        })
    }) 
    .catch(err => {
        console.log(err)
        alert('Erro ao autenticar')
    })  
  }

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <MaterialIcons style={styles.logo} name="device-hub" size={50} color="black" />
        <Text style={styles.textLogo}>DevBook</Text>
        <View style={styles.manualLogin}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
          />
          <LoginButton value='Login' onPress={handleSignIn} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
