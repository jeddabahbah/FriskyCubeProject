import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Header, Title, Button, Icon } from 'native-base';
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';


class MainMenuScreen extends Component {
    onClickOne(){
        this.props.navigator.push({
            title:'กลุ่มดาวแกะ',
            name: 'FirstItem',
            passProps:{}
        });
    }

  render() {
    return (

       
        //this backup
        <Image source={require('./../../assets/bg_star.png')} style={styles.container}>
           <Container>
            <Header style={styles.headernavbar}>  
                <Button transparent>
                <Thumbnail style={styles.buttonIcon} size={30} source={require('./../../assets/icon_howto.png')} />
                </Button>
                    <Title>กลุ่มดาว</Title>

                <Button transparent>
                <Thumbnail style={styles.buttonIcon} size={30} source={require('./../../assets/icon_bt.png')} />
                </Button>
            </Header>

                <Content>
                    <Grid>
                    
                        <Row style={styles.item}>
                                <Col>
                                     <View style={styles.detailStar} onPress={(this.onClickOne.bind(this))}>
                                        <Text style={{color:'white'}}> กลุ่มดาวแกะ </Text>
                                     </View> 
                                     <View>
                                          <TouchableHighlight onPress={(this.onClickOne.bind(this))}>
                                            <Image style={styles.picStar} source={require('./../../assets/star_aries.png')} />
                                          </TouchableHighlight> 
                                     </View>
                                </Col>
                        </Row>




                    </Grid>
                </Content>
            </Container>
        </Image>

    );
  }

}

const styles = StyleSheet.create({
    container: {   
        flex: 1,
        justifyContent: 'center',
        width:null,
        height:null,
       
    },
    headernavbar: {
        backgroundColor:'#090123',
    },
    buttonIcon:{
        backgroundColor:'#090123',
    },
    starImage:{
        borderColor:'white',
    },
    item:{
        backgroundColor: '#f2f2f2',
        height: 200,
        zIndex: 500,
        margin: 10,
        opacity: 0.3,
    },
    picStar:{
        zIndex:20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        top:0,
        width:380,height:180,marginLeft:-20,marginBottom:20,
      
    },
    detailStar:{
        zIndex:30,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight:30,
        marginBottom:-50,

    },


});
    

export default MainMenuScreen;