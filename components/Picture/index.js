import React, { Component } from 'react';
import { asset, Image, VrButton } from 'react-360';

export default class Picture extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('picture clicked');
  }

  render() {
    return (
      <VrButton
        onClick={this.onClick}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: this.props.height,
          width: this.props.width,
          backgroundColor: 'red',
          transform: [
            { translate: [this.props.x, this.props.y, this.props.z] },
            { rotateY: this.props.rotateY },
          ],
        }}
      >
        <Image source={asset(this.props.asset)} style={{ flex: 1 }} />
      </VrButton>
    );
  }
}
