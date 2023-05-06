import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import Googlebutton from '../components/Googlebutton';
import Backbtn from '../components/Backbutton';
import CustomButton from '../components/CustomButton';

const SignUp = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleButtonPress = () => {
    navigation.navigate('OtpSignUp', {PhoneNumber: phone});
  };
  return (
    <View style={styles.container}>
      <Backbtn onPress={handleBackPress} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 50,
        }}>
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: '#FF6D42',
            borderRadius: 20 + 20 / 2,
          }}
        />
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: '#D9D9D9',
            marginHorizontal: 10,
            borderRadius: 20 + 20 / 2,
          }}
        />
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: '#9C867F',
            borderRadius: 20 + 20 / 2,
          }}
        />
      </View>
      <Text style={styles.Heading}>your phone number please?</Text>
      <View style={styles.InputContainer}>
        <View>
          <Image
            source={require('../assets/Images/india.png')}
            style={styles.Flag}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: '400',
              position: 'absolute',
              left: 50,
              top: 4,
            }}>
            Phone
          </Text>
        </View>
        <TextInput
          maxLength={10}
          keyboardType={'phone-pad'}
          style={styles.Input}
          placeholderTextColor={'white'}
          onChangeText={num => {
            setPhone(num);
          }}
        />
      </View>
      <CustomButton
        buttonColor={phone.length == 10 ? '#FF6D42' : '#9C867F'}
        buttonTitle="Send OTP"
        onPress={handleButtonPress}
      />
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

      <Googlebutton btnTitle={'Sign up with Google'} />
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
    marginBottom: 40,
  },
  InputContainer: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    height: 60,
    position: 'relative',
  },
  Flag: {
    height: 30,
    width: 32,
    position: 'absolute',
    left: 10,
    top: 14,
  },
  Input: {
    paddingLeft: 60,
    paddingTop: 20,
    color: 'white',
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: '400',
  },

  HrLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
});

export default SignUp;
