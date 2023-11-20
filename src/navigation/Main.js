import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsScreen from '../screens/tabScreen';
import ProductDetails from '../screens/ProductDetails';
const Drawer = createDrawerNavigator();

const Main = () => {
    return (
        <Drawer.Navigator
        // initialRouteName="Home"
        >
            <Drawer.Screen name="TabsScreen"
                component={TabsScreen}
                options={{ headerShown: false }}
            />
            <Drawer.Screen name="ProductDetails"
                component={ProductDetails}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    )
}
export default Main
