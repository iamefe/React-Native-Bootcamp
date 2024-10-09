import { Button, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export default function AnimatedBox() {
  const width = useSharedValue(100);
  const offset = useSharedValue({ x: 0, y: 0 });

  const animatedStyles = useAnimatedStyle(() => ({
    width: width.value,
    transform: [{ translateX: offset.value.x }, { translateY: offset.value.y }],
  }));

  const toggleWidth = () => {
    width.value = withTiming(Math.random() * 300 + 50, {
      duration: 500,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    });
  };

  const gesture = Gesture.Pan()
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX,
        y: e.translationY,
      };
    })
    .onEnd(() => {
      offset.value = withSpring({
        x: 0,
        y: 0,
      });
    });

  return (
    <>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </GestureDetector>
      <Button title="Toggle Width" onPress={toggleWidth} />
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    backgroundColor: "blue",
    borderRadius: 20,
    marginBottom: 20,
  },
});
