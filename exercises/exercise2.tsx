import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={style.title}>CV Mobile App Development</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={style.imageMyself}
          source={require('./assets/picture.jpg')}
        />
        <View style={style.section}>
          <Text style={style.normalText}>Name : I Kadek Tresna Jeverly</Text>
          <Text style={style.normalText}>Birth date : 28 Oktober 2005</Text>
          <Text style={style.normalText}>Experience :</Text>
          <Text style={style.normalText}>- Graphic Design</Text>
        </View>
        <Image style={style.imagecv1} source={require('./assets/dnji.jpg')} />
        <Image style={style.imagecv2} source={require('./assets/lesgo.png')} />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  imageMyself: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 300,
  },

  title: {
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
    textAlign: 'center',
    borderWidth: 0.5,
    padding: 20,
    margin: 20,
  },

  normalText: {
    fontSize: 16,
    padding: 2,
    marginHorizontal: 25,
    color: 'black',
    alignSelf: 'center',
  },

  imagecv1: {
    marginTop: 20,
    width: 200,
    height: 350,
    alignSelf: 'center',
  },

  imagecv2: {
    marginTop: 20,
    alignSelf: 'center',
    width: 200,
    height: 350,
  },

  section: {
    backgroundColor: 'gray',
  },
});

export default App;
