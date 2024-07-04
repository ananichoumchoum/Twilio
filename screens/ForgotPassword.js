import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogInStyles from '../styles/LogInStyles';

const ForgotPassword = () => {
  const [isLinkSent, setIsLinkSent] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const navigation = useNavigation();

  const handleResetPassword = () => {
    setIsLinkSent(true); 
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true); 
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };
  const handleGoBack = () => {
    navigation.navigate('LogIn');
  };
  return (
    <View style={LogInStyles.container}>
      <KeyboardAvoidingView style={LogInStyles.box} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View>
          <Text style={LogInStyles.title}>Forgot Password</Text>
          <Text style={LogInStyles.subHeading}>Enter your email address to receive a password reset link.</Text>
          <TextInput
            style={[LogInStyles.input, isEmailFocused && LogInStyles.focusedInput]}
            placeholder="Email"
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
          />
          <TouchableOpacity style={LogInStyles.logInButton} onPress={handleResetPassword}>
            <Text style={LogInStyles.logInButtonText}>Reset password</Text>
          </TouchableOpacity>
          {isLinkSent && (
            <Text style={LogInStyles.forgotPassword}>
              If the provided email address is associated with an active account, a password reset link will be sent to that email.
            </Text>
          )}
          <TouchableOpacity onPress={handleGoBack}>
            <Text style={LogInStyles.navigationText}>Go back to login page</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ForgotPassword;
