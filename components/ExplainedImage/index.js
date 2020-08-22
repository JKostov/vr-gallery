import React from 'react';
import styles from './styles';
import {
  View,
  Text,
  asset,
  Animated,
  Image,
  VrButton,
  NativeModules,
} from 'react-360';

const { ExplainedImageModule } = NativeModules;
const { AudioModule } = NativeModules;

export default class ExplainedImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      fade: new Animated.Value(0),
      step: 0,
      selectedAnswer: -1,
      windowWidth: 0,
      iphoneX: 1125,
    };

     this.getButtonStyles = this.getButtonStyles.bind(this);
     this.updateWindowSize = this.updateWindowSize.bind(this);
  }

  isCorrect = (answer) => {
    return answer === this.props.imageInfo.correctAnswer;
  };

  getButtonStyles(index) {
    if (this.state.selectedAnswer === index) {
      if (this.state.selectedAnswer === this.props.imageInfo.correctAnswer) {
        return styles.radioSuccess;
      }
      return styles.radioError;
    } 

    return styles.radioButton;
  }

  updateWindowSize() {
    this.setState({windowWidth: window.innerWidth});

    console.log('inner width: ', window)
    // if( window.innweWidht < 1125) {
      // alert('Yo');
    // }
  }

  componentDidMount() {
    alert('1');
    this.updateWindowSize();
    window.addEventListener('resize', this.updateWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize)
  }

  render() {
    return (
      <View>
        
        <View style={styles.explainWrapper}>
        <View>
          <Image
            source={asset(this.props.imageInfo.asset)}
            style={{ width: 400, height: 400 }}
          />
        </View>

        <View style={styles.poll}>
          {this.state.step % 2 === 0 ? (
            <View style={styles.firstPage}>
              <View style={styles.questionWrapper}>
                <Text style={styles.question}>
                  {this.props.imageInfo.question}
                </Text>

                {this.props.imageInfo.answers.map((answer, index) => (
                  <View style={styles.answerWrapper} key={index}>
                    <VrButton
                      style={this.getButtonStyles(index)}
                      onClick={() => {
                        this.setState({ selectedAnswer: index });

                        const sound =
                          index === this.props.imageInfo.correctAnswer
                            ? 'success.wav'
                            : 'error.wav';

                        AudioModule.playOneShot({
                          source: asset(sound),
                        });
                      }}
                    />
                    <Text style={styles.answerText}>{answer}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.result}>
                <Text style={{ color: 'black' }}>Your answer is: </Text>
                {this.state.selectedAnswer !== -1 && (
                  <Text style={styles.correctness}>
                    {this.state.selectedAnswer ===
                    this.props.imageInfo.correctAnswer
                      ? 'correct'
                      : 'incorrect'}
                  </Text>
                )}
              </View>

              <View>
                <VrButton onClick={() => this.setState({ step: 1 })}>
                  <Text style={styles.seeMore}>See more</Text>
                </VrButton>
              </View>
            </View>
          ) : (
            <View style={styles.explanation}>
              <Text style={styles.title}>{this.props.imageInfo.title}</Text>

              <View style={styles.item}>
                <Text style={styles.label}>Artist: </Text>
                <Text style={styles.content}>
                  {this.props.imageInfo.artist}
                </Text>
              </View>

              <View style={styles.item}>
                <Text style={styles.label}>Estimated date:</Text>
                <Text style={styles.content}>{this.props.imageInfo.date}</Text>
              </View>

              <View style={styles.item}>
                <Text style={styles.label}>Where to see it:</Text>
                <Text style={styles.content}>
                  {this.props.imageInfo.location}
                </Text>
              </View>
            </View>
          )}
        </View>
        </View>
        
        
        <VrButton onClick={() => ExplainedImageModule.close()} style={styles.closeButton}>
          <Text style={styles.closeText}>Close</Text>
        </VrButton> 
      </View>
    );
  }
}
