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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styleTitle.title}> CV </Text>
        <TextInput placeholder="Masukan email" style={style.input} />
        <Image
          style={styleImg.images}
          source={require('./assets/__ak_15_girls_frontline_drawn_by_saiun_sigma__1142a5a723a2220661e55b925ee949ab.jpg')}
        />
        <Image
          style={styleImg.images1}
          source={{
            uri: 'https://th.bing.com/th/id/OIP.YJ9ajj255eB4GESTCVD5bQHaEK?rs=1&pid=ImgDetMain',
          }}
        />
        <Image
          style={styleImg.images1}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
        <View style={style.blueBox} />
        <View style={style2.redBox} />
        <View style={style3.greenBox} />
      </View>
    </ScrollView>
  );
};

const styleImg = StyleSheet.create({
  images: {
    height: 400,
    width: 250,
    alignSelf: 'center',
  },

  images1: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
});

const style = StyleSheet.create({
  blueBox: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
  },
});

const style2 = StyleSheet.create({
  redBox: {
    backgroundColor: '#32CD32',
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

const style3 = StyleSheet.create({
  greenBox: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

const styleTitle = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '900',
    fontFamily: 'Outfit',
    textAlign: 'center',
    borderWidth: 0.5,
    padding: 20,
    margin: 20,
  },
});

export default App;
