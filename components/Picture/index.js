import React, { Component } from 'react';
import { View, asset, Image } from 'react-360';

export default class Picture extends Component {
  render() {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: this.props.height,
          width: this.props.width,
          backgroundColor: 'red',
          transform: [
            { scale: 1 },
            { translate: [this.props.x, this.props.y, this.props.z] },
            { rotateY: this.props.rotateY },
          ],
        }}
      >
        <Image source={asset(this.props.asset)} style={{ flex: 1 }} />
      </View>
    );
  }
}
