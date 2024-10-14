import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.blackBox2} />
        <View style={styles.yellowBox2} />
        <View style={styles.blackBox2} />
      </View>
      <View style={styles.container}>
        <Image style={styles.image} source={require('./assets/logouk.png')} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  container: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  blackBox: {
    height: 85,
    width: 85,
    backgroundColor: 'black',
  },
  yellowBox: {
    height: 85,
    width: 85,
    backgroundColor: 'yellow',
  },
  blackBox2: {
    height: 85,
    width: 85,
    backgroundColor: 'black',
    margin: 10,
  },
  yellowBox2: {
    height: 85,
    width: 85,
    backgroundColor: 'yellow',
    margin: 10,
  },
  image: {
    width: 350,
    height: 78,
  },
});
