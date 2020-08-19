import React from "react";
import { AppRegistry, View } from 'react-360';
import HoverImage from "./components/HoverImage";
import ExplainedImage from "./components/ExplainedImage";
import AnimatedText from "./components/AnimatedText";
import Lights from './components/Lights';
import Gallery from './components/Gallery';

export default class vr_gallery extends React.Component {
  render() {
    return (
      <View>
        {/* <Lights /> */}

        {/* <Gallery /> */}

        <ExplainedImage />

      </View>
    );
  }
}


AppRegistry.registerComponent("vr_gallery", () => vr_gallery);
AppRegistry.registerComponent("AnimatedText", () => AnimatedText);
AppRegistry.registerComponent("HoverImage", () => HoverImage);
AppRegistry.registerComponent("ExplainedImage", () => ExplainedImage);
