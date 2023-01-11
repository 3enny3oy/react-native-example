import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AppScreen from '../components/AppScreen';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            statusBar: 'dark',
        })
    }, [])
    
    return (
        <AppScreen>
            <Text className='text-red-500'>Home</Text>
        </AppScreen>
    )
}

export default HomeScreen
