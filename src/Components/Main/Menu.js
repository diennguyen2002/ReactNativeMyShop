import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Menu extends Component {
  gotoAuthentication() {
    this.props.navigation.navigate('Authentication');
  }

  gotoChangeInfo() {
    this.props.navigation.navigate('ChangeInfo');
  }

  gotoOrderHistory() {
    this.props.navigation.navigate('OrderHistory');
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#CC493E'}}>
        <Text> Menu component </Text>
        <TouchableOpacity onPress={()=>this.gotoAuthentication()}>
            <Text>gotoAuthentication</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.gotoChangeInfo()}>
            <Text>gotoChangeInfo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.gotoOrderHistory()}>
            <Text>gotoOrderHistory</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
