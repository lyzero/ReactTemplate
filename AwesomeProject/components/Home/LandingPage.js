import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput, Image, TouchableHighlight } from 'react-native';
import { connectWithStore } from '../../core/flux/store/connectWithStore';

const styles = StyleSheet.create({
    searchBar: {
        flex: 1,
        paddingTop: 22
    },
    textInput: {
        height: 48,
        color: "black",
        flex: 1,
        marginLeft: 16,
        fontSize: 16,
    },
    searchBarContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderRadius: 24,
        borderColor: "#FFFFFF",
        height: 100,
        marginLeft: 16,
        flexDirection: "row",
        // justifyContent: "space-between",
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    companions: {
        width: 100,
        height: 100,
    }
})


class LandingPageComponent extends Component {
    render() {
        console.log("Render todos", this.props.todos)
        const { navigation } = this.props;
        const navigate = navigation.getParam('navigation');
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{ top: 20, marginLeft: 16, height: 50, marginRight: 16, backgroundColor: "white", borderColor: 'black', borderWidth: 2, borderRadius: 24, flexDirection: 'row' }}>
                    <Image source={require('./HomeAssets/search.png')} style={{ marginLeft: 16, width: 40, height: 38, marginTop: 5, }} />
                    <TextInput
                        style={{ marginLeft: 16, height: 40 }}
                        onChangeText={(text) => { }}
                        value="Search Destination, Person..."
                    />
                </View>
                <View style={{ marginTop: 56, marginLeft: 16, height: 100, marginRight: 16 }}>
                    <Text style={{ fontWeight: 'bold' }}>Top Destination</Text>
                    <View style={{ flexDirection: 'row', top: 10, }}>
                        <Image source={require('./HomeAssets/Destinations/YellowStone.jpg')} style={{ marginLeft: 16, width: 100, height: 100, marginTop: 5, }} />
                        <Image source={require('./HomeAssets/Destinations/Prage.jpg')} style={{ marginLeft: 16, width: 100, height: 100, marginTop: 5, }} />
                        <Image source={require('./HomeAssets/Destinations/MoutainRainer.jpg')} style={{ marginLeft: 16, width: 100, height: 100, marginTop: 5, }} />
                    </View>
                </View>

                <View style={{ top: 66, marginLeft: 16, height: 100, marginRight: 16 }}>
                    <Text style={{ fontWeight: 'bold' }}>See What Your Friend Recently Went</Text>
                    <View style={{ flexDirection: 'row', top: 10, }}>
                        <Image source={require('./HomeAssets/Destinations/YellowStone.jpg')} style={{ marginLeft: 16, width: 100, height: 100, marginTop: 5, }} />
                        <Image source={require('./HomeAssets/Destinations/Prage.jpg')} style={{ marginLeft: 16, width: 100, height: 100, marginTop: 5, }} />
                        <Image source={require('./HomeAssets/Destinations/MoutainRainer.jpg')} style={{ marginLeft: 16, width: 100, height: 100, marginTop: 5, }} />
                    </View>
                </View>

                <View style={{ top: 136, marginLeft: 16, height: 100, marginRight: 16 }}>
                    <Text style={{ fontWeight: 'bold' }}>Looking For Companian</Text>
                    <View style={{ flexDirection: 'row', top: 10, }}>
                        <TouchableHighlight style={{ marginLeft: 16 }} onPress={() =>
                            console.log("On Press")
                        }>
                            <Image source={require('./HomeAssets/Companions/Girl1.jpg')} style={styles.companions} />
                        </TouchableHighlight>

                        <TouchableHighlight style={{ marginLeft: 16 }} onPress={() => {
                            navigate('Profile')
                        }}>
                            <Image source={require('./HomeAssets/Companions/Girl2.jpg')} style={styles.companions} />
                        </TouchableHighlight>

                        <TouchableHighlight style={{ marginLeft: 16 }} onPress={() =>
                            console.log("On Press")
                        }>
                            <Image source={require('./HomeAssets/Companions/Girl3.jpg')} style={styles.companions} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log("map state to props", state.todos)
    return {
        todos: state.todos,
    };
}

export const LandingPage = connectWithStore(mapStateToProps, LandingPageComponent);
