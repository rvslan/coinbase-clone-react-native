import React, { FC } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  Animated,
  StyleSheet,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import Colors from '../constants/Colors';

interface ButtonProps {
  title: string;
}

const Button: FC<ButtonProps> = ({ title }) => {
  const animatedValue = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableHighlight
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => Haptics.ImpactFeedbackStyle.Light}
        style={{ borderRadius: 10 }}
      >
        <View style={styles.button}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '85%',
    borderRadius: 8,
  },
  button: {
    width: '100%',
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.cbBlue,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
