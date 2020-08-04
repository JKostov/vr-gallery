import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  AmbientLight,
} from 'react-360';
import Entity from 'Entity';

export default class vr_gallery extends React.Component {
  render() {
    return (
      <View>

        <AmbientLight intensity={0.4} style={{ color: 'white', transform: [
            {translate: [0, 0, 0]}] }}/>

        <Entity
          style={{transform: [
            {scale: 3},
            {translate: [0, 0, 0]}]
          }}
          source={{
            obj: asset('art-gallery-template.obj'),
            mtl: asset('art-gallery-template.mtl'),
          }}
      />
      </View>
    );
  }
};

AppRegistry.registerComponent('vr_gallery', () => vr_gallery);
