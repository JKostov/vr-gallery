import { StyleSheet } from 'react-360';

export default StyleSheet.create({
  explainWrapper: {
    opacity: 0.9,
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 5,
    backgroundColor: 'white',
  },

  poll: {
    flexDirection: 'column',
    backgroundColor: 'white',
    opacity: 0.95,
    width: 350,
    // borderWidth: 3,
    // borderColor: 'red',
  },

  firstPage: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 20,
    // borderWidth: 5,
    // borderColor: 'white',
  },

  questionWrapper: {
    // borderColor: 'black',
    // borderWidth: 3,
  },

  question: {
    fontSize: 32,
    color: 'black',
  },

  answerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    // borderColor: 'black',
    // borderWidth: 3,
  },

  radioChecked: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black',
    marginRight: 16,
  },

  radioButton: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    marginRight: 16,
  },

  answerText: {
    color: 'black',
    fontWeight: 'bold',
  },

  hiddenResult: {
    opacity: 0,
  },

  message: {
    marginBottom: 16,
    height: 32,
  },

  correctness: {
    marginLeft: 4,
    color: 'black',
  },

  result: {
    flexDirection: 'row',
  },  

  seeMore: {
    justifyContent: 'flex-end',
    color: 'blue',
    textDecorationStyle: 'solid',
  },

  explanation: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20,
    opacity: 0.95,
    width: 350,
  },

  item: {
    marginBottom: 20,
  },

  title: {
    color: 'black',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  label: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 32,
  },

  content: {
    color: 'black',
    fontSize: 28,
  },
});
