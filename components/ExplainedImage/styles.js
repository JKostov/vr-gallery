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
    backgroundColor: 'green',
    padding: 20,
    opacity: 0.95,
    width: 350,
  },

  question: {
    fontSize: 32,
    color: 'black',
  },

  answerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontWeight: 'bold'
  },

  explanation: {
    flexDirection: 'column',
    backgroundColor: 'green',
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
