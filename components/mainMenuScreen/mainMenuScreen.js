import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Header, Title, Button, Icon } from 'native-base';
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';


class MainMenuScreen extends Component {

    navigate(routeName){
        this.props.navigator.push({
            name: routeName
        })
    }    

  render() {
    return (
            
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
                                     <View style={styles.detailStar} >
                                        <Text onPress={this.navigate.bind(this,'firstItem')} 
                                              style={{color:'white'}}> กลุ่มดาวแกะ </Text>
                                     </View> 
                                     <View>
                                          <TouchableHighlight onPress={this.navigate.bind(this,'firstItem')}>
                                            <Image style={styles.picStar} source={require('./../../assets/star_aries.png')} />
                                          </TouchableHighlight> 
                                     </View>
                                </Col>
                        </Row>

                        <Row style={styles.item}>
                                <Col>
                                     <View style={styles.detailStar} >
                                        <Text onPress={this.navigate.bind(this,'secondItem')} 
                                              style={{color:'white'}}> กลุ่มดาววัว </Text>
                                     </View> 
                                     <View>
                                          <TouchableHighlight onPress={this.navigate.bind(this,'secondItem')}>
                                            <Image style={styles.picStar} source={require('./../../assets/star_taurush.png')} />
                                          </TouchableHighlight> 
                                     </View>
                                </Col>
                        </Row>

                        <Row style={styles.item}>
                                <Col>
                                     <View style={styles.detailStar} >
                                        <Text onPress={this.navigate.bind(this,'thirdItem')} 
                                              style={{color:'white'}}> กลุ่มดาวปู </Text>
                                     </View> 
                                     <View>
                                          <TouchableHighlight onPress={this.navigate.bind(this,'thirdItem')}>
                                            <Image style={styles.picStar} source={require('./../../assets/star_cancer.png')} />
                                          </TouchableHighlight> 
                                     </View>
                                </Col>
                        </Row>

                        <Row style={styles.item}>
                                <Col>
                                     <View style={styles.detailStar} >
                                        <Text onPress={this.navigate.bind(this,'fourthItem')} 
                                              style={{color:'white'}}> กลุ่มดาวสิงโต </Text>
                                     </View> 
                                     <View>
                                          <TouchableHighlight onPress={this.navigate.bind(this,'fourthItem')}>
                                            <Image style={styles.picStar} source={require('./../../assets/star_leo.png')} />
                                          </TouchableHighlight> 
                                     </View>
                                </Col>
                        </Row>


                        <Row style={styles.item}>
                                <Col>
                                     <View style={styles.detailStar} >
                                        <Text onPress={this.navigate.bind(this,'fifthItem')} 
                                              style={{color:'white'}}> กลุ่มดาวแพะ </Text>
                                     </View> 
                                     <View>
                                          <TouchableHighlight onPress={this.navigate.bind(this,'fifthItem')}>
                                            <Image style={styles.picStar} source={require('./../../assets/star_capricorn.png')} />
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
        flex: 10,
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