import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Header, Button, TitleButton, Icon, Title } from 'native-base';
import { StyleSheet, Image, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

class ThirdItem extends Component {

  render() {
    return (
        <Image source={require('./../../../assets/bg_star.png')} style={styles.container}>

        <Container>
            <Header style={styles.headernavbar}>  
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
    headernavbar: {
        backgroundColor:'#090123',
    },
    backIcon:{
        width:30,
        height:30,
    },


});
    

export default ThirdItem;