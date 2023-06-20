import React from 'react';
import {ActivityIndicator, Text, StyleSheet, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo5.png')}/>
      <Image style={styles.logo2} source={require('./assets/logo9.png')}/>
      <ActivityIndicator size="large" color="#8200d3"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbeeff',
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
    marginLeft:90,
    marginBottom:-13,
  },
  logo2: {
    width: 250,
    height: 100,
    marginBottom:20,
  }
});
