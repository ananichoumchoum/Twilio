import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LogInStyles from './LogInStyles';
import { useNavigation, useRoute } from '@react-navigation/native';

const Questions = () => {
  const route = useRoute();
  const username = route.params?.username;
  const navigation = useNavigation();
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const validateAnswers = () => {

    const correctAnswers = {
      question1: 'blue',
      question2: 'smith',
      question3: 'fluffy',
    };
    // Check if the user's answers match the correct answers
    if (
      answers.question1.toLowerCase() === correctAnswers.question1 &&
      answers.question2.toLowerCase() === correctAnswers.question2 &&
      answers.question3.toLowerCase() === correctAnswers.question3
    ) {
      // All answers are correct, navigate to main
      navigation.navigate('Main', { username: username });
    } else {
      // Handle incorrect answers
      alert('Incorrect answers. Please try again.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView style={LogInStyles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={LogInStyles.box}>
          <Text style={LogInStyles.heading}>Security questions</Text>
          <Text style={LogInStyles.subHeading}>Question 1: What is your favorite color?</Text>
          <TextInput
            style={LogInStyles.input}
            placeholder="Your answer"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setAnswers({ ...answers, question1: text })}
          />
          <Text style={LogInStyles.subHeading}>Question 2: What is your mother's maiden name?</Text>
          <TextInput
            style={LogInStyles.input}
            placeholder="Your answer"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setAnswers({ ...answers, question2: text })}
          />
          <Text style={LogInStyles.subHeading}>Question 3: What is the name of your first pet?</Text>
          <TextInput
            style={LogInStyles.input}
            placeholder="Your answer"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setAnswers({ ...answers, question3: text })}
          />
          <TouchableOpacity style={LogInStyles.verifyButton} onPress={validateAnswers}>
            <Text style={LogInStyles.verifyButtonText}>Verify identity</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Questions;
