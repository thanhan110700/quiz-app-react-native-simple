import { Animated, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../Theme";

export const Options = ({
  navigation,
  allQuestions,
  currentQuestionIndex,
  fadeAnim,
  isOptionsDisabled,
  currentOptionSelected,
  validateAnswer,
  correctOption,
}) => {
  return (
    <View style={{ marginTop: 100 }}>
      {allQuestions[currentQuestionIndex]?.options.map((option, index) => (
        <Animated.View
          key={index}
          style={{
            opacity: fadeAnim,
            transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [(150 / 4) * (index + 10), 0], // 0 : 150, 0.5 : 75, 1 : 0
                }),
              },
            ],
          }}
        >
          <TouchableOpacity
            onPress={() => validateAnswer(option, navigation)}
            key={option}
            style={{
              backgroundColor: isOptionsDisabled
                ? option == correctOption
                  ? COLORS.success
                  : option == currentOptionSelected
                  ? COLORS.error
                  : COLORS.grey
                : COLORS.accent,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              paddingHorizontal: 30,
              marginVertical: 10,
              shadowColor: "#171717",
              shadowOffset: { width: -3, height: 3 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: COLORS.white,
                textAlign: "center",
              }}
            >
              {option}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </View>
  );
};
