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
          style={{ transform: [{ scale: 1 }, { translate: [0, 0, 0] }] }}
          source={{
            gltf2: asset('scene.gltf'),
          }}
        />

        <Picture x={2.57} y={1.4} z={-11.4} height={1.4} width={1.4} rotateY={-90} asset='mona-lisa.jpg' />
        <Picture x={2.57} y={2.8} z={-8.2} height={1.4} width={1.4} rotateY={-90} asset='' />
        <Picture x={2.41} y={4.78} z={-4.64} height={2.5} width={1.7} rotateY={-90} asset='' />
        <Picture x={2.35} y={6.9} z={-0.64} height={1.8} width={1.8} rotateY={-90} asset='' />
        <Picture x={2.35} y={8.72} z={2.94} height={1.8} width={1.8} rotateY={-90} asset='' />

        <Picture x={-3.93} y={10.62} z={3.98} height={1.72} width={1.34} rotateY={90} asset='' />
        <Picture x={-3.93} y={12.34} z={1.8} height={1.72} width={1.34} rotateY={90} asset='' />
        <Picture x={-3.93} y={14.05} z={-2.99} height={1.7} width={1.34} rotateY={90} asset='' />
        <Picture x={-3.93} y={15.76} z={-4.64} height={1.7} width={1.34} rotateY={90} asset='' />
        <Picture x={-3.93} y={17.46} z={-6.37} height={1.7} width={1.34} rotateY={90} asset='' />
        <Picture x={-4.8} y={19.15} z={-12.38} height={1.7} width={3.08} rotateY={90} asset='' />

        <Picture x={-5.25} y={20.85} z={-12.38} height={1.7} width={3.08} rotateY={-90} asset='' />
        <Picture x={-4.2} y={22.34} z={-6.38} height={1.3} width={1} rotateY={-90} asset='' />
        <Picture x={-4.2} y={23.64} z={-2.97} height={1.3} width={1} rotateY={-90} asset='' />
        <Picture x={-4.41} y={25.22} z={-4.66} height={1.8} width={1.4} rotateY={-90} asset='' />
        <Picture x={-4.41} y={27} z={1.8} height={1.8} width={1.4} rotateY={-90} asset='' />
        <Picture x={-4.41} y={28.8} z={3.97} height={1.8} width={1.4} rotateY={-90} asset='' />

        <Picture x={-10.61} y={30.26} z={2.64} height={1.4} width={1.4} rotateY={90} asset='' />
        <Picture x={-10.61} y={31.66} z={-0.58} height={1.4} width={1.4} rotateY={90} asset='' />
        <Picture x={-10.75} y={33.66} z={-4.13} height={2.6} width={1.7} rotateY={90} asset='' />
        <Picture x={-10.79} y={35.86} z={-8.14} height={1.8} width={1.8} rotateY={90} asset='' />
        <Picture x={-10.79} y={37.66} z={-11.72} height={1.8} width={1.8} rotateY={90} asset='' />
      </View>
    );
  }
}