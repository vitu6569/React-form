// Import React
import React from 'react';
// Import NavigationContainer from @react-navigation/native
import { NavigationContainer } from '@react-navigation/native';
// Import MyStack from stack.routes
import MyStack from './stack.routes';

// Export Routes function as default
export default function Routes() {
    return (
        // Return NavigationContainer wrapping MyStack
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}