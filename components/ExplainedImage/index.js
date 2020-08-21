import React from 'react';
import styles from './styles';
import { View, Text, asset, Animated, Image, VrButton, NativeModules } from 'react-360';

const { ExplainedImageModule } = NativeModules;

export default class ExplainedImage extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      clicked: false,
      fade: new Animated.Value(0),
      step: 0,
      question: 'Who is in this picture?',
      selectedAnswer: -1,
      correctAnswer: 2,
      answerList: ['Darko', 'Juki', 'Mona Lisa'],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({ selectedAnswer: index });
    console.log('index: ', index);
  }

  isCorrect = (answer) => {
    return answer === this.state.correctAnswer;
  };

  render() {
    return (
      <View style={styles.explainWrapper}>
        <View>
          <Image
            source={asset('mona-lisa.jpg')}
            style={{ width: 400, height: 400 }}
          />
        </View>

        <View style={styles.poll}>
          {this.state.step % 2 === 0 ? (
            <View style={styles.firstPage}>
              <View style={styles.questionWrapper}>
                <Text style={styles.question}>{this.state.question}</Text>

                {this.state.answerList.map((answer, index) => (
                  <View style={styles.answerWrapper}>
                    <VrButton
                      style={
                        this.state.selectedAnswer === index
                          ? styles.radioChecked
                          : styles.radioButton
                      }
                      onClick={() => {
                        this.setState({ selectedAnswer: index });
                        console.log('index:', index);
                      }}
                    />
                    <Text style={styles.answerText}>{answer}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.result}>
                <Text style={{color: 'black'}}>Your answer is: </Text>
                {this.state.selectedAnswer !== -1 && (
                  <Text style={styles.correctness}>
                    {this.state.selectedAnswer === this.state.correctAnswer
                      ? 'correct'
                      : 'incorrect'}
                  </Text>
                )}
              </View>

              <View >
                <VrButton onClick={() => this.setState({step: 1})}>
                  <Text style={styles.seeMore}>See more</Text>
                </VrButton>
              </View>
            </View>
          ) : (
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
          )}
        </View>
        <VrButton onClick={() => ExplainedImageModule.close()}><Text>Close</Text></VrButton>
      </View>
    );
  }

  handleClick = () => {};
}
