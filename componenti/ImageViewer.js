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