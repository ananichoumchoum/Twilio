import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogInStyles from './LogInStyles'; // Import the styles from LogInStyles.js

const LogIn = () => {
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigation();

  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
  };

  const handleUsernameBlur = () => {
    setIsUsernameFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleLogIn = () => {
    // Reset previous error messages
    setUsernameError('');
    setPasswordError('');
  
    // Validate username and password
    if (!username) {
      setUsernameError('Username is required');
    }
  
    if (!password) {
      setPasswordError('Password is required');
    }
  
    // Check if both fields are filled
    if (username && password) {
      // If there are no errors and both fields are filled, proceed with login
      // Perform login or validation logic here
      navigation.navigate('OTPConfirmation', { username: username });
    }
  };
  

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  //to be able to click outside of the keyboard 
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView style={LogInStyles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={LogInStyles.box}>
        <Text style={LogInStyles.title}>Medi-Messaging Logo</Text>
          <Text style={LogInStyles.subHeading}>Username: </Text>
          <TextInput
            style={[LogInStyles.input, isUsernameFocused && LogInStyles.focusedInput]}
            placeholder="Username"
            value={username}
            onFocus={handleUsernameFocus}
            onBlur={handleUsernameBlur}
            onChangeText={(text) => setUsername(text)}
          />
          {usernameError && <Text style={{ color: 'red' }}>{usernameError}</Text>}
          <Text style={LogInStyles.subHeading}>Password: </Text>
          <TextInput
            style={[LogInStyles.input, isPasswordFocused && LogInStyles.focusedInput]}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            onChangeText={(text) => setPassword(text)}
          />
          {passwordError && <Text style={{ color: 'red' }}>{passwordError}</Text>}
          <TouchableOpacity style={LogInStyles.logInButton} onPress={handleLogIn}>
            <Text style={LogInStyles.logInButtonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={LogInStyles.forgotPassword}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LogIn;
