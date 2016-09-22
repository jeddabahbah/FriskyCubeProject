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
      /*<View style={styles.container}>
      <Image source={require('./../../assets/bg2.png')}>
        <Text style={styles.welcome}>
          Welcome to FriskyCube
        </Text>
        <Text style={styles.instructions}>
          This file open from MainMenuScreen.
        </Text>
        </Image>
      </View>*/
      //</Image>
      <View style={styles.container}>
      <Image source={require('./../../assets/bg2.png')}>
        <Text style={styles.welcome}>
          Welcome to FriskyCube
        </Text>

        <View style={{flexDirection: 'row', height: 100,padding:5}}>
          <View style={{backgroundColor: 'red',flex: 0.3}}><Text>Picture</Text></View>
          <View style={{backgroundColor: 'green',flex: 0.5}}><Text>Detail</Text></View>
        </View>

        <View style={{flexDirection: 'row', height: 100,padding:5}}>
          <View style={{backgroundColor: 'red',flex: 0.3}}><Text>Picture</Text></View>
          <View style={{backgroundColor: 'green',flex: 0.5}}><Text>Detail</Text></View>
        </View>

        <View style={{flexDirection: 'row', height: 100,padding:5}}>
          <View style={{backgroundColor: 'red',flex: 0.3}}><Text>Picture</Text></View>
          <View style={{backgroundColor: 'green',flex: 0.5}}><Text>Detail</Text></View>
        </View>
    
        </Image>
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:null,
    height:null,
    

  },
  welcome: {
    flexDirection: 'row',
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