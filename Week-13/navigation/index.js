import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AiSetup from "../screens/AiSetup";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={AiSetup} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
