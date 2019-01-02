import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput, Image, TouchableHighlight } from 'react-native';
import { connectWithStore } from '../../core/flux/store/connectWithStore';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

class WelcomeComponent extends Component {
    render() {
        return (
            <View>
                <LoginButton
                    publishPermissions={[]}
                    readPermissions={['public_profile', 'email']}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("Login failed with error: " + error.message);
                            } else if (result.isCancelled) {
                                const { navigation } = this.props;
                                alert("Login was cancelled");
                                const navigate = navigation.getParam('navigation');
                                navigate('LandingScreen', { navigation: navigate });
                            } else {
                                AccessToken.getCurrentAccessToken().then((data) => {
                                    console.log(data);
                                    const { accessToken } = data
                                    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + accessToken)
                                        .then((response) => response.json())
                                        .then((json) => {
                                            console.log("User Info " + json.name + json.email + json.id)
                                            const { navigation } = this.props;
                                            const navigate = navigation.getParam('navigation');
                                            navigate('UserCreationScreen', { navigation: navigate, name: json.name, email: json.email })
                                        })
                                        .catch(() => {
                                            reject('ERROR GETTING DATA FROM FACEBOOK')
                                        })
                                })

                            }
                        }
                    }
                    onLogoutFinished={() => alert("User logged out")} />
            </View>
        )

    }
}

function mapStateToProps(state, ownProps) {
    return {

    };
}

export const WelcomePage = connectWithStore(mapStateToProps, WelcomeComponent);
