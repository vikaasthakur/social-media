import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import OtpSignUp from '../screens/OtpSignUp';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUP" component={SignUp} />
      <Stack.Screen name="OtpSignUp" component={OtpSignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
