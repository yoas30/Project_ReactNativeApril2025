import { StyleSheet, View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import React from 'react'

const ThemeCard = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light //identifikasi null (??)
  return (
    <View 
    style={[{ backgroundColor: theme.uiBackground}, styles.card, 
        style]} 
        {...props}
    />
  )
}

export default ThemeCard

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 5
    }
})