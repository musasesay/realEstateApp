import React from 'react'
import { StatusBar, TouchableOpacity, TouchableHighlight, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Picker, Platform, SafeAreaView, View, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, FooterTab, Label, Badge } from 'native-base'
import RadioGroup from 'react-native-custom-radio-group'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/PropertyAdd/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export const propertyWizard = [{
    label: 'Overview',
    value: 'add_overview'
}, {
    label: 'Location',
    value: 'add_location'
}, {
    label: 'Amenities',
    value: 'add_amenities'
}, {
    label: 'Photos',
    value: 'add_photos'
}];

export const propertyNo = [{
    label: '1',
    value: 'no_1'
}, {
    label: '2',
    value: 'no_2'
}, {
    label: '3',
    value: 'no_3'
}, {
    label: '4',
    value: 'no_4'
}, {
    label: '5+',
    value: 'no_5'
}];

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            country: null
        }

    }
    render() {
        return <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#7E8BF5" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionBarBtn} onPress={() => {
                        NavigationService.navigate('MemberProperties')
                    }}>
                        <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{'Create'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                </View>
            </Header>

            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <View style={Styles.type}>
                    <RadioGroup
                        containerStyle={Styles.typeBg}
                        initialValue={'add_location'}
                        buttonContainerStyle={Styles.typeBtn}
                        buttonTextStyle={Styles.typeBtnText}
                        buttonContainerActiveStyle={Styles.typeBtnActive}
                        buttonContainerInactiveStyle={Styles.typeBtnInactive}
                        buttonTextActiveStyle={Styles.typeActiveText}
                        buttonTextInactiveStyle={Styles.typeInactiveText}
                        radioGroupList={propertyWizard} />
                </View>

                <View style={Styles.section}>


                    <View style={Styles.row}>
                        <Label style={Styles.label}>Address</Label>
                        <TextInput style={Styles.textInput} placeholder={'e.g. 3-277-10, 1st Street'} />
                    </View>
                    <View style={Styles.row}>
                        <Label style={Styles.label}>City</Label>
                        <TextInput style={Styles.textInput} placeholder={'e.g. Streatham'} />
                    </View>
                    <View style={Styles.row}>
                        <Label style={Styles.label}>State</Label>
                        <TextInput style={Styles.textInput} placeholder={'e.g. London'} />
                    </View>

                    <View style={Styles.rowInline}>
                        <View style={Styles.col}>
                            <Label style={Styles.label}>Postcode</Label>
                            <TextInput style={Styles.textInput} placeholder={'e.g. SW16'} />
                        </View>
                        <View style={Styles.col}>
                        </View>
                    </View>
                    <View style={Styles.row}>
                        <Label style={Styles.label}>Country</Label>
                        <View style={Styles.bgGrey}>
                            <Picker
                                selectedValue={this.state.country}
                                onValueChange={(itemValue, itemIndex) => this.setState({ country: itemValue })}>
                                <Picker.Item label="United Kingdom" value="uk" />
                                <Picker.Item label="Spain" value="es" style={Styles.pickerText} />
                            </Picker>
                        </View>
                    </View>

                    <View style={Styles.itemFooter}>
                        <Button iconLeft transparent style={Styles.itemBtn} onPress={() => {
                            NavigationService.navigate('MemberPropertyAdd')
                        }}>
                            <Icon name="arrow-back" type="MaterialIcons" style={Styles.itemIcon} />
                            <Text style={Styles.itemText}>PREVIOUS</Text>
                        </Button>
                        <Button iconRight transparent style={Styles.itemBtnActive} onPress={() => {
                            NavigationService.navigate('MemberPropertyAddAmenities')
                        }}>
                            <Text style={Styles.itemText}>NEXT</Text>
                            <Icon name="arrow-forward" type="MaterialIcons" style={Styles.itemIcon} />
                        </Button>
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