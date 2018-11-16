import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'

import NavigationService from '@Service/Navigation'

import PROPERTIES from './Properties'


import Style from '@Theme/Style'
import Styles from '@Screen/Member/Properties/Style'

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
                    <Text style={Style.actionBarText}>{'Properties'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                    <Button transparent style={Style.actionBtnRight} onPress={() => {
                        NavigationService.navigate('MemberPropertyAdd')
                    }}>
                        <Icon active name='plus' style={Style.actionIcon} type="FontAwesome" />
                    </Button>
                </View>
            </Header>


            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <View style={Styles.section}>
                    <FlatList
                        data={PROPERTIES}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, separators }) => (
                            <TouchableOpacity style={Styles.item} underlayColor='transparent' onPress={() => { NavigationService.navigate('MemberPropertyAdd') }}>
                                <View>
                                    <View>
                                        <Image source={{ uri: item.image }} style={Styles.itemImg} />
                                        <View style={Styles.itemImgBg} />
                                        <Icon name="check-circle" type="MaterialIcons" style={Styles.itemFavorite} />
                                    </View>
                                    <View style={Styles.itemRow}>
                                        <View style={Styles.itemOverview}>
                                            <View>
                                                <Text style={Styles.itemPrice}>{item.price}</Text>
                                                <Text style={Styles.itemLocation}>{item.location}</Text>
                                            </View>
                                        </View>
                                        <View style={Styles.itemOverview}>
                                            <Icon name="bed" type="FontAwesome" style={Styles.itemIcon} />
                                            <Text style={Styles.itemNo}>{item.bedroom}</Text>
                                        </View>
                                        <View style={Styles.itemOverview}>
                                            <Icon name="bathtub" type="FontAwesome" style={Styles.itemIcon} />
                                            <Text style={Styles.itemNo}>{item.bathroom}</Text>
                                        </View>
                                    </View>
                                    <View style={Styles.itemRowIcon}>
                                        <View style={Styles.itemLeft}>
                                            <View style={Styles.itemBtn}>
                                                <Icon name="edit" type="FontAwesome" style={Styles.itemLeftIcon} />
                                                <Text style={Styles.itemText}>EDIT</Text>
                                            </View>
                                            <View style={Styles.itemBtn}>
                                                <Icon name="trash" type="FontAwesome" style={Styles.itemLeftIcon} />
                                                <Text style={Styles.itemText}>DELETE</Text>
                                            </View>
                                        </View>
                                        <View style={Styles.itemRight}>
                                            <Text style={Styles.itemDate}>posted on:{"\n"} 15 Aug 2018</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
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