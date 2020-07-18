import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class OrderHistory extends Component {
    goBack(){
        const { navigation } = this.props;
        navigation.goBack();
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor: 'grey'}}>
                <Text> OrderHistory component </Text>
                <TouchableOpacity onPress={()=>this.goBack()}>
                    <Text>Go back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
