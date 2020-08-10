import React from "react";
import {
  View,
  Text,
  VrButton,
  asset,
  Animated,
  NativeModules,
} from "react-360";
import styles from "./styles";

const { AudioModule } = NativeModules;

export default class AnimatedText extends React.Component {
  state = {
    clicked: false,
    fade: new Animated.Value(0),
  };

  onClick = () => {
    this.setState(({ clicked }) => ({ clicked: !clicked }));
    AudioModule.playOneShot({
      source: asset("ray-gun.wav"),
    });
  };

  componentDidUpdate() {
    const { clicked } = this.state;
    const value = clicked ? 1 : 0;
    Animated.timing(this.state.fade, {
      toValue: value,
      duration: 1500,
    }).start();
  }

  render() {
    const { text } = this.props;
    const { clicked, fade } = this.state;

    return (
      <View style={styles.wrapper}>
        <Animated.Text
          style={[
            styles.text,
            {
              color: clicked ? "green" : "red",
              opacity: fade,
            },
          ]}
        >
          {text}
        </Animated.Text>

        <View>
          <VrButton style={styles.button} onClick={this.onClick}>
            <Text>Click</Text>
          </VrButton>
        </View>
      </View>
    );
  }

  handleClick = () => {};
}
