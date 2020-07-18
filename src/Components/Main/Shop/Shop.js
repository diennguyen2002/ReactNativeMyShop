import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class Shop extends Component {
    openMenu=()=>{
        const { open } = this.props
        open()
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor: '#FFD764'}}>
                <Text> Shop component </Text>
                <TouchableOpacity onPress={()=>this.openMenu()}>
                    <Text>Open Menu</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
