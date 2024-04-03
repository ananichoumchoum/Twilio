import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './screens/LogIn'; 
import ForgotPassword from './screens/ForgotPassword';
import OTPConfirmation from './screens/OTPConfirmation';
import OTPVerification from './screens/OTPVerification';
import Questions from './screens/Questions';
import Main from './screens/Main';
import AddClaim from './components/AddClaim';
import { ClaimsProvider } from './contexts/ClaimsContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ClaimsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LogIn" screenOptions={{headerTitle: 'DirectMedical', headerLeft: null, // Hide the back button by default
          }}>
          <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
          <Stack.Screen name="OTPConfirmation" component={OTPConfirmation}/>
          <Stack.Screen name="OTPVerification" component={OTPVerification}/>
          <Stack.Screen name="Questions" component={Questions}/>
          <Stack.Screen name="Main" component={Main}  options={{ headerShown: false }}/>
          <Stack.Screen name="AddClaim" component={AddClaim} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ClaimsProvider>
  );
};

export default App;