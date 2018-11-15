import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput, Image, TouchableHighlight } from 'react-native';
import { connectWithStore } from '../../core/flux/store/connectWithStore';
import { LoginButton } from 'react-native-fbsdk';

class WelcomeComponent extends Component {
    render() {
        return (
            <View>
                <LoginButton
                    publishPermissions={[]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("Login failed with error: " + error.message);
                            } else if (result.isCancelled) {
                                alert("Login was cancelled");
                            } else {
                                alert("Login was successful with permissions: " + result.grantedPermissions)
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
