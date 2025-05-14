import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withDelay,
  Easing,
  withSequence,
} from "react-native-reanimated";

const PhoneIllustration = () => {
  const shineOpacity = useSharedValue(0);
  const cardScale = useSharedValue(1);

  React.useEffect(() => {
    // Shine animation
    shineOpacity.value = withRepeat(
      withSequence(
        withDelay(
          500,
          withTiming(0.3, {
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
          }),
        ),
        withTiming(0, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
      ),
      -1,
      true,
    );

    // Card subtle bounce animation
    cardScale.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
      ),
      -1,
      true,
    );
  }, []);

  const shineStyle = useAnimatedStyle(() => {
    return {
      opacity: shineOpacity.value,
    };
  });

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: cardScale.value }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.phone}>
        <View style={styles.speechBubble}>
          <Text style={styles.freeText}>GRÁTIS</Text>
        </View>
        <View style={styles.phoneTopBar} />
        <View style={styles.phoneScreen}>
          <Animated.View style={[styles.phoneShine, shineStyle]} />
        </View>
        <View style={styles.phoneBottomBar} />
      </View>

      <Animated.View style={[styles.creditCard, cardStyle]}>
        <View style={styles.cardStripe} />
        <View style={styles.visaContainer}>
          <Text style={styles.visaText}>VISA</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    position: "relative",
  },
  speechBubble: {
    position: "absolute",
    top: -10,
    right: 20,
    backgroundColor: "white",
    borderRadius: "100%",
    padding: 16,
    borderWidth: 1,
    borderColor: "#000",
    zIndex: 20,
  },
  freeText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  phone: {
    width: 90,
    height: 160,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
    zIndex: 10,
  },
  phoneTopBar: {
    width: "100%",
    height: 15,
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  phoneScreen: {
    flex: 1,
    backgroundColor: "#7FDBFF",
    position: "relative",
    overflow: "hidden",
  },
  phoneShine: {
    position: "absolute",
    top: 0,
    left: -50,
    right: -50,
    height: "100%",
    backgroundColor: "white",
    transform: [{ rotate: "-30deg" }],
  },
  phoneBottomBar: {
    width: "30%",
    height: 4,
    backgroundColor: "#e0e0e0",
    alignSelf: "center",
    marginBottom: 4,
    borderRadius: 2,
  },
  creditCard: {
    width: 100,
    height: 65,
    backgroundColor: "#2c2c2c",
    borderRadius: 8,
    position: "absolute",
    right: 70,
    top: 50,
    zIndex: 9,
  },
  cardStripe: {
    width: "100%",
    height: 20,
    backgroundColor: "#444",
    marginTop: 15,
  },
  visaContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "white",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  visaText: {
    color: "#1A1F71",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default PhoneIllustration;
