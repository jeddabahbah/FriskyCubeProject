import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import SplashScreen from './splashScreen/splashScreen'

class App extends Component {
  render() {
    return (
      <SplashScreen duration={3000} backgroundColor={styles.splashScreenContainer}>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          This file open from App.js
        </Text>
      </View>
      </SplashScreen>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  splashScreenContainer:{
    backgroundColor:'blue'
  },

});

export default App;