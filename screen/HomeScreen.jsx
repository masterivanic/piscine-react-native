import { View, Text, StyleSheet } from 'react-native'
import { React } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConnectScreen from './ConnectScreen';
import SubscribeScreen from './SubscribeScreen';
import DashboardScreen from './DashoardScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {

    return (
        <Stack.Navigator initialRouteName="ConnectScreen">
            <Stack.Screen name="ConnectScreen" component={ConnectScreen} />
            <Stack.Screen name="SubscribeScreen" component={SubscribeScreen} />
            <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        </Stack.Navigator>
    );
};

export default HomeScreen