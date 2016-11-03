'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight, Image } from 'react-native';

import SplashScreen from './splashScreen/splashScreen';
import MainMenu from './mainMenuScreen/mainMenuScreen';
import FirstItem from './mainMenuScreen/Items/firstItemScreen';
import SecondItem from './mainMenuScreen/Items/secondItemScreen';
import ThirdItem from './mainMenuScreen/Items/thirdItemScreen';
import FourthItem from './mainMenuScreen/Items/fourthItemScreen';
import FifthItem from './mainMenuScreen/Items/fifthItemScreen';
//import TestNavComponent from './mainMenuScreen/testing/testnav';
//import PageComponent from './mainMenuScreen/testing/page';
//import PageTwoComponent from './mainMenuScreen/testing/pagetwo';


var NavigatorBarRouteMapper = {
  LeftButton: function(route, navigator, index){
    if(route.name == 'MainMenu'){
      return null
    }

    return(
        <TouchableHighlight onPress={() => {
          if(index > 0){
            navigator.pop();
          }
        }}>
            <Image style={{backgroundColor:'#090123',width:30,height:30,marginTop:10,marginLeft:5,}} source={require('./../assets/icon_back.png')} />
        </TouchableHighlight>
      )
  },

  RightButton: function(route, navigator, index){
    return null;
  },

  Title: function(route, navigator, index){
    if(route.name == 'MainMenu'){
      return null
    }

    return(
        <Text style={{marginTop:15, color: '#fff',fontSize:15}}>
          {route.title}
        </Text>
      )
  }

};

class App extends Component {

  renderScene(route, navigator){
      switch(route.name){
          case 'MainMenu':
            return(
                <MainMenu navigator={navigator} route={route} />
              );
          case 'FirstItem':
            return(
                <FirstItem navigator={navigator} route={route} />
              );
          case 'SecondItem':
            return(
                <SecondItem navigator={navigator} route={route} />
              );
          case 'ThirdItem':
            return(
                <ThirdItem navigator={navigator} route={route} />
              );
          case 'FourthItem':
            return(
                <FourthItem navigator={navigator} route={route} />
              );
         case 'FifthItem':
            return(
                <FifthItem navigator={navigator} route={route} />
              );
         
         
      }
  }

  render() {
    return (
      <SplashScreen duration={3000}>
          <Navigator style={{backgroundColor:'#fff'}}
          initialRoute={{name: 'MainMenu'}} 
          renderScene={this.renderScene}
          configureScene={(route) => {
            if(route.sceneConfig){
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight
          }} 
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigatorBarRouteMapper} />
          } 

          />
      </SplashScreen>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;