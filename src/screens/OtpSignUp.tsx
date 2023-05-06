import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Backbtn from '../components/Backbutton';
import CustomButton from '../components/CustomButton';

const OtpSignUp = ({navigation, route}) => {
  const {PhoneNumber} = route.params;
  const OTPs1 = useRef();
  const OTPs2 = useRef();
  const OTPs3 = useRef();
  const OTPs4 = useRef();
  const OTPs5 = useRef();

  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Backbtn onPress={handleBackPress} />
      <Text style={styles.Heading}>time to get it verified!</Text>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          marginVertical: 20,
          fontWeight: '400',
          lineHeight: 20,
          fontSize: 14,
        }}>
        Please enter the 5 digit code sent to {'\n'}
        <Text style={{fontWeight: 'bold'}}> +91 {PhoneNumber}</Text> through SMS
      </Text>
      <View style={styles.Wrapper}>
        <TextInput
          style={[
            styles.otpInput,
            {borderColor: otp1.length == 1 ? '#FF6D42' : 'gray'},
          ]}
          maxLength={1}
          keyboardType={'numeric'}
          ref={OTPs1}
          value={otp1}
          onChangeText={num => {
            setOtp1(num);
            if (num.length >= 1) {
              OTPs2.current.focus();
            }
          }}
        />
        <TextInput
          style={[
            styles.otpInput,
            {borderColor: otp2.length == 1 ? '#FF6D42' : 'gray'},
          ]}
          maxLength={1}
          keyboardType={'numeric'}
          ref={OTPs2}
          value={otp2}
          onChangeText={num => {
            setOtp2(num);
            if (num.length >= 1) {
              OTPs3.current.focus();
            } else if (num.length < 1) {
              OTPs1.current.focus();
            }
          }}
        />
        <TextInput
          style={[
            styles.otpInput,
            {borderColor: otp3.length == 1 ? '#FF6D42' : 'gray'},
          ]}
          maxLength={1}
          keyboardType={'numeric'}
          ref={OTPs3}
          value={otp3}
          onChangeText={num => {
            setOtp3(num);
            if (num.length >= 1) {
              OTPs4.current.focus();
            } else if (num.length < 1) {
              OTPs2.current.focus();
            }
          }}
        />
        <TextInput
          style={[
            styles.otpInput,
            {borderColor: otp4.length == 1 ? '#FF6D42' : 'gray'},
          ]}
          maxLength={1}
          keyboardType={'numeric'}
          ref={OTPs4}
          value={otp4}
          onChangeText={num => {
            setOtp4(num);
            if (num.length >= 1) {
              OTPs5.current.focus();
            } else if (num.length < 1) {
              OTPs3.current.focus();
            }
          }}
        />
        <TextInput
          style={[
            styles.otpInput,
            {borderColor: otp5.length == 1 ? '#FF6D42' : 'gray'},
          ]}
          maxLength={1}
          keyboardType={'numeric'}
          ref={OTPs5}
          value={otp5}
          onChangeText={num => {
            setOtp5(num);
            if (num.length > 1) {
              OTPs4.current.focus();
            } else if (num.length < 1) {
              OTPs4.current.focus();
            }
          }}
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontWeight: '400', fontSize: 14}}>
          Didn't receive a code?
        </Text>
        <Text style={{color: '#FF6D42', fontWeight: '600', marginLeft: 5}}>
          Resend OTPs?
        </Text>
      </View>
      <CustomButton
        buttonColor={
          otp1 !== '' &&
          otp2 !== '' &&
          otp3 !== '' &&
          otp4 !== '' &&
          otp5 !== ''
            ? '#FF6D42'
            : '#9C867F'
        }
        buttonTitle="Verify OTP"
      />
      <View>
        <Text
          style={{
            textAlign: 'center',
            lineHeight: 20,
            fontSize: 14,
            color: 'white',
          }}>
          by continuing, you're indicating that{'\n'} you accept our{' '}
          <Text
            style={{
              fontWeight: '600',
              textDecorationLine: 'underline',
              color: '#FF6D42',
            }}>
            Terms of Use
          </Text>{' '}
          and our{'\n'}{' '}
          <Text
            style={{
              fontWeight: '600',
              textDecorationLine: 'underline',
              color: '#FF6D42',
            }}>
            Privacy Policy
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 15,
  },
  Heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 30,
    marginTop: 40,
  },
  Wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginVertical: 30,
  },
  otpInput: {
    width: 30,
    height: 40,
    borderColor: 'gray',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    shadowColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    textAlign: 'center',
    padding: 5,
  },
});

export default OtpSignUp;
