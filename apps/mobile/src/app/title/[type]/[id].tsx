import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";

export default function TitleDetail() {
    const {id, type} = useLocalSearchParams<{id: string; type: string}>();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Text>Title Detail {id} ({type})</Text>
            <Pressable onPress={() => {
                router.back();
            }}>
                <Text>Back</Text>
            </Pressable>
        </SafeAreaView>
    )
}