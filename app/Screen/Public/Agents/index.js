import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'

import NavigationService from '@Service/Navigation'


import Style from '@Theme/Style'
import Styles from '@Screen/Public/Agents/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    render() {
        return <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#7E8BF5" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionBarBtn} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{'Agents'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                </View>
            </Header>

            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <View style={Styles.sectionGrey}>
                    <View style={Styles.agent}>
                        <TouchableOpacity style={Styles.btnAgent} onPress={() => {
                            NavigationService.navigate('PublicAgentDetail')
                        }}>
                            <Image source={{ uri: 'https://cdn.stocksnap.io/img-thumbs/960w/ZUAZ22R9AL.jpg' }} resizeMode={'cover'} style={Styles.btnAgentImg} />
                            <View style={Styles.btnAgentLocation}>
                                <Text style={Styles.btnAgentText}>Kent</Text>
                                <Text style={Styles.btnAgentCity}>London</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnAgent} onPress={() => {
                            NavigationService.navigate('PublicAgentDetail')
                        }}>
                            <Image source={{ uri: 'https://marketplace.canva.com/MACZWXFzQLQ/1/screen/canva-young-man%2C-portrait%2C-beard%2C-young%2C-man%2C-male-MACZWXFzQLQ.jpg' }} resizeMode={'cover'} style={Styles.btnAgentImg} />
                            <View style={Styles.btnAgentLocation}>
                                <Text style={Styles.btnAgentText}>George</Text>
                                <Text style={Styles.btnAgentCity}>Manchester</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnAgent} onPress={() => {
                            NavigationService.navigate('PublicAgentDetail')
                        }}>
                            <Image source={{ uri: 'https://marketplace.canva.com/MACZiQ5lL7Y/1/screen/canva-woman%2C-autumn%2C-young%2C-female%2C-pretty%2C-young-woman-MACZiQ5lL7Y.jpg' }} resizeMode={'cover'} style={Styles.btnAgentImg} />
                            <View style={Styles.btnAgentLocation}>
                                <Text style={Styles.btnAgentText}>Aberesh</Text>
                                <Text style={Styles.btnAgentCity}>London</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnAgent} onPress={() => {
                            NavigationService.navigate('PublicAgentDetail')
                        }}>
                            <Image source={{ uri: 'https://marketplace.canva.com/MACZWQeM4XI/1/screen/canva-human%2C-man%2C-portrait%2C-young-man%2C-migration%2C-afghan-MACZWQeM4XI.jpg' }} resizeMode={'cover'} style={Styles.btnAgentImg} />
                            <View style={Styles.btnAgentLocation}>
                                <Text style={Styles.btnAgentText}>Jack</Text>
                                <Text style={Styles.btnAgentCity}>Manchester</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnAgent} onPress={() => {
                            NavigationService.navigate('PublicAgentDetail')
                        }}>
                            <Image source={{ uri: 'https://marketplace.canva.com/MACZWa0bp_w/1/screen/canva-woman%2C-escorca%2C-pride%2C-spain%2C-model%2C-white-and-black-MACZWa0bp_w.jpg' }} resizeMode={'cover'} style={Styles.btnAgentImg} />
                            <View style={Styles.btnAgentLocation}>
                                <Text style={Styles.btnAgentText}>Ainsley</Text>
                                <Text style={Styles.btnAgentCity}>London</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnAgent} onPress={() => {
                            NavigationService.navigate('PublicAgentDetail')
                        }}>
                            <Image source={{ uri: 'https://marketplace.canva.com/MACVcuGGqe8/1/screen/canva-travel-guide%2C-tourist%2C-man%2C-belfast%2C-people-MACVcuGGqe8.jpg' }} resizeMode={'cover'} style={Styles.btnAgentImg} />
                            <View style={Styles.btnAgentLocation}>
                                <Text style={Styles.btnAgentText}>Noah</Text>
                                <Text style={Styles.btnAgentCity}>Manchester</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                </View>


            </Content>

            <Footer style={Style.greyTopLine}>
                <FooterTab style={Style.bgBot}>
                    <Button style={Style.bgBot} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Icon name="home" type="FontAwesome" style={Style.textBlue} />
                    </Button>
                    <Button style={Style.bgBot} onPress={() => {
                        NavigationService.navigate('PublicPropertySearch')
                    }}>
                        <Icon name="search" type="Octicons" style={Style.textBlue} />
                    </Button>
                    <Button style={Style.bgBot} onPress={() => {
                        NavigationService.navigate('MemberHome')
                    }}>
                        <Icon name="user" type="FontAwesome" style={Style.textActive} />
                    </Button>
                    <Button style={Style.bgBot} onPress={() => {
                        NavigationService.navigate('MemberFavorites')
                    }}>
                        <Icon name="heart" type="FontAwesome" style={Style.textBlue} />
                    </Button>
                    <Button style={Style.bgBot} onPress={() => {
                        NavigationService.navigate('MemberMessages')
                    }}>
                        <Icon name="bell" type="Entypo" style={Style.textBlue} />
                    </Button>
                </FooterTab>
            </Footer>

        </Container>
    }
}