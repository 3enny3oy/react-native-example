import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const AppScreen = ({children, statusBar = { hidden: false, style:null}}) => {


    return (
        <SafeAreaView>
            <StatusBar hidden={statusBar.hidden} style={statusBar.style} />
            {children}
        </SafeAreaView>
    )
}

export default AppScreen
