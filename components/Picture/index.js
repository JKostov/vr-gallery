import React, { Component } from 'react';
import { asset, Image, VrButton, NativeModules } from 'react-360';

const { ExplainedImageModule } = NativeModules;

export default class Picture extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    ExplainedImageModule.open(this.props.asset);
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
