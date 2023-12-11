import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./navigation/AppNavigation";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar style="auto" />
        <AppNavigation />
      </Provider>
    </NavigationContainer>
  );
}
