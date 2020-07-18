import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';

const Tab = createBottomTabNavigator();
const { height } = Dimensions.get('window');

export default class Shop extends Component {
  openMenu = () => {
    const {open} = this.props;
    open();
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: height/8 }} >
          <TouchableOpacity onPress={()=>this.openMenu()}>
            <Text>OpenMenu</Text>
          </TouchableOpacity>
        </View>
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
