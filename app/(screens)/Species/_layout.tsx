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
          contentStyle: { backgroundColor: "white" },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                marginLeft: 10,
                padding: 5,
              }}
            >
              <Ionicons name="chevron-back-circle" size={24} color="#FF00BF" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default SearchLayout;
