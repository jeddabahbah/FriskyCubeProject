import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Header, Title } from 'native-base';
import { StyleSheet, Image, View } from 'react-native';

class SecondItem extends Component {

  render() {
    return (
        <Image source={require('./../../../assets/bgblur.png')} style={styles.container}>
          <Container>
            <Header>    
                <Title>Second</Title>
            </Header>
            
            <View>
                <Text style={styles.welcome}>This is second item!!!</Text>
            </View>   
          </Container>
        </Image>
    );
  }

}

const styles = StyleSheet.create({
     container: {   
        flex: 10,
        justifyContent: 'center',
        width:null,
        height:null,
    },
    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'white',
  },

});
    

export default SecondItem;