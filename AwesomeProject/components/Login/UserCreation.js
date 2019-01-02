import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connectWithStore } from '../../core/flux/store/connectWithStore';
import { travelBackendEndpoint, createUserTarget } from '../Constants/Endpoints'

class UserCreationComponent extends Component {
    render() {

        const { navigation } = this.props;
        const name = navigation.getParam('name', '');
        const email = navigation.getParam('email', '');
        return (
            <View>
                <Text>{name}</Text>
                <Text>{email}</Text>
                <Button
                    title="Create User"
                    onPress={() => {
                        fetch(travelBackendEndpoint + createUserTarget, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "user_name": name,
                                "user_email": email,
                                "user_phone": "test"
                            }),
                        }).then(() => {
                            const { navigation } = this.props;
                            const navigate = navigation.getParam('navigation');
                            navigate('LandingScreen', { navigation: navigate })
                        });
                    }}
                />
            </View>
        )

    }
}

function mapStateToProps(state, ownProps) {
    return {

    };
}

export const UserCreation = connectWithStore(mapStateToProps, UserCreationComponent);
