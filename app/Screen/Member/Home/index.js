import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, TouchableHighlight, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'

import NavigationService from '@Service/Navigation'

import MESSAGES from './Messages'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/Home/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    render() {
        return <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#7E8BF5" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionMenu} onPress={() => {
                        NavigationService.openDrawer()
                    }}>
                        <Image source={require('@Asset/images/menu.png')} />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{''.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                </View>
            </Header>


            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <View style={Styles.section}>

                    <View style={Styles.profile}>
                        <Image source={require('@Asset/images/avatar.png')} style={Styles.avatar} />
                        <View>
                            <Text style={Styles.profileName}>Hey Kent Parker!</Text>
                            <Text style={Styles.profileLocation}>Liverpool, United Kingdom</Text>
                        </View>
                    </View>

                    <ImageBackground source={require('@Asset/images/property-bg.png')} imageStyle={'cover'} style={Styles.curve} />

                    <View style={Styles.btnLayout}>
                        <TouchableOpacity style={Styles.btnBox} onPress={() => {
                            NavigationService.navigate('MemberProperties')
                        }}>
                            <Image source={require('@Asset/images/btn-property.png')} resizeMode={'cover'} style={Styles.btnImg} />
                            <Text style={Styles.btnText}>Properties</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.btnBox} onPress={() => {
                            NavigationService.navigate('MemberMessages')
                        }}>
                            <Image source={require('@Asset/images/btn-messages.png')} style={Styles.btnImg} />
                            <Text style={Styles.btnText}>Messages</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.btnBox} onPress={() => {
                            NavigationService.navigate('MemberProfile')
                        }}>
                            <Image source={require('@Asset/images/btn-boy.png')} style={Styles.btnImg} />
                            <Text style={Styles.btnText}>Profile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.btnBox} onPress={() => {
                            NavigationService.navigate('MemberFavorites')
                        }}>
                            <Image source={require('@Asset/images/btn-favorites.png')} style={Styles.btnImg} />
                            <Text style={Styles.btnText}>Favorites</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.btnBox} onPress={() => {
                            NavigationService.navigate('MemberSettings')
                        }}>
                            <Image source={require('@Asset/images/btn-settings.png')} style={Styles.btnImg} />
                            <Text style={Styles.btnText}>Settings</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.btnBox}>
                        </TouchableOpacity>
                    </View>

                    <View style={Styles.message}>
                        <View style={Styles.headerBg}>
                            <Icon name="envelope" type="FontAwesome" style={Styles.headerIcon} />
                            <Text style={Styles.sHeader}>{'Recent Messages'.toUpperCase()}</Text>
                            <Right>
                                <Button small rounded style={Styles.sBtn} onPress={() => { NavigationService.navigate('MemberMessages') }}>
                                    <Text style={Styles.sLink} >See All</Text>
                                </Button>
                            </Right>
                        </View>
                        <FlatList
                            data={MESSAGES}
                            style={Styles.item}
                            renderItem={({ item, separators }) => (
                                <TouchableHighlight underlayColor='transparent' onPress={() => { NavigationService.navigate('MemberMessages') }}>
                                    <View style={Styles.record}>
                                        <Image source={{ uri: item.image }} style={Styles.itemImg} />
                                        <View style={Styles.itemInfo}>
                                            <Text style={Styles.itemTitle}>{item.name}</Text>
                                            <Text style={Styles.itemDesc}>{item.desc}</Text>
                                        </View>
                                        <Text style={Styles.itemDate}>{item.date}</Text>
                                    </View>
                                </TouchableHighlight>
                            )}
                        />
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
                    <Button badge vertical style={Style.bgBot} onPress={() => {
                        NavigationService.navigate('MemberMessages')
                    }}>
                        <Badge><Text>1</Text></Badge>
                        <Icon name="bell" type="Entypo" style={Style.textBlue} />
                    </Button>
                </FooterTab>
            </Footer>

        </Container>
    }
}