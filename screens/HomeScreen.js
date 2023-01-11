import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            statusBar: 'dark',
        })
    }, [])
    
    return (
        <SafeAreaView>
            <StatusBar />
            <Text className='text-red-500 text-lgr'>HomeScreen</Text>
        </SafeAreaView>
    )
}

export default HomeScreen
