import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { Text, Button, Divider } from 'react-native-paper';

export default function ReceitaScreen({ navigation, route }) {
  const { receita } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>{receita.nome}</Text>
      <Image source={{ uri: receita.imagem }} style={styles.image} />
      <Text>Tempo de Preparo: {receita.tempoPreparo}</Text>
      <Text>Porções: {receita.porcoes}</Text>

      <Divider style={styles.divider} />

      <Text variant="titleMedium">Ingredientes:</Text>
      {receita.ingredientes.map((item, idx) => (
        <Text key={idx}>• {item}</Text>
      ))}

      <Divider style={styles.divider} />

      <Text variant="titleMedium">Modo de Preparo:</Text>
      {receita.modoPreparo.map((passo, idx) => (
        <Text key={idx}>{passo}</Text>
      ))}

      <Button mode="outlined" onPress={() => navigation.goBack()} style={styles.button}>Voltar</Button>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10
  },
  divider: {
    marginVertical: 12
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    marginTop: 20
  }
});
