import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface CustomButtonProps {
  buttonColor: string;
  buttonTitle: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonColor,
  buttonTitle,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: buttonColor}, style]}>
      <Text style={styles.buttonText} onPress={onPress}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CustomButton;
