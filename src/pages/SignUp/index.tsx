import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecule';
import {Button, Gap} from '../../components/atoms';
import {Back} from '../../assets/icon';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back style={styles.arrow} />
        <Header text="Sign Up" />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.addPhoto}>
          <Text style={styles.photoText}>Add Photo</Text>
          <View style={styles.dashed} />
        </View>
        <Gap height={32} />
        <TextInput label="Full name" placeholder="Type your full name" />
        <Gap height={15} />
        <TextInput
          label="Email address"
          placeholder="Type your email address"
        />
        <Gap height={15} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Continue" textColor="#FFFFFF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    backgroundColor: '#FFFFFF',
  },
  contentWrapper: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 25,
    flexGrow: 1,
  },
  addPhoto: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 90 / 2,
    height: 90,
    width: 90,
    position: 'relative',
  },
  photoText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    width: 40,
    height: 42,
    textAlign: 'center',
    position: 'absolute',
  },
  dashed: {
    borderRadius: 110 / 2,
    height: 110,
    width: 110,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
    position: 'absolute',
  },
  arrow: {
    width: 11,
    height: 19,
    marginRight: 10,
  },
});
export default SignIn;
