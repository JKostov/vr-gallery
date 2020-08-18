import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-360';
import Lights from './components/Lights';
import Gallery from './components/Gallery';

export default class vr_gallery extends React.Component {
  render() {
    return (
      <View>
        <Lights />

        <Gallery />

      </View>
    );
  }
}

AppRegistry.registerComponent('vr_gallery', () => vr_gallery);
