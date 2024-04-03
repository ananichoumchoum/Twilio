import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LogInStyles from './LogInStyles';

const OTPConfirmation = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const username = route.params?.username;

  const handleSendOTP = () => {
    if (selectedChoice === "email" || selectedChoice === "text") {
      // Logic to send OTP based on the selectedChoice

      // Navigate to OTPVerification screen with username
      navigation.navigate('OTPVerification', { username: username });
    } else {
      // Error message when no choice is selected
      setErrorMessage('Please select an option to receive your One Time Password');
    }
  };
  
  const handleGoBack = () => {
    navigation.navigate('LogIn'); // Navigate back to the Login page
  };

  return (
    <View style={LogInStyles.container}>
      <View style={LogInStyles.box}>
        <Text style={LogInStyles.title}>One Time Password</Text>
        <Text style={LogInStyles.question}>How would you like to receive your One Time Password code?</Text>
        <View style={LogInStyles.choiceContainer}>
          <TouchableOpacity style={[LogInStyles.choiceBox, selectedChoice === "email" && LogInStyles.selectedChoice,]}
            onPress={() => setSelectedChoice("email")}
          >
            <View style={LogInStyles.choiceTextContainer}>
              <Icon name="envelope" size={20} color="black" style={LogInStyles.icon} />
              <Text style={LogInStyles.choiceText}>Email</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[LogInStyles.choiceBox, selectedChoice === "text" && LogInStyles.selectedChoice,]}
            onPress={() => setSelectedChoice("text")}
          >
            <View style={LogInStyles.choiceTextContainer}>
              <Icon name="comment" size={20} color="black" style={LogInStyles.icon} />
              <Text style={LogInStyles.choiceText}>Text</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={LogInStyles.sendOTPButton} onPress={handleSendOTP} >
          <Text style={LogInStyles.sendOTPButtonText}>Send code</Text>
        </TouchableOpacity>
        {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
        <TouchableOpacity onPress={handleGoBack}>
          <Text style={LogInStyles.navigationText}>Go back to login page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPConfirmation;

