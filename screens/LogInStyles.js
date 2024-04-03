import { StyleSheet } from 'react-native';

const LogInStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#324260',
  },
  choiceTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,
  },
  image: {
    width: 320,
    height: 35,
    alignSelf: 'center',
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    margin: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  subHeading: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
    //fontWeight: 'bold',
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#0a33ef',
    margin: 10,
  },
  logInButton: {
    backgroundColor: '#324260',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  logInButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  focusedInput: {
    borderColor: '#324260', // Change border color when focused
  },
  question: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  choiceContainer: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 20,
  },
  choiceBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 5,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth:1,
  },
  selectedChoice: {
    borderColor: '#007aff', // Highlighted border color
    borderWidth: 2,
  },
  choiceTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10, // Adjust the space between icon and text
  },
  choiceText: {
    fontSize: 16,
    color: 'black', // Change text color to black
  },
  sendOTPButton: {
    backgroundColor: '#324260',
    borderRadius: 10,
    padding: 20,
  },
  sendOTPButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  verifyButton: {
    backgroundColor: '#324260',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: -15,
    marginBottom: 20,
    padding: 10,
  },
  focusedInput: {
    borderColor: '#324260', // Change border color when focused
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: '#324260',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkSentMessage: {
    color: '#007aff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  navigationText: {
    color: '#007aff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default LogInStyles;
