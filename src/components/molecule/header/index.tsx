import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {text} from 'stream/consumers';

const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: 24,
    paddingVertical: 38,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: 'black',
  },
});
