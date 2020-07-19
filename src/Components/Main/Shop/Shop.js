import React, {Component} from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';
import Header from './Header';

const Tab = createBottomTabNavigator();

export default class Shop extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header open={this.props.open} />
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
      </View>
    );
  }
}
