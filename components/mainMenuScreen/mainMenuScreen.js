import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


class MainMenuScreen extends Component {
  render() {
    return (
      //<Image source={require('./../../assets/bg2.png')}>
      <View style={styles.container}>
      <Image source={require('./../../assets/bg2.png')}>
        <Text style={styles.welcome}>
          Welcome to FriskyCube
        </Text>
        <Text style={styles.instructions}>
          This file open from MainMenuScreen.
        </Text>
        </Image>
      </View>
      //</Image>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:null,
    height:null,
    

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
  splashScreenContainer:{
    backgroundColor:'#BBDEFB',
    
  },

});

export default MainMenuScreen;