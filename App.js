import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, NativeModules } from 'react-native';

const SharedStorage = NativeModules.SharedStorage;

const App = () => {
  const [state, setState] = useState('This is data from the React Ntive App');

  SharedStorage.set(JSON.stringify({ text: state }));

  return (
    <View style={styles.root}>
      <Text style={styles.text}>{state}</Text>
      <TextInput style={styles.input} onChangeText={(text) => setState(text)} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: 300,
    borderColor: '#333',
    borderWidth: 1,
  },
});

export default App;
