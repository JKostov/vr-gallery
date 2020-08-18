import React, { Component } from 'react';
import {
  View,
  asset,
} from 'react-360';
import Entity from 'Entity';
import Picture from '../Picture';

export default class Gallery extends Component {

  render() {
    return (
      <View>
        <Entity
          style={{ transform: [{ scale: 1 }, { translate: [-1, -0.5, 0] }] }}
          source={{
            gltf2: asset('scene.gltf'),
          }}
        />

        <Picture x={1.57} y={0.8} z={-11.4} height={1.4} width={1.4} rotateY={-90} asset='mona-lisa.jpg' />
      </View>
    );
  }
}