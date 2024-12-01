import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Hydro World",
          contentStyle: { backgroundColor: "white" },
        }}
      />
      <Stack.Screen
        name="Species"
        options={{
          title: "Search Result",
          contentStyle: { backgroundColor: "white" },
          headerShown: false,
        }}
      />
    </Stack>
  );
}
