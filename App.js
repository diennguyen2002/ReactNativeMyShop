import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './src/Components/Main/Main.js';
import Authentication from './src/Components/Authentication/Authentication.js';
import ChangeInfo from './src/Components/ChangeInfo/ChangeInfo.js';
import OrderHistory from './src/Components/OrderHistory/OrderHistory.js';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return ( 
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main' headerMode='none'>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Authentication" component={Authentication} />
          <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
          <Stack.Screen name="OrderHistory" component={OrderHistory} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
