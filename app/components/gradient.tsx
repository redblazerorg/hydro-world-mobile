import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface GradientBackgroundProps {
  colors?: string[];
  style?: ViewStyle;
  children?: ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  colors,
  style,
  children,
}) => {
  const defaultColors = [
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
  ];

  return (
    <LinearGradient
      colors={colors || defaultColors}
      style={[styles.gradient, style]}
    >
      <View>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default GradientBackground;
