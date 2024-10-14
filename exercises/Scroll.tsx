import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Scroll = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Users List</Text>
      {users.map(user => {
        return (
          <View key={user.id} style={styles.userCard}>
            <Text style={styles.text}>
              <Text style={styles.label}>Name: </Text>
              {`${user.name}`}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>Username: </Text>
              {`${user.username}`}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>Email: </Text>
              {`${user.email}`}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>Address: </Text>
              {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>Phone: </Text> {`${user.phone}`}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Scroll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  userCard: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: 'gray',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
  },
});
