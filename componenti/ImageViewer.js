import { StyleSheet, Image } from 'react-native';

function ImageViewer({ placeholderImageSource }) {
  return (
    <Image source={placeholderImageSource} style={imageStyles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 310,
    height: 420,
    borderRadius: 160,
  },
});