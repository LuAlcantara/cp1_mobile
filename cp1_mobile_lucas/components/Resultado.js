import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Resultado({ route }) {
  const { nomeProduto, valorOriginal, percentualAumento } = route.params;

  const valorOriginalNum = parseFloat(valorOriginal);
  const percentualNum = parseFloat(percentualAumento);
  const valorAumento = (valorOriginalNum * percentualNum) / 100;
  const novoValor = valorOriginalNum + valorAumento;

  return (
    <View style={styles.container}>
      <Image source={require('../assets/fiaplogo.png')} style={styles.logo} />
      <Text style={styles.title}>Novo Valor do Curso</Text>
      <Text style={styles.text}>Curso: {nomeProduto}</Text>
      <Text style={styles.text}>Valor Original: R$ {valorOriginalNum.toFixed(2)}</Text>
      <Text style={styles.text}>Percentual de Aumento: {percentualNum}%</Text>
      <Text style={styles.text}>Valor do Aumento: R$ {valorAumento.toFixed(2)}</Text>
      <Text style={styles.text}>Novo Valor: R$ {novoValor.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 500,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8C8C8C',
    marginBottom: 25,
  },
  text: {
    fontSize: 18,
    color: '#BF3B5E',
    marginBottom: 15,
  },
});