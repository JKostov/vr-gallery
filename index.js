import React from "react";
import HoverImage from "./components/HoverImage";
import ExplainedImage from "./components/ExplainedImage";
import AnimatedText from "./components/AnimatedText";import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class vr_gallery extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});


AppRegistry.registerComponent("vr_gallery", () => vr_gallery);
AppRegistry.registerComponent("CustomImage", () => CustomImage);
AppRegistry.registerComponent("AnimatedText", () => AnimatedText);
AppRegistry.registerComponent("HoverImage", () => HoverImage);
AppRegistry.registerComponent("ExplainedImage", () => ExplainedImage);
