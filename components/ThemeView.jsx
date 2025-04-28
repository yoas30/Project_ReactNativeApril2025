import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import React from 'react'

const ThemeView = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light //identifikasi null (??)
  return (
    <View style={[{ backgroundColor: theme.background}, style]} {...props}
    />
  )
}

export default ThemeView