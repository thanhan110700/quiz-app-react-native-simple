import { Text, View } from "react-native";
import { COLORS } from "../../Theme";

export const Question = ({ currentQuestionIndex, allQuestions }) => {
  return (
    <View style={{}}>
      {/* Question Counter */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            color: COLORS.black,
            fontSize: 15,
            opacity: 0.6,
            marginRight: 2,
          }}
        >
          {currentQuestionIndex + 1}
        </Text>
        <Text style={{ color: COLORS.black, fontSize: 13, opacity: 0.6 }}>
          / {allQuestions.length}
        </Text>
      </View>

      {/* Question */}
      <Text
        style={{
          color: COLORS.black,
          fontSize: 18,
          textAlign: "center",
        }}
      >
        {allQuestions[currentQuestionIndex]?.question}
      </Text>
    </View>
  );
};
