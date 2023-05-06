//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import Backbtn from '../components/Backbutton';
import Googlebutton from '../components/Googlebutton';

const SignIn = ({navigation}) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
        <ScrollView style={styles.container}>
          <Backbtn onPress={handleBackPress} />
          <View>
            <Text style={styles.heading}>
              whatcha dogin {'\n'}outside? come on in!
            </Text>
          </View>
          <TextInput
            placeholder="Email / Username / Phone Number"
            placeholderTextColor={'#c1c1c1'}
            style={styles.InputBox}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#c1c1c1'}
            style={styles.InputBox}
            secureTextEntry={true}
          />
          <Text style={styles.ForgotPassword}>Forgot password ?</Text>
          <CustomButton buttonColor="#FF6D42" buttonTitle="Login" />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.HrLine} />
            <Text style={{color: 'white', marginHorizontal: 12}}>
              or continue with
            </Text>
            <View style={styles.HrLine} />
          </View>
          <Googlebutton btnTitle={'Sign in with Google'} />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{color: 'white', alignItems: 'center'}}>
              got not account?{' '}
            </Text>

            <Text
              onPress={() => navigation.push('SignUp')}
              style={styles.SignUptext}>
              Sign up
            </Text>

            <Text style={{color: 'white', alignItems: 'center'}}> then!</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 30,
    marginTop: 60,
    marginBottom: 40,
  },
  InputBox: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'white',
    height: 60,
    fontSize: 16,
    padding: 20,
    marginVertical: 10,
    color: 'white',
  },
  ForgotPassword: {
    fontWeight: '600',
    color: '#FF6D42',
    marginVertical: 4,
    textAlign: 'right',
  },
  HrLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
  SignUptext: {
    color: '#FF6D42',
    fontWeight: '500',
    alignSelf: 'baseline',
  },
});

export default SignIn;
