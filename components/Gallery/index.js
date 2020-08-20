import React, { Component } from 'react';
import {
  View,
  asset,
  NativeModules,
} from 'react-360';
import Entity from 'Entity';
import Picture from '../Picture';

const { KeyboardMovementModule } = NativeModules;

export default class Gallery extends Component {

  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      z: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => this.callCheck(), 1000);
  }

  callCheck() {
    KeyboardMovementModule.getValueWithCallback((x, z) => this.setState({ x, z }));
    setTimeout(() => this.callCheck(), 50);
  }

  render() {
    return (
      <View>
        <Entity
          style={{ transform: [{ scale: 1 }, { translate: [this.state.x, 0, this.state.z] }] }}
          source={{
            gltf2: asset('scene.gltf'),
          }}
        />

        <Picture x={2.57 + this.state.x} y={1.4} z={-11.4 + this.state.z} height={1.4} width={1.4} rotateY={-90} asset='mona-lisa.jpg' />
        <Picture x={2.57 + this.state.x} y={2.8} z={-8.2 + this.state.z} height={1.4} width={1.4} rotateY={-90} asset='' />
        <Picture x={2.41 + this.state.x} y={4.78} z={-4.64 + this.state.z} height={2.5} width={1.7} rotateY={-90} asset='' />
        <Picture x={2.35 + this.state.x} y={6.9} z={-0.64 + this.state.z} height={1.8} width={1.8} rotateY={-90} asset='' />
        <Picture x={2.35 + this.state.x} y={8.72} z={2.94 + this.state.z} height={1.8} width={1.8} rotateY={-90} asset='' />

        <Picture x={-3.93 + this.state.x} y={10.62} z={3.98 + this.state.z} height={1.72} width={1.34} rotateY={90} asset='' />
        <Picture x={-3.93 + this.state.x} y={12.34} z={1.8 + this.state.z} height={1.72} width={1.34} rotateY={90} asset='' />
        <Picture x={-3.93 + this.state.x} y={14.05} z={-2.99 + this.state.z} height={1.7} width={1.34} rotateY={90} asset='' />
        <Picture x={-3.93 + this.state.x} y={15.76} z={-4.64 + this.state.z} height={1.7} width={1.34} rotateY={90} asset='' />
        <Picture x={-3.93 + this.state.x} y={17.46} z={-6.37 + this.state.z} height={1.7} width={1.34} rotateY={90} asset='' />
        <Picture x={-4.8 + this.state.x} y={19.15} z={-12.38 + this.state.z} height={1.7} width={3.08} rotateY={90} asset='' />

        <Picture x={-5.25 + this.state.x} y={20.85} z={-12.38 + this.state.z} height={1.7} width={3.08} rotateY={-90} asset='' />
        <Picture x={-4.2 + this.state.x} y={22.34} z={-6.38 + this.state.z} height={1.3} width={1} rotateY={-90} asset='' />
        <Picture x={-4.2 + this.state.x} y={23.64} z={-2.97 + this.state.z} height={1.3} width={1} rotateY={-90} asset='' />
        <Picture x={-4.41 + this.state.x} y={25.22} z={-4.66 + this.state.z} height={1.8} width={1.4} rotateY={-90} asset='' />
        <Picture x={-4.41 + this.state.x} y={27} z={1.8 + this.state.z} height={1.8} width={1.4} rotateY={-90} asset='' />
        <Picture x={-4.41 + this.state.x} y={28.8} z={3.97 + this.state.z} height={1.8} width={1.4} rotateY={-90} asset='' />

        <Picture x={-10.61 + this.state.x} y={30.26} z={2.64 + this.state.z} height={1.4} width={1.4} rotateY={90} asset='' />
        <Picture x={-10.61 + this.state.x} y={31.66} z={-0.58 + this.state.z} height={1.4} width={1.4} rotateY={90} asset='' />
        <Picture x={-10.75 + this.state.x} y={33.66} z={-4.13 + this.state.z} height={2.6} width={1.7} rotateY={90} asset='' />
        <Picture x={-10.79 + this.state.x} y={35.86} z={-8.14 + this.state.z} height={1.8} width={1.8} rotateY={90} asset='' />
        <Picture x={-10.79 + this.state.x} y={37.66} z={-11.72 + this.state.z} height={1.8} width={1.8} rotateY={90} asset='' />
      </View>
    );
  }
}