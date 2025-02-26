import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

import HomeScreen from "@/app/Home"; // Importing the Home screen component
import LoginScreen from "@/app/Login"
import SignupScreen from "@/app/Signup";

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
                name="Login" 
                component={LoginScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Signup" 
                component={SignupScreen} 
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}