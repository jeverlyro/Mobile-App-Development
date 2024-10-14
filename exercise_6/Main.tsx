import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Title from './Title.tsx';
import InputField from './InputField.tsx';
import SubmitButton from './SubmitButton.tsx';

const Main = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <View style={styles.container}>
      <Title title="Registration" />
      <InputField
        label="Name"
        placeholder="Masukan nama lengkap anda"
        value={formData.name}
        onChangeText={value => handleChange('name', value)}
      />
      <InputField
        label="Username"
        placeholder="Masukan username anda"
        value={formData.username}
        onChangeText={value => handleChange('username', value)}
      />
      <InputField
        label="Email"
        placeholder="Masukan email anda"
        value={formData.email}
        onChangeText={value => handleChange('email', value)}
      />
      <InputField
        label="Address"
        placeholder="Masukan alamat anda"
        value={formData.address}
        onChangeText={value => handleChange('address', value)}
      />
      <InputField
        label="Phone Number"
        placeholder="Masukan nomor telepon anda"
        value={formData.phoneNumber}
        onChangeText={value => handleChange('phoneNumber', value)}
      />
      <SubmitButton label="Register" onPress={handleSubmit} />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
