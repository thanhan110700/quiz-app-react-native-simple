import { Animated, ScrollView, StyleSheet, View } from "react-native";
import { ProgressBar } from "../components/ProgressBar";
import { Question } from "../components/Question";
import { Options } from "../components/Option";
import { COLORS } from "../../Theme";

export const QuizPage = ({
  navigation,
  fadeAnim,
  allQuestions,
  currentQuestionIndex,
  isOptionsDisabled,
  currentOptionSelected,
  progressAnim,
  setCurrentOptionSelected,
  setCorrectOption,
  correctOption,
  setIsOptionsDisabled,
  setCurrentQuestionIndex,
  setScore,
  score,
  progress,
}) => {
  const validateAnswer = (selectedOption, navigation) => {
    if (isOptionsDisabled == false) {
      let correct_option = allQuestions[currentQuestionIndex]["correct_option"];
      setCurrentOptionSelected(selectedOption);
      setCorrectOption(correct_option);
      setIsOptionsDisabled(true);
      if (selectedOption == correct_option) {
        setScore(score + 1);
      }
    } else {
      handleNext(navigation);
    }
  };

  const handleNext = (navigation) => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      navigation.navigate("Result");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
    }
    Animated.parallel([
      Animated.timing(progress, {
        toValue: currentQuestionIndex + 2,
        duration: 2000,
        useNativeDriver: false,
      }),
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
      ]),
    ]).start();
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View
        style={{
          flex: 1,
          paddingVertical: 20,
          paddingHorizontal: 30,
          backgroundColor: COLORS.background,
          position: "relative",
        }}
      >
        <View
          style={{
            marginTop: 50,
            marginVertical: 10,
            padding: 40,
            borderTopRightRadius: 40,
            borderRadius: 10,
            backgroundColor: "white",
            alignItems: "center",
            shadowColor: "#171717",
            shadowOffset: { width: -6, height: 6 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        >
          <ProgressBar progressAnim={progressAnim} />
          <Question
            currentQuestionIndex={currentQuestionIndex}
            allQuestions={allQuestions}
          />
        </View>
        <Options
          correctOption={correctOption}
          navigation={navigation}
          allQuestions={allQuestions}
          currentQuestionIndex={currentQuestionIndex}
          fadeAnim={fadeAnim}
          isOptionsDisabled={isOptionsDisabled}
          currentOptionSelected={currentOptionSelected}
          validateAnswer={validateAnswer}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "#F7EBE1",
  },
});
