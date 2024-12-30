import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  console.log('HomeScreen rendered');

  const handleQuizPress = () => {
    console.log('Take the Style Quiz button pressed');
    if (navigation) {
      console.log('Navigation prop exists');
      navigation.navigate('Quiz');
    } else {
      console.error('Navigation prop is undefined');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Fashion App</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleQuizPress}
      >
        <Text style={styles.buttonText}>Take the Style Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('Create a Moodboard button pressed');
          navigation.navigate('MoodBoard');
        }}
      >
        <Text style={styles.buttonText}>Create a Moodboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2d251e',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#c48476',
  },
  button: {
    backgroundColor: '#977661',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

