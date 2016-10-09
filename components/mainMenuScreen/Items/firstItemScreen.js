import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Header, Title } from 'native-base';
import { StyleSheet, Image, View } from 'react-native';

class FirstItem extends Component {

  render() {
    return (
        <Image source={require('./../../../assets/bg2.png')} style={styles.container}>

        <Container>
            <Header>    
                <Title>First</Title>
            </Header>

            <View>
                <Text style={styles.welcome}>This is first item!!!</Text>
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
    

export default FirstItem;