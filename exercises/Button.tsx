import {StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import Input from './components/input';
import Button from './components/button';
import Title from './components/title';

const Button2 = () => {
  const [title, setTitle] = useState('Welcome');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // New state for showing password

  const handleClick = () => {
    setTitle('Selamat Datang');
    const data = {
      userName: userName,
      password: password,
    };
    console.log(data);
  };

  const handleUserName = e => {
    setUserName(e);
  };

  const handlePassword = e => {
    setPassword(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <Title title={title} />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={handleUserName}
      />
      <Input
        label="Password"
        placeholder="Masukan password anda"
        onChangeText={handlePassword}
        secureTextEntry={!showPassword} // Toggle visibility based on showPassword state
      />
      <Button
        label={showPassword ? 'Hide Password' : 'Show Password'}
        onPress={togglePasswordVisibility}
      />
      <Button label="Sign In" onPress={handleClick} />
      <Button label="Register" color="green" />
    </View>
  );
};

export default Button2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
