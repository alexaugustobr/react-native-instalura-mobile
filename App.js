/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('screen').width;

const fotos = [
  {
    id: 1,
    usuario: 'Daniel'
  },
  {
    id: 2,
    usuario: 'Bob'
  },
  {
    id: 3,
    usuario: 'Im okay'
  }
]

const App: () => React$Node = () => {
  return (
    <View style={{marginTop:20}}>
      {fotos.map(foto =>
        <View key={foto.id}>
          <Text>{foto.usuario}</Text> 
          <Image source={require('./resources/img/alura.jpg')} 
                 style={{width: width, height: width}}/>
        </View>
      )}
    </View>
  );
};

export default App;
