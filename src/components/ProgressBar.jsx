import { Animated, View } from "react-native";
import { COLORS } from "../../Theme";

export const ProgressBar = ({ progressAnim }) => {
  return (
    <View
      style={{
        width: "80%",
        height: 5,
        borderRadius: 5,
        backgroundColor: "#00000020",
        marginBottom: 10,
      }}
    >
      <Animated.View
        style={[
          {
            height: 5,
            borderRadius: 5,
            backgroundColor: COLORS.accent + "90",
          },
          {
            width: progressAnim,
          },
        ]}
      ></Animated.View>
    </View>
  );
};
