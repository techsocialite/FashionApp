import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

export default function QuizOption({ text, image, onPress }) {
  return (
    <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    width: '90%',
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
    alignSelf: 'center',
    backgroundColor: '#fff', // Ensures consistent background for the option
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, // Adds shadow for Android
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});