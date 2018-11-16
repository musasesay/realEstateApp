import React from 'react'
import { StatusBar, TouchableOpacity, TouchableHighlight, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, View, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, FooterTab, Badge } from 'native-base'

import NavigationService from '@Service/Navigation'

import PROPERTIES from './Properties'


import Style from '@Theme/Style'
import Styles from '@Screen/Member/Favorites/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    render() {
        return <Container style={Style.bgMain}>
        <Header style={Style.navigation}>
        <StatusBar backgroundColor="#7E8BF5" animated barStyle="light-content" />

        <View style={Style.actionBarLeft}>
            <Button transparent style={Style.actionBarBtn} onPress={() => {
                NavigationService.navigate('MemberHome')
            }}>
                <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
            </Button>
        </View>
        <View style={Style.actionBarMiddle}>
            <Text style={Style.actionBarText}>{'Favorites'.toUpperCase()}</Text>
        </View>
        <View style={Style.actionBarRight}>
        </View>
    </Header>

            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <ImageBackground source={require('@Asset/images/property-bg.png')} style={Styles.homeBg}>

                    <View style={Styles.section}>
                        <FlatList
                            data={PROPERTIES}
                            style={Styles.item}
                            renderItem={({ item, separators }) => (
                                <TouchableHighlight underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicPropertyDetail') }}>
                                    <View style={Styles.record}>
                                        <Image source={{ uri: item.image }} style={Styles.itemImg} />
                                        <View style={Styles.itemInfo}>
                                            <Text style={Styles.itemTitle}>{item.price}</Text>
                                            <Text style={Styles.itemLocation}>{item.location}</Text>
                                            <View style={Styles.itemRow}>
                                                <View style={Styles.itemOverview}>
                                                    <Icon name="bed" type="FontAwesome" style={Styles.itemIcon} />
                                                    <Text style={Styles.itemNo}>{item.bedroom}</Text>
                                                </View>
                                                <View style={Styles.itemOverview}>
                                                    <Icon name="bathtub" type="FontAwesome" style={Styles.itemIcon} />
                                                    <Text style={Styles.itemNo}>{item.bathroom}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={Styles.trash}>
                                            <Button transparent onPress={() => {
                                                NavigationService.navigate('MemberFavorites')
                                            }}>
                                                <Icon name="trash-o" type="FontAwesome" style={Styles.itemIcon} />
                                            </Button>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            )}
                        />
                    </View>


                </ImageBackground>

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
                        <Icon name="heart" type="FontAwesome" style={Style.textBlueActive} />
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