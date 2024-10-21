import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecule';
import {Button, Gap} from '../../components/atoms';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Header text="Sign Up" />
      <View style={styles.contentWrapper}>
        <View style={styles.addPhoto}>
          <Text style={styles.photoText}>Add Photo</Text>
          <View style={styles.dashed} />
        </View>
        <Gap height={32} />
        <TextInput label="Full name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
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
  contentWrapper: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 25,
  },
  addPhoto: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 300,
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
    borderRadius: 300,
    height: 110,
    width: 110,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
    position: 'absolute',
  },
});
export default SignIn;
