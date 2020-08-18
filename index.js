import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  AmbientLight,
  Image,
} from 'react-360';
import Entity from 'Entity';

export default class vr_gallery extends React.Component {
  render() {
    return (
      <View>

        <AmbientLight intensity={1} style={{ color: 'white', transform: [
            {translate: [0, 0, 0]}] }}/>

        {/* <Entity
          style={{transform: [
            {scale: 1},
            {translate: [-1, -0.5, 0]}]
          }}
          source={{
            gltf2: asset('scene.gltf')
          }}
      /> */}

      <View style={{ backgroundColor: 'red', transform: [
            {scale: 1},
            {translate: [-3, 0, -2]},
            {rotateY: 90}]
          }}>
            <Text>
              Asd
            </Text>
          </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('vr_gallery', () => vr_gallery);
