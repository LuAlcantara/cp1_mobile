import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Resultado from './components/Resultado';

function Formulario({ navigation }) {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorOriginal, setValorOriginal] = useState('');
  const [percentualAumento, setPercentualAumento] = useState('');

  const calcularNovoValor = () => {
    if (!nomeProduto || !valorOriginal || !percentualAumento) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }
    navigation.navigate('Resultado', { nomeProduto, valorOriginal, percentualAumento });
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/fiaplogo.png')} style={styles.logo} />
      <Text style={styles.title}>Calculadora de Aumento de Mensalidades</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Curso"
        placeholderTextColor="#8C8C8C"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor Original"
        placeholderTextColor="#8C8C8C"
        keyboardType="numeric"
        value={valorOriginal}
        onChangeText={setValorOriginal}
      />
      <TextInput
        style={styles.input}
        placeholder="Percentual de Aumento (%)"
        placeholderTextColor="#8C8C8C"
        keyboardType="numeric"
        value={percentualAumento}
        onChangeText={setPercentualAumento}
      />
      <TouchableOpacity style={styles.button} onPress={calcularNovoValor}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Formulario">
        <Stack.Screen name="Formulario" component={Formulario} options={{ title: 'Calculadora' }} />
        <Stack.Screen name="Resultado" component={Resultado} options={{ title: 'Resultado' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 500,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#8C8C8C',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    backgroundColor: '#F23064',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
