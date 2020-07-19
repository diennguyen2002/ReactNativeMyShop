import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import ic_Menu from '../../../Media/appIcon/ic_menu.png';
import ic_Logo from '../../../Media/appIcon/ic_logo.png';

const {height} = Dimensions.get('window');

export default class Header extends Component {
  openMenu = () => {
    const {open} = this.props;
    open();
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => this.openMenu()}>
            <Image source={ic_Menu} style={styles.iconImage} />
          </TouchableOpacity>
          <Text style={styles.iconText}>Wearing a dress</Text>
          <Image source={ic_Logo} style={styles.iconImage} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="What do you want to buy?" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height / 7,
    backgroundColor: '#11A8CD',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  iconText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    height: height / 15,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textInput:{
      fontSize: 20
  },
});
