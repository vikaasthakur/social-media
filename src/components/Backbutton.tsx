import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface BackbtnProps {
  onPress?: () => void;
}
const Backbtn: React.FC<BackbtnProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Backbtn}>
        <Image
          source={require('../assets/Icons/left-arrow.png')}
          style={{height: 20, width: 20, tintColor: 'white'}}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Backbtn: {
    height: 45,
    width: 45,
    borderRadius: 45 + 45 / 2,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Backbtn;
