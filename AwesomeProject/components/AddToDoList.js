import React, { Component } from 'react';
import { store } from '../'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { connectWithStore } from '../core/flux/store/connectWithStore'
import { addTodo } from '../core/flux/actions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})


class AddToDoListComponent extends Component {
    render() {
        console.log("Render todos", this.props.todos)
        return (
            <View>
                <FlatList
                    data={this.props.todos}
                    renderItem={({ item }) => <Text style={styles.item}>{item.id} {item.text}</Text>}
                />
                <Button
                    title="Add one more todo"
                    onPress={() =>
                        store.dispatch(addTodo('Learn about actions'))
                    }
                />
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

export const AddToDoList = connectWithStore(mapStateToProps, AddToDoListComponent);
