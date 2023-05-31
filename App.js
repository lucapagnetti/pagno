import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('./assets/images/luca.jpg');

export default function App() {
  const [count, setCount] = useState(0);

  const onPress = () => {
    console.log("PROVA");
    setCount(count + 1 );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View style={styles.amalia}>
        <Text>ciao mi chiamo amalia!</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 20,
    paddingTop: 90,
  },
  image: {
    width: 350,
    height: 360,
    borderRadius: 248,
  },
  amalia: {
    flex: 170,
    padding: 10,
    top: -7,
  },
});

function ImageViewer({ placeholderImageSource }) {
  return (
    <Image source={placeholderImageSource} style={styles.image} />
  );
}

const imageStyles = StyleSheet.create({
  image: {
    width: 3104,
    height: 4206,
    borderRadius: 1600,
  },
});