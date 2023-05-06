import React from 'react';
import {Text, Image, Pressable, StyleSheet} from 'react-native';

const Googlebutton = ({btnTitle}) => {
  return (
    <Pressable style={[styles.btn, styles.Googlebtn]}>
      <Image
        source={require('../assets/Images/google.png')}
        style={{height: 28, width: 28, marginRight: 4}}
      />
      <Text style={[styles.btnText, styles.Googletext]}> {btnTitle}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#FF6D42',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 20,
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
  Googlebtn: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Googletext: {
    color: '#1e1e1e',
  },
});

export default Googlebutton;
