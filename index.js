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

        <AmbientLight intensity={1} style={{ color: 'white', transform: [
            {translate: [0, 0, 0]}] }}/>

        <Entity
          style={{transform: [
            {scale: 3},
            {translate: [10, 0, 0]}]
          }}
          source={{
            gltf2: asset('test/scene.gltf')
          }}
      />
      </View>
    );
  }
};

AppRegistry.registerComponent('vr_gallery', () => vr_gallery);
