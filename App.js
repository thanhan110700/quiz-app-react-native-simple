import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
// import data from './QuizData';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "./Theme";
import { WelcomePage } from "./src/screens/Home";
import { QuizPage } from "./src/screens/Quiz";
import { ResultPage } from "./src/screens/Result";
import { data } from "./src/data";

export default function App() {
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [score, setScore] = useState(0);

  const [progress, setProgress] = useState(new Animated.Value(0));
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));

  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });

  const Stack = createNativeStackNavigator();

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
  };

  const startQuiz = () => {
    // Animated.timing(fadeAnim,{
    //     toValue: 1,
    //     duration: 1000,
    //     useNativeDriver: false
    // }).start();
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1900,
        useNativeDriver: false,
      }),
    ]).start();

    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={({ navigation }) => {
            console.log(navigation);
            return (
              <WelcomePage navigation={navigation} startQuiz={startQuiz} />
            );
          }}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={({ navigation }) => (
            <QuizPage
              navigation={navigation}
              allQuestions={allQuestions}
              currentQuestionIndex={currentQuestionIndex}
              fadeAnim={fadeAnim}
              correctOption={correctOption}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              isOptionsDisabled={isOptionsDisabled}
              setCorrectOption={setCorrectOption}
              setIsOptionsDisabled={setIsOptionsDisabled}
              setCurrentOptionSelected={setCurrentOptionSelected}
              currentOptionSelected={currentOptionSelected}
              progressAnim={progressAnim}
              setProgress={setProgress}
              setScore={setScore}
              score={score}
              progress={progress}
            />
          )}
          options={{
            title: "Question",
            headerStyle: {
              backgroundColor: "#EDA276",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Result"
          component={({ navigation }) => (
            <ResultPage
              navigation={navigation}
              score={score}
              correctOption={correctOption}
              restartQuiz={restartQuiz}
              allQuestions={allQuestions}
            />
          )}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
