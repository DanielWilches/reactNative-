import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.containerTitulo} >log in </Text>
      <View style={ styles.containerFrom}>
        <TextInput style={styles .containerFromIpunt}  placeholder="nombre"></TextInput>
        <TextInput style={ styles.containerFromIpunt}  placeholder="contraseña"></TextInput>
      </View>
              <View>
          <Button>holas</Button>
           <Button>holas</Button>        
          
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7DBDD",
    width: '100%',
    maxWidth: 500,
    height: 'auto',
    margin: 'auto',
    marginTop: 10,
    marginBottom: 10, 
    padding: 10,
    borderRadius: 6,
  },
  containerTitulo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 500,
    textAlignments: 'center ',
    textTransformations: 'capitalize',
    marginTop: '20px',
    padding: 10,
  },
  containerFrom: {
    width: '100%',
    height: 'auto',
    maxWidth: '450px',
    margin: 'auto',
    marginTop: 10,
    marginBottom: 10,
    padding: 10
  },
  containerFromIpunt: {},
  continerBtns: {}

});
