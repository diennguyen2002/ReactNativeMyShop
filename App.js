import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Main from './src/Components/Main/Main.js';
import Authentication from './src/Components/Authentication/Authentication.js';
import ChangeInfo from './src/Components/ChangeInfo/ChangeInfo.js';
import OrderHistory from './src/Components/OrderHistory/OrderHistory.js';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" headerMode="none">
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen
            name="Authentication"
            component={Authentication}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="ChangeInfo"
            component={ChangeInfo}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="OrderHistory"
            component={OrderHistory}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
