import React from "react";
import {
  View,
  Text,
  NativeModules,
  Image,
  asset,
} from "react-360";
import styles from "./styles";

const { surfaceModule } = NativeModules;

export default class HoverImage extends React.Component {
  state = {
    clicked: false,
    hover: false,
    width: 400,
    height: 400,
  };

  magnify(){ 
    const newSize = 800;
    surfaceModule.resize(newSize, newSize)
    this.setState({ hover: true, width: newSize - 10, height:newSize - 100 })
  }

  minify() {
    const oldSize = 500;
    surfaceModule.resize(oldSize, oldSize);
    this.setState({ hover: false, width: oldSize - 100, height: oldSize - 100 })
  }

  render() {
    const { hover, width, height } = this.state;

    return (
      <View
        onEnter={() => this.magnify()}
        onExit={() => this.minify()}
        style={[styles.wrapper, hover ? styles.hoverEffect : null]}
        hitSlop={100}
     >
        <Image
          source={asset("mona-lisa.jpg")}
          style={{ width: width , height: height }}
        />

        <View style={styles.name}>
          <Text>Mona Lisa</Text>
        </View>
      </View>
    );
  }
}
