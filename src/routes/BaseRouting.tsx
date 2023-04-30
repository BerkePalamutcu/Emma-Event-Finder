import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from '@src/screens/WelcomeScreen';
import EventsScreen from '@src/screens/EventsScreen';
import SpecificEventScreen from '@src/screens/SpecificEventScreen';

const BaseRouting = () => {
  const Stack = createStackNavigator();
  return (
    <React.Fragment>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='WelcomeScreen'>
          <Stack.Screen
            name='Welcome'
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='EventsScreen'
            component={EventsScreen}
            options={{
              headerTitle: 'Events'
            }}
          />
          <Stack.Screen
            name='SpecificEventScreen'
            component={SpecificEventScreen}
            options={{
              headerTitle: 'Event Screen'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

export default BaseRouting;
