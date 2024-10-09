import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../Theme";

export const ResultPage = ({
  navigation,
  allQuestions,
  restartQuiz,
  score,
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.background,
          width: "90%",
          borderRadius: 20,
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30 }}>Your Score</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginVertical: 30,
          }}
        >
          <Text
            style={{
              fontSize: 100,
              color: COLORS.black,
              fontWeight: "bold",
            }}
          >
            {score}
          </Text>
          <Text
            style={{
              fontSize: 100,
              color: COLORS.black,
              fontWeight: "bold",
            }}
          >
            {" "}
            / {allQuestions.length}
          </Text>
        </View>
        {/* Retry Quiz button */}
        <TouchableOpacity
          onPress={() => {
            restartQuiz();
            navigation.navigate("Welcome");
          }}
          style={{
            backgroundColor: COLORS.black,
            paddingHorizontal: 5,
            paddingVertical: 15,
            width: "50%",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: COLORS.white,
              fontSize: 20,
            }}
          >
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
