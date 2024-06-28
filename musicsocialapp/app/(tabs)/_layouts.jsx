import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import {Colors} from './../../constants/Colors'


export default function TabLayouts() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor:Colors.PRIMARY
        }}>
            <Tabs.Screen name='home'
                options={{
                    tabBarLabel: 'Hoe',
                    tabBarIcon:({color})=><Ionicons name="home" size={24} color={color} />
            }}/>
            <Tabs.Screen name='explore' />
            <Tabs.Screen name='profile' />
        </Tabs>
    )
}