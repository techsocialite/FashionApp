import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import QuizOption from './QuizOption';

const questions = [
  {
    id: 1,
    question: 'Which aesthetic do you prefer?',
    options: [
      { text: 'Sporty', image: require('../assets/images/sporty.jpg') },
      { text: 'Chic', image: require('../assets/images/chic.png') },
      { text: 'Edgy', image: require('../assets/images/edgy.png') },
    ],
  },
  {
    id: 2,
    question: 'What is your dream location?',
    options: [
      { text: 'Paris, France', image: require('../assets/images/paris.png') },
      { text: 'Tokyo, Japan', image: require('../assets/images/tokyo.png') },
      { text: 'Dubai, UAE', image: require('../assets/images/dubai.png') },
    ],
  },
];

export default function QuizScreen({ navigation }) {
  console.log('QuizScreen rendered');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  React.useEffect(() => {
    // Preload all images
    questions.forEach(question => {
      question.options.forEach(option => {
        Asset.fromModule(option.image).downloadAsync();
      });
    });
  }, []);

  const handleAnswer = (answer) => {
    console.log('Answer selected:', answer);
    setAnswers([...answers, answer]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log('Quiz completed!', answers);
      navigation.navigate('Home');
    }
  };

  const question = questions[currentQuestion];

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option, index) => (
        <QuizOption
          key={index}
          text={option.text}
          image={option.image}
          onPress={() => handleAnswer(option.text)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

