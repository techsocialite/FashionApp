import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

export default function MoodBoardScreen() {
  const [images, setImages] = useState([]);

  // Function to handle image selection
  const selectImage = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          const newImage = response.assets[0].uri;
          setImages((prevImages) => [...prevImages, newImage]);
        }
      }
    );
  };

  // Function to render each image in the grid
  const renderImage = ({ item }) => (
    <TouchableOpacity style={styles.imageContainer}>
      <Image source={{ uri: item }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Mood Board</Text>
      <Button title="Add Image" onPress={selectImage} />
      <FlatList
        data={images}
        renderItem={renderImage}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Displays images in 2 columns
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  grid: {
    marginTop: 16,
  },
  imageContainer: {
    flex: 1,
    margin: 8,
    height: 150,
    backgroundColor: '#eee',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
