import React from "react";
import styles from "./styles";
import { View, Text, asset, Animated, Image } from "react-360";

export default class ExplainedImage extends React.Component {
  state = {
    clicked: false,
    fade: new Animated.Value(0),
  };

  render() {
    return (
      <View style={styles.explainWrapper}>
        <View>
          <Image
            source={asset("mona-lisa.jpg")}
            style={{ width: 400, height: 400 }}
          />
        </View>

        <View style={styles.explanation}>
          <Text style={styles.title}>Mona Lisa</Text>

          <View style={styles.item}>
            <Text style={styles.label}>Artist: </Text>
            <Text style={styles.content}>Leonardo da Vinci</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Estimated date:</Text>
            <Text style={styles.content}>1503 to 1519</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Where to see it:</Text>
            <Text style={styles.content}>Louvre Museum (Paris)</Text>
          </View>
        </View>
      </View>
    );
  }

  handleClick = () => {};
}
