import React from "react";
import { View, Text, TouchableHighlight, Alert } from "react-native";

import styles from "./styles";
import { router } from "expo-router";

const MenuButton = ({ item }: any) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => router.push(`/Species/${item.keyword}`)}
    >
      <View>
        <Text style={styles.buttonText}>{item.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default MenuButton;
