import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.topContainer} />
      <View style={styles.container}>
        <View style={styles.redBox} />
        <View style={styles.greenBox} />
        <View style={styles.blueBox} />
      </View>
      <View style={styles.bottomContainer} />
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  bottomContainer: {
    flex: 1,
    backgroundColor: 'pink',
  },
  redBox: {
    borderRadius: 360,
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  greenBox: {
    borderRadius: 360,
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
  blueBox: {
    borderRadius: 360,
    height: 100,
    width: 100,
    backgroundColor: 'blue',
  },
});
