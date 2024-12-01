import { Text, View, StyleSheet } from "react-native";
import Menu from "./screens/Menu/Menu";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <LinearGradient
      colors={[
        "#002e30",
        "#012a2c",
        "#012628",
        "#022325",
        "#021f21",
        "#031c20",
        "#04181e",
        "#05141b",
        "#0a0f17",
        "#0c0910",
        "#080407",
        "#000000",
      ]}
      style={styles.container}
    >
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Menu />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
