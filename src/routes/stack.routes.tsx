import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "@/app/Home"; // Importing the Home screen component
import UsernameAndEmail from "@/app/user&Email";
import UserInfo from "@/app/userInfo";
import UserAddress from "@/app/userAddress";

const Stack = createStackNavigator(); // Creating a stack navigator with the specified parameter list

export default function MyStack() {
  return (
    <Stack.Navigator>
      {/* Adding the Home screen to the stack navigator */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* Adding the Profile screen to the stack navigator */}
      <Stack.Screen
        name="UsernameAndEmail"
        component={UsernameAndEmail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserAddress"
        component={UserAddress}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
