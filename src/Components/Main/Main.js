import React, {Component} from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop'

export default class Main extends Component {
  closeControlPanel = () => {
    this.drawer.close();
  };

  openControlPanel = () => {
    this.drawer.open();
  };

  render() {
    return (
      <Drawer 
        tapToClose={true}
        openDrawerOffset={0.4} 
        ref={(ref) => (this.drawer = ref)} 
        content={<Menu navigation={this.props.navigation}/>}>
        <Shop open={this.openControlPanel} />
      </Drawer>
    );
  }
}
