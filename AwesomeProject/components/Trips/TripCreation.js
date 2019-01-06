import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connectWithStore } from '../../core/flux/store/connectWithStore';

class TripCreationComponent extends Component {
    render() {
        return (
            <View>
                <Text>Trip Name</Text>
                <Text>ContactInfo</Text>
                <Text>Destination</Text>
                <Text>Depart From</Text>
                <Text>Date From</Text>
                <Text>Date To</Text>
                <Text>Headcount</Text>
                <Text>Description</Text>
            </View>
        )

    }
}

function mapStateToProps(state, ownProps) {
    return {

    };
}

export const TripCreation = connectWithStore(mapStateToProps, TripCreationComponent);