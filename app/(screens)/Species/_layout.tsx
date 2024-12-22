import { Ionicons } from "@expo/vector-icons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { TouchableOpacity } from "react-native";

const SearchLayout = () => {
  const { keyword } = useLocalSearchParams();
  return (
    <Stack>
      <Stack.Screen
        name="[keyword]"
        options={{
          title: keyword ? `Species - ${keyword}` : "Species",
          contentStyle: { backgroundColor: "#012628" },
          headerStyle: {
            backgroundColor: "#012628",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                marginLeft: 10,
                padding: 5,
              }}
            >
              <Ionicons name="chevron-back-circle" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default SearchLayout;
