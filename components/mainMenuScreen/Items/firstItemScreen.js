import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Header, Title } from 'native-base';
import { StyleSheet, Image, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

class FirstItem extends Component {

  render() {
    return (
        <Image source={require('./../../../assets/bgblur.png')} style={styles.container}>

        <Container>
            <Header>    
                <Title>First</Title>
            </Header>

                 <Content>
                    <Grid>
                        <Col style={{ backgroundColor: '#D954D7', height: 200 }}></Col>
                        <Col style={{ backgroundColor: '#D93735', height: 200  }}></Col>
                    </Grid>
                </Content>
            
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