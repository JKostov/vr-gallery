import React from 'react';
import styles from './styles';
import { View, Text, asset, Animated, Image, VrButton } from 'react-360';

export default class ExplainedImage extends React.Component {
  constructor(props) {
    super(props);

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
            <View>
              <Text style={styles.question}>{this.state.question}</Text>

              {this.state.answerList.map((answer, index) => (
                <View style={styles.answerWrapper}>
                  <VrButton
                    style={
                      this.state.correctAnswer === this.state.selectedAnswer
                        ? styles.radioChecked
                        : styles.radioButton
                    }
                    onClick={() =>   this.setState({ selectedAnswer: index })}
                  />
                  <Text style={styles.answerText}>{answer}</Text>
                </View>
              ))}
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
      </View>
    );
  }

  handleClick = () => {};
}
