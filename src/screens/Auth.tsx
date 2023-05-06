//import liraries
import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, Animated, Easing} from 'react-native';
import CustomButton from '../components/CustomButton';

const Auth = ({navigation}) => {
  const translateX = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 30,
          duration: 3000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(translateX, {
          toValue: -30,
          duration: 3000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  }, [translateX]);

  const handleButtonPress = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>
          and just like that {'\n'}you found your way {'\n'}to us!
        </Text>
      </View>
      <Animated.View style={[styles.ImgWrapper, {transform: [{translateX}]}]}>
        <Image
          source={require('../assets/Images/iamges.png')}
          style={{width: 500, height: 250}}
        />
      </Animated.View>
      <View>
        <Text style={styles.comfy}>let's get comfy, shall we?</Text>
        <CustomButton
          buttonColor="#FF6D42"
          buttonTitle="Create account"
          onPress={handleButtonPress}
        />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.SignIn}>Already have and accound? </Text>

          <Text
            style={styles.SignInText}
            onPress={() => navigation.navigate('SignIn')}>
            Sign in
          </Text>
        </View>
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
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 30,
    marginTop: 100,
  },
  ImgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },

  comfy: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  SignIn: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
  },
  SignInText: {
    color: '#FF6D42',
    fontWeight: '500',
  },
});

export default Auth;
