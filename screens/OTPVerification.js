import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LogInStyles from '../styles/LogInStyles';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const username = route.params?.username;

  const handleVerifyOTP = () => {
    // Add OTP validation logic here
    if (/^[0-9]{6}$/.test(otp)) {
      // OTP is valid, navigate to the next screen
      navigation.navigate('Questions', { username: username });
    } else {
      // OTP is invalid, set an error message
      setErrorMessage('OTP must be 6 digits in length and contain only numbers');
    }
  };
  const handleGoBack = () => {
    navigation.navigate('OTPConfirmation'); // Navigate back 
  };
  const newCode = () => {
    // logic to send a new code
  };
  return (
    <KeyboardAvoidingView style={LogInStyles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={LogInStyles.box}>
        <Text style={LogInStyles.title}>Verification code  </Text>
        <Text style={LogInStyles.subHeading}>One Time Password: </Text>
        <TextInput
          style={[LogInStyles.input, otp.length !== 6 && LogInStyles.focusedInput]}
          placeholder="Enter OTP"
          value={otp}
          onChangeText={(text) => {
            setOtp(text);
            setErrorMessage('');
          }}
        />
        <TouchableOpacity style={LogInStyles.verifyButton} onPress={handleVerifyOTP}>
          <Text style={LogInStyles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
        {errorMessage && (
          <Text style={{ color: 'red' }}>{errorMessage}</Text>
        )}
        <TouchableOpacity onPress={handleGoBack}>
          <Text style={LogInStyles.navigationText}>Change the delivery method</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={newCode}>
          <Text style={LogInStyles.navigationText}>Send a new code</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OTPVerification;
