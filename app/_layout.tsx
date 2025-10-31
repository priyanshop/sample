import { SiliconUIProvider } from "@/theme";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { ToastWrapper } from "../package/toast/provider/ToastWrapper";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <SiliconUIProvider>
      <ToastWrapper>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ presentation: "modal", title: "Modal" }}
          />
        </Stack>
      </ToastWrapper>
    </SiliconUIProvider>
  );
}
