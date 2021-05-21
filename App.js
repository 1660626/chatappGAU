import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import BearTop from "./src/BearTop";
import BearBot from "./src/BearBot";

const Tab = createBottomTabNavigator();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar />
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: "tomato",
              activeBackgroundColor: "#F4F6F7",
              inactiveTintColor: "gray",
              labelStyle: {
                fontSize: 18,
                fontWeight: "bold",
                paddingBottom: 10,
              },
              style: { backgroundColor: "##FDFEFE" },
            }}
          >
            <Tab.Screen name="👆 Gấu 👆" component={BearTop} />
            <Tab.Screen name="👇 Gấu 👇" component={BearBot} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
