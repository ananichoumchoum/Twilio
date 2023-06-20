import React from 'react';
import {ActivityIndicator, Text, StyleSheet, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo5.png')}/>
      <Text style={styles.text}>Direct Medical</Text>
      <ActivityIndicator size="large" color="#8200d3"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#8200d3", 
    marginBottom: 20,
    fontSize: 28,
    fontWeight: "bold",
    fontFamily:"Avenir-Roman",
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom:20,
  }
});
