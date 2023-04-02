// import { createNativeTabNavigator } from '@react-navigation/native-Tab';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../Screens/Dashboard';
import Profile from '../Screens/Profile';
export default function AppRoutes() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName='Dashboard'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Profile') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Dashboard') {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                // tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ title: 'Dashboard' }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ title: 'Profile' }}
            />

        </Tab.Navigator>
    );

}