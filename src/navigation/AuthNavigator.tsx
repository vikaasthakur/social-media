import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Auth, SignIn, SignUp, OtpSignUp} from '../screens';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUP" component={SignUp} />
      <Stack.Screen name="OtpSignUp" component={OtpSignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
