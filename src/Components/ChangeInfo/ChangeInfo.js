import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class ChangeInfo extends Component {
    goBack(){
        const { navigation } = this.props;
        navigation.goBack();
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor: 'grey'}}>
                <Text> ChangeInfo component </Text>
                <TouchableOpacity onPress={()=>this.goBack()}>
                    <Text>Go back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
