import { Text, View, StyleSheet } from "react-native";
import Menu from "./Menu/Menu";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import GradientBackground from "../components/gradient";

export default function Index() {
  return (
    <GradientBackground style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Menu />
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
