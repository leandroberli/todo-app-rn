
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
            title: 'Todo App',
          }} 
        />
        <Stack.Screen name="AddTask"
          component={AddTaskScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS, gestureEnabled: true,
            title: 'Add task',
            headerTitleAlign: 'center',
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
